package service

import (
	"encoding/json"
	"log"

	Beans "go-redis/lib/beans"
	"go-redis/lib/helper"
	//HttpHelper "github.com/sjzdlm/htesign/lib/httphelper"
)

//CreatePerAccount 这个公共的地址已经在别的类(InitService.go)里面配置了
// const (
// 	host string = "http://localhost:8080/tech-sdkwrapper/timevale"
// )
//创建个人账户
func CreatePerAccount() {
	var PerAccountInfo Beans.PerAccountConfig

	PerAccountInfo.Email = "sdsds@163.com"
	PerAccountInfo.Mobile = "13378987656"
	PerAccountInfo.Name = "zhangsan"
	PerAccountInfo.IdNo = "130401197211032168"
	PerAccountInfo.Organ = "杭州天谷信息科技有限公司"
	PerAccountInfo.Title = "test"
	PerAccountInfo.Address = "shenlong"
	PerAccountInfo.PersonArea = "0"
	var dataJsonStr string
	if data, err := json.Marshal(PerAccountInfo); err == nil {
		dataJsonStr = string(data)
	}
	log.Println("创建个人账户：--------------")
	log.Println("请求参数JSON字符串：" + dataJsonStr)
	api_url := host + "/account/addPerson"
	log.Println("发送地址: " + api_url)
	// 初始化接口返回值
	var initResult []byte
	// Http状态码
	var httpStatus int
	// 以POST方式请求API接口
	initResult, httpStatus = helper.SendPOST(api_url, dataJsonStr)
	log.Println("返回参数：------------------")
	log.Println(string(initResult))
	log.Println("状态码：-----------------------")
	log.Println(httpStatus)

}

//UpateAccAccount更新个人账户
func UpateAccAccount() {
	//待更新信息
	var UpdatePerBaseInfo Beans.UpdatePerBaseInfo
	var UpdatePerAccountInfo Beans.UpdatePerAccountInfo

	UpdatePerBaseInfo.Address = "西湖区"
	UpdatePerBaseInfo.Email = "12312312@qq.com"
	UpdatePerBaseInfo.Mobile = "13876565657"
	UpdatePerBaseInfo.Name = "张三"
	UpdatePerBaseInfo.Organ = "杭州天谷信息科技有限公司"
	UpdatePerBaseInfo.Title = "研发工程师"

	UpdatePerAccountInfo.DeleteList[0] = "EMAIL"
	UpdatePerAccountInfo.AccountId = "576EAFB6B5714B9D956DD235E0061CA4"
	UpdatePerAccountInfo.UpdatePerson = UpdatePerBaseInfo

	var dataJsonStr string
	if data, err := json.Marshal(UpdatePerAccountInfo); err == nil {
		dataJsonStr = string(data)
	}
	log.Println("更新个人账户: -------------------")
	log.Println("请求参数JSON字符串：" + dataJsonStr)
	api_url := host + "/account/updatePerson"
	log.Println("发送地址: " + api_url)
	// 初始化接口返回值
	var initResult []byte
	// Http状态码
	var httpStatus int
	// 以POST方式请求API接口
	initResult, httpStatus = helper.SendPOST(api_url, dataJsonStr)
	log.Println("发送地址:------------------")
	log.Println(api_url)
	log.Println("返回参数：------------------")
	log.Println(string(initResult))
	log.Println("状态码：-----------------------")
	log.Println(httpStatus)

}

//CreateOrgAccount创建企业账户
func CreateOrgAccount() {
	//企业信息
	var OrgAccountInfo Beans.OrgAccountConfig
	//
	OrgAccountInfo.Email = "asd@qq.com"
	OrgAccountInfo.Mobile = "18304077804"
	OrgAccountInfo.Name = "张三"
	OrgAccountInfo.OrganType = "0"
	OrgAccountInfo.UserType = "2"
	OrgAccountInfo.OrganCode = "911101055825564383"
	OrgAccountInfo.LegalName = "尘兮"
	OrgAccountInfo.LegalIdNo = "130401197211032168"
	OrgAccountInfo.LegalArea = "0"
	OrgAccountInfo.AgentIdNo = ""
	OrgAccountInfo.AgentName = ""
	OrgAccountInfo.Address = ""
	OrgAccountInfo.Scope = ""
	OrgAccountInfo.RegType = "MERGE"
	var dataJsonStr string
	if data, err := json.Marshal(OrgAccountInfo); err == nil {
		dataJsonStr = string(data)
	}
	log.Println("创建企业账户: -------------------")
	log.Println("请求参数JSON字符串：" + dataJsonStr)
	api_url := host + "/account/addOrganize"
	log.Println("发送地址: " + api_url)
	// 初始化接口返回值
	var initResult []byte
	// Http状态码
	var httpStatus int
	// 以POST方式请求API接口
	initResult, httpStatus = helper.SendPOST(api_url, dataJsonStr)
	log.Println("发送地址:------------------")
	log.Println(api_url)
	log.Println("返回参数：------------------")
	log.Println(string(initResult))
	log.Println("状态码：-----------------------")
	log.Println(httpStatus)
}

//UpdateOrgAccount更新企业账户
func UpdateOrgAccount() {
	var UpdateOrgBaseInfo Beans.UpdateOrgBaseInfo
	var UpdateOrgAccountInfo Beans.UpdateOrgAccountInfo

	UpdateOrgBaseInfo.Email = "hahhahhha@tsign.com"
	UpdateOrgBaseInfo.Mobile = "18304077804"
	UpdateOrgBaseInfo.Name = "杭州九重天科技有限公司"
	UpdateOrgBaseInfo.OrganType = "0"
	UpdateOrgBaseInfo.UserType = "2"
	UpdateOrgBaseInfo.LegalName = "尘兮"
	UpdateOrgBaseInfo.LegalIdNo = "130401197211032168"
	UpdateOrgBaseInfo.LegalArea = "MAINLAND"

	UpdateOrgAccountInfo.AccountId = "6C3E0F9F7A4C4CEC8B64609C2077BDF8"
	UpdateOrgAccountInfo.UpdateOrg = UpdateOrgBaseInfo
	UpdateOrgAccountInfo.DeleteList[0] = "EMAIL"

	var dataJsonStr string
	if data, err := json.Marshal(UpdateOrgAccountInfo); err == nil {
		dataJsonStr = string(data)
	}
	log.Println("更新企业账户: -------------------")
	log.Println("请求参数JSON字符串：" + dataJsonStr)
	api_url := host + "/account/updateOrganize"
	log.Println("发送地址: " + api_url)
	// 初始化接口返回值
	var initResult []byte
	// Http状态码
	var httpStatus int
	// 以POST方式请求API接口
	initResult, httpStatus = helper.SendPOST(api_url, dataJsonStr)
	log.Println("发送地址:------------------")
	log.Println(api_url)
	log.Println("返回参数：------------------")
	log.Println(string(initResult))
	log.Println("状态码：-----------------------")
	log.Println(httpStatus)

}

//注销账号
func DeleteAccount() {
	var DeleteAccountInfo Beans.DeleteAccountInfo
	DeleteAccountInfo.AccountId = "CFB1586183A54800862033AB5C3A4DAF"
	var dataJsonStr string
	if data, err := json.Marshal(DeleteAccountInfo); err == nil {
		dataJsonStr = string(data)
	}
	log.Println("注销账户: -------------------")
	log.Println("请求参数JSON字符串：" + dataJsonStr)
	api_url := host + "/account/delete"
	log.Println("发送地址: " + api_url)
	// 初始化接口返回值
	var initResult []byte
	// Http状态码
	var httpStatus int
	// 以POST方式请求API接口
	initResult, httpStatus = helper.SendPOST(api_url, dataJsonStr)
	log.Println("发送地址:------------------")
	log.Println(api_url)
	log.Println("返回参数：------------------")
	log.Println(string(initResult))
	log.Println("状态码：-----------------------")
	log.Println(httpStatus)

}
