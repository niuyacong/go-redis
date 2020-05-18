package controllers

import (
	"time"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/sjzdlm/db"

	"github.com/astaxie/beego"
	"go-redis/lib/beans"
	"go-redis/lib/helper"
	"go-redis/lib/service"
)

//MainController 主控制器
type MainController struct {
	beego.Controller
}

//Get 首页
func (c *MainController) Get() {

	fmt.Println("------------------------------------------")
	fmt.Println("1243")
	fmt.Println( time.Duration(1000))
	fmt.Println(time.Microsecond)
	c.Ctx.WriteString("hello htesign!")
}

//Token 获取Token 测试
func (c *MainController) Token() {
	var appId = "7438802093"
	var apiURL = "https://smlopenapi.esign.cn/v1/oauth2/access_token?appId=7438802093&secret=358e0a772c256bf77d6e4739b4cf54b4&grantType=client_credentials"
	var dataJSONStr = ""
	// 初始化接口返回值
	var initResult []byte
	// Http状态码
	var httpStatus int
	// 以POST方式请求API接口
	initResult, httpStatus = helper.SendPOST(apiURL, dataJSONStr)
	log.Println("返回参数：------------------")
	log.Println(string(initResult))
	log.Println("状态码：-----------------------")
	log.Println(httpStatus)
	log.Println("----------------------------")

	var res, err = httpGet(apiURL)
	if err != nil {
		fmt.Println(`调用接口错误`, err)
		c.Ctx.WriteString(`-1`)
		return
	}

	// var res = `
	// {
	// 	"code": 0,
	// 	"message": "成功",
	// 	"data": {
	// 	"expiresIn": "1588215524684",
	// 	"token": "000",
	// 	"refreshToken": "d6273d2a3460b61d1eb86d9d9cbb70f4"
	// 	}
	// }
	// `
	//进行解析
	eqbToken := beans.AccessToken{} //E签宝Token数据解析
	var bytes = []byte(res)

	var rep_body = fmt.Sprintf("%s", bytes)
	fmt.Println("post body:", rep_body)

	if err := json.Unmarshal(bytes, &eqbToken); err == nil {
		fmt.Println("解析后数据:\r\n", eqbToken)
		//处理事件
		var sqlstr = `update ht_token set
		expiresIn=?,
		token=?,
		refreshToken=?
		where appid=?
		;`
		var htdb = db.NewDb("hetong")
		if htdb != nil {
			db.Exec2(htdb, sqlstr, eqbToken.Data.ExpiresIn, eqbToken.Data.Token, eqbToken.Data.RefreshToken, appId)
		}

	} else {
		fmt.Println("解析错误:\r\n", err.Error())
	}

	c.Ctx.WriteString(res)
}
func httpGet(url string) (string, error) {
	postReq, err := http.NewRequest("GET", url, nil)
	postReq.Header.Set("X-Tsign-Open-App-Id", "7438802093")
	postReq.Header.Set("X-Tsign-Open-Token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJnSWQiOiI0ZDA1ZTkzMTM1Yzk0ZDI3YWVlZDZjMTY5YTI3ZjY4YiIsImFwcElkIjoiNzQzODgwMjA5MyIsIm9JZCI6IjI3YjQ5ZTgwYjQ4NjQ3MzJiMzBmOTM4NTY1ZThjZDlmIiwidGltZXN0YW1wIjoxNTg4OTAwNzc1NzcxfQ.zMydufqgveD8o2sWvBAT1sdza3GyyzbQ1LzA_cYNVPU")
	postReq.Header.Set("Content-Type", "application/json")
	if err != nil {
		fmt.Println("请求失败", err)
		return "", err
	}

	client := &http.Client{}
	resp, err := client.Do(postReq)

	if err != nil {
		fmt.Println("client请求失败", err)
		return "", err
	}

	data, _ := ioutil.ReadAll(resp.Body)
	defer resp.Body.Close()

	return string(data), err
}

//Demo 电子签约测试
func (c *MainController) Demo() {
	service.InitApp()
	log.Println("开始测试了:--------------------")
	//创建个人账户
	// Demo.CreatePerAccount()
	//更新个人账户
	// Demo.UpateAccAccount()
	//创建企业账户
	// Demo.CreateOrgAccount()
	//更新企业账户
	// Demo.UpdateOrgAccount()
	//注销账户
	// Demo.DeleteAccount()
	//创建个人模板印章
	// Demo.CreatePerSeal()
	//创建企业模板印章
	// Demo.CreateOrgSeal()
	//平台自身摘要签署
	// Demo.PlatSelfSign()
	//	平台用户PDF摘要签署
	// Demo.UserOfPlatSign()
	//	PDF文档验签:这里注意文件路径，一定要复制，不要手打，否则有可能会找不到路径
	// Demo.PDFVerify()
	/*
		获取某本地印章图片的base64，可以作为sealdata，调用签署接口进行签署
		filepath := "C:/Users/chen_xi/Pictures/印章图片/outPerson.PNG"
		sealdata := Demo.GetSealDataByFilepath(filepath)
		log.Println("印章sealData是:--------------------")
		log.Println(sealdata)
	*/
	//	平台用户PDF摘要签署（文件流）
	// Demo.UserOfPlatSignByStream()
	c.Ctx.WriteString("hello!")
}

//E签宝半程电子签约接口调用流程-----------------------------------------------------------------------------------------------
/*
1.通过模板ID查看合同模板详情[可忽略]  /v1/docTemplates/{模板ID}  注意:模板ID需要在设计阶段从网页复制,不是模板列表显示的ID
2.通过合同模板ID创建电子合同 4.2.8 /v1/files/createByTemplate
3.调用签署流程创建接口  5.2     /v1/signflows
4.调用签署流程文档添加接口 6.2
5.调用平台签署自动签章签署区接口 8.1.2
6.调用签署流程开启接口 9.2
7.调用签署流程归档接口 10.2 注意:如果9.2自动归档参数为true,则无需调用此接口
8.调用流程文档下载接口
*/

//ViewByTpl 查看模板详情
func (c *MainController) ViewByTpl() {
	var apiURL = "https://smlopenapi.esign.cn/v1/docTemplates/a49522e740ad445085b4a838bf78d7f1"

	log.Println("----------------------------")

	var res, err = httpGet(apiURL)
	if err != nil {
		fmt.Println(`调用接口错误`, err)
		c.Ctx.WriteString(`-1`)
		return
	}
	fmt.Println("--------文档模板:", res)
	c.Ctx.WriteString(res)
}

//CreateByTpl 从模板创建合同
func (c *MainController) CreateByTpl() {
	var host = "https://smlopenapi.esign.cn"
	// var SignedPDF Beans.SignedPDF
	// // SignedPDF.File = "‪D:/wtptest/esign693656747503309958.pdf"
	// SignedPDF.File = "D:/wtptest/esign693656747503309958.pdf"
	// var dataJSONStr string
	// if data, err := json.Marshal(SignedPDF); err == nil {
	// 	dataJSONStr = string(data)
	// }

	var dataJSONStr = `
	{
		"name":"线上春糖五星战略协办",
		"simpleFormFields":{
			"bd4f38b04bf543baba538f8b1ae1c90f":"123456",
			"be1153cdc3a24ecaba8b553b5d84419e":"测试甲方"
		},
		"templateId":"a49522e740ad445085b4a838bf78d7f1"
	}
	`

	log.Println("请求参数JSON字符串：" + dataJSONStr)
	apiURL := host + "/v1/files/createByTemplate"
	log.Println("发送地址: " + apiURL)
	// 初始化接口返回值
	var initResult []byte
	// Http状态码
	var httpStatus int
	// 以POST方式请求API接口
	initResult, httpStatus = helper.SendPOST(apiURL, dataJSONStr)
	log.Println("返回参数：------------------")
	log.Println("------[", string(initResult), "]------")
	log.Println("状态码：-----------------------")
	log.Println(httpStatus)

	c.Ctx.WriteString(string(initResult))
}

//SignFlows 签署流程创建接口
func (c *MainController) SignFlows() {
	var host = "https://smlopenapi.esign.cn"
	// var SignedPDF Beans.SignedPDF
	// // SignedPDF.File = "‪D:/wtptest/esign693656747503309958.pdf"
	// SignedPDF.File = "D:/wtptest/esign693656747503309958.pdf"
	// var dataJSONStr string
	// if data, err := json.Marshal(SignedPDF); err == nil {
	// 	dataJSONStr = string(data)
	// }

	var dataJSONStr = `
	{
		"autoArchive":true,
		"businessScene":"线上春糖五星战略协办"
	}
	`

	log.Println("请求参数JSON字符串：" + dataJSONStr)
	apiURL := host + "/v1/signflows"
	log.Println("发送地址: " + apiURL)
	// 初始化接口返回值
	var initResult []byte
	// Http状态码
	var httpStatus int
	// 以POST方式请求API接口
	initResult, httpStatus = helper.SendPOST(apiURL, dataJSONStr)
	log.Println("返回参数：------------------")
	log.Println("------[", string(initResult), "]------")
	log.Println("状态码：-----------------------")
	log.Println(httpStatus)

	c.Ctx.WriteString(string(initResult))
}

//SignFlowAddDoc 签署流程文档添加接口
func (c *MainController) SignFlowAddDoc() {
	var host = "https://smlopenapi.esign.cn"
	var flowID = "d9c197efa13946e39e10d9315e2c5f5e"
	// var SignedPDF Beans.SignedPDF
	// // SignedPDF.File = "‪D:/wtptest/esign693656747503309958.pdf"
	// SignedPDF.File = "D:/wtptest/esign693656747503309958.pdf"
	// var dataJSONStr string
	// if data, err := json.Marshal(SignedPDF); err == nil {
	// 	dataJSONStr = string(data)
	// }

	var dataJSONStr = `
	{
		"docs":[
			{
				"encryption":0,
				"fileId":"1128ad7e4a1a48db89549c6d2ca07442",
				"fileName":"线上春糖五星战略协办.pdf",
				"filePassword":""
			}
		]
	}
	`

	log.Println("请求参数JSON字符串：" + dataJSONStr)
	apiURL := host + "/v1/signflows/" + flowID + "/documents"
	log.Println("发送地址: " + apiURL)
	// 初始化接口返回值
	var initResult []byte
	// Http状态码
	var httpStatus int
	// 以POST方式请求API接口
	initResult, httpStatus = helper.SendPOST(apiURL, dataJSONStr)
	log.Println("返回参数：------------------")
	log.Println("------[", string(initResult), "]------")
	log.Println("状态码：-----------------------")
	log.Println(httpStatus)

	c.Ctx.WriteString(string(initResult))
}

//SignFlowPlatformSign 签署流程平台自动盖章区添加接口
func (c *MainController) SignFlowPlatformSign() {
	var host = "https://smlopenapi.esign.cn"
	var flowID = "d9c197efa13946e39e10d9315e2c5f5e"
	// var SignedPDF Beans.SignedPDF
	// // SignedPDF.File = "‪D:/wtptest/esign693656747503309958.pdf"
	// SignedPDF.File = "D:/wtptest/esign693656747503309958.pdf"
	// var dataJSONStr string
	// if data, err := json.Marshal(SignedPDF); err == nil {
	// 	dataJSONStr = string(data)
	// }

	var dataJSONStr = `
	{
		"signfields":[
			{
				"fileId":"1128ad7e4a1a48db89549c6d2ca07442",
				"order":1,
				"posBean":{
					"posPage":"1",
					"posX":158.72531,
					"posY":431.05658
				},
				"signType":1
			}
		]
	}
	`

	log.Println("请求参数JSON字符串：" + dataJSONStr)
	apiURL := host + "/v1/signflows/" + flowID + "/signfields/platformSign"
	log.Println("发送地址: " + apiURL)
	// 初始化接口返回值
	var initResult []byte
	// Http状态码
	var httpStatus int
	// 以POST方式请求API接口
	initResult, httpStatus = helper.SendPOST(apiURL, dataJSONStr)
	log.Println("返回参数：------------------")
	log.Println("------[", string(initResult), "]------")
	log.Println("状态码：-----------------------")
	log.Println(httpStatus)

	c.Ctx.WriteString(string(initResult))
}

//SignFlowStart 签署流程开启接口
func (c *MainController) SignFlowStart() {
	var host = "https://smlopenapi.esign.cn"
	var flowID = "d9c197efa13946e39e10d9315e2c5f5e"
	// var SignedPDF Beans.SignedPDF
	// // SignedPDF.File = "‪D:/wtptest/esign693656747503309958.pdf"
	// SignedPDF.File = "D:/wtptest/esign693656747503309958.pdf"
	// var dataJSONStr string
	// if data, err := json.Marshal(SignedPDF); err == nil {
	// 	dataJSONStr = string(data)
	// }

	var dataJSONStr = ``

	log.Println("请求参数JSON字符串：" + dataJSONStr)
	apiURL := host + "/v1/signflows/" + flowID + "/start"
	log.Println("发送地址: " + apiURL)
	// 初始化接口返回值
	var initResult []byte
	// Http状态码
	var httpStatus int
	// 以POST方式请求API接口
	initResult, httpStatus = helper.SendPUT(apiURL, dataJSONStr)
	log.Println("返回参数：------------------")
	log.Println("------[", string(initResult), "]------")
	log.Println("状态码：-----------------------")
	log.Println(httpStatus)

	c.Ctx.WriteString(string(initResult))
}

//SignFlowsDoc 下载签署流程文档
func (c *MainController) SignFlowsDoc() {
	var flowID = "d9c197efa13946e39e10d9315e2c5f5e"
	var apiURL = "https://smlopenapi.esign.cn/v1/signflows/" + flowID + "/documents"

	var res, err = httpGet(apiURL)
	if err != nil {
		fmt.Println(`调用接口错误`, err)
		c.Ctx.WriteString(`-1`)
		return
	}
	fmt.Println("--------文档模板:", res)
	c.Ctx.WriteString(res)
}
