package service

import (
	"encoding/json"
	"log"
	"net/http"

	Beans "go-redis/lib/beans"
	"go-redis/lib/helper"
)

//PlatSelfSign 这个公共的地址已经在别的类(InitService.go)里面配置了
// const (
// 	host string = "http://localhost:8080/tech-sdkwrapper/timevale"
// )
//平台自身摘要签署
func PlatSelfSign() {
	var PlatSelfSignInfo Beans.PlatSelfSignConfig
	var SignPosInfo Beans.SignPos
	var FileInfo Beans.File
	//-------JSON拼接-------
	SignPosInfo.PosType = 1
	SignPosInfo.PosPage = "1"
	SignPosInfo.Key = "乙方签名"
	SignPosInfo.Width = "159"

	FileInfo.SrcPdfFile = "D:\\test.pdf"
	FileInfo.FileName = "test.pdf"
	FileInfo.DstPdfFile = "D:\\wtptest"
	FileInfo.OwnerPassword = "123"

	PlatSelfSignInfo.FileInfo = FileInfo
	PlatSelfSignInfo.SignPosInfo = SignPosInfo
	PlatSelfSignInfo.SealId = "0"
	PlatSelfSignInfo.SignType = "Key"

	var dataJSONStr string
	if data, err := json.Marshal(PlatSelfSignInfo); err == nil {
		dataJSONStr = string(data)
	}
	log.Println("平台自身摘要签署：----------------- ")
	log.Println("请求参数JSON字符串：" + dataJSONStr)
	apiURL := host + "/sign/selfFileSign"
	log.Println("发送地址: " + apiURL)
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
}

//UserOfPlatSign 平台用户PDF摘要签署
func UserOfPlatSign() {
	var UserOfPlatSignInfo Beans.UserOfPlatSignConfig
	var SignPosInfo Beans.SignPos
	var FileInfo Beans.File
	//-------JSON拼接-------
	SignPosInfo.PosType = 1
	SignPosInfo.PosPage = "1"
	SignPosInfo.Key = "乙方签名"
	SignPosInfo.Width = "159"

	FileInfo.SrcPdfFile = "D:\\test.pdf"
	FileInfo.FileName = "test.pdf"
	FileInfo.DstPdfFile = ""
	FileInfo.OwnerPassword = "123"

	UserOfPlatSignInfo.FileInfo = FileInfo
	UserOfPlatSignInfo.SignPosInfo = SignPosInfo
	UserOfPlatSignInfo.AccountId = "576EAFB6B5714B9D956DD235E0061CA4"
	UserOfPlatSignInfo.SignType = "Key"
	UserOfPlatSignInfo.SealData = "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"

	var dataJSONStr string
	if data, err := json.Marshal(UserOfPlatSignInfo); err == nil {
		dataJSONStr = string(data)
	}
	log.Println("平台用户PDF摘要签署：----------------- ")
	log.Println("请求参数JSON字符串：" + dataJSONStr)
	apiURL := host + "/sign/userFileSign"
	log.Println("发送地址: " + apiURL)
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
	//--------------文件流的解析与转存------------
	var saveDir string = "D:/FileTemp/dstFileTemp/mysigned.pdf"
	if httpStatus == http.StatusOK {
		var resultMap map[string]interface{}
		var errUnmarshal = json.Unmarshal([]byte(initResult), &resultMap)

		if errUnmarshal != nil {
			log.Println("JSON字符串转Map失败")
		} else {
			var errCode = int(resultMap["errCode"].(float64))
			// var msg = resultMap["msg"].(string)
			if errCode == 0 {
				log.Println("平台用户PDF摘要签署成功：----------------")
				//解析出文件流base64并将其转换到指定位置存为pdf
				getStream := resultMap["stream"].(string)
				helper.SaveFileByBase64(getStream, saveDir)

			} else {
				log.Println("平台用户PDF摘要签署失败:--------------ending...")
			}

		}
	}
}

//UserOfPlatSignByStream 平台用户签，根据文件流
func UserOfPlatSignByStream() {
	var SignPosInfo Beans.SignPos
	//-------JSON拼接-------
	SignPosInfo.PosType = 1
	SignPosInfo.PosPage = "1"
	SignPosInfo.Key = "乙方签名"
	SignPosInfo.Width = "159"
	SignPosInfo.CacellingSign = "false"
	SignPosInfo.QrcodeSign = "false"
	SignPosInfo.PosPage = "145"
	SignPosInfo.PosX = "159"
	SignPosInfo.PosY = "159"
	//signpos节点传入的json
	var dataJSONStr string
	if data, err := json.Marshal(SignPosInfo); err == nil {
		dataJSONStr = string(data)
	}
	log.Println("平台用户PDF摘要签署【基于文件流】：----------------- ")
	log.Println("拼接的json：" + dataJSONStr)
	//自定义入参：
	//待签署文件路径
	filedir := "D:/test.pdf"
	//发送地址
	apiURL := host + "/sign/userStreamSign"
	filename := "test"
	//文档编辑密码
	ownerPassword := ""
	//签署后PDF文档本地路径（不传则返回签署后的文件流）
	dstPdfFile := "D:\\111.pdf"
	//签章类型
	signType := "Key"
	//签署账户标识
	accountID := "576EAFB6B5714B9D956DD235E0061CA4"
	//印章图片base64
	sealData := "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"
	log.Println("发送地址: " + apiURL)
	res := helper.Up(filedir, apiURL, dataJSONStr, filename, ownerPassword, dstPdfFile, signType, accountID, sealData)

	log.Println("返回参数:-----------------------")
	log.Println(res)

}

//PDFVerify 文档验签
func PDFVerify() {
	var SignedPDF Beans.SignedPDF
	// SignedPDF.File = "‪D:/wtptest/esign693656747503309958.pdf"
	SignedPDF.File = "D:/wtptest/esign693656747503309958.pdf"
	var dataJSONStr string
	if data, err := json.Marshal(SignedPDF); err == nil {
		dataJSONStr = string(data)
	}
	log.Println("PDF文档验签：----------------- ")
	log.Println("请求参数JSON字符串：" + dataJSONStr)
	apiURL := host + "/verify/fileVerify"
	log.Println("发送地址: " + apiURL)
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
}
