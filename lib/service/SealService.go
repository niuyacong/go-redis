package service

import (
	"encoding/json"
	"log"

	Beans "go-redis/lib/beans"
	"go-redis/lib/helper"
)

//这个公共的地址已经在别的类(InitService.go)里面配置了
// const (
// 	host string = "http://localhost:8080/tech-sdkwrapper/timevale"
// )
//创建个人模板印章
func CreatePerSeal() {
	var PerSeal Beans.PerSealConfig
	PerSeal.AccountId = "576EAFB6B5714B9D956DD235E0061CA4"
	PerSeal.Color = "RED"
	PerSeal.TemplateType = "HWXK"
	var dataJsonStr string
	if data, err := json.Marshal(PerSeal); err == nil {
		dataJsonStr = string(data)
	}
	log.Println("创建个人模板印章：--------------------")
	log.Println("请求参数JSON字符串：" + dataJsonStr)
	api_url := host + "/seal/addPersonSeal"
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

//创建企业模板印章
func CreateOrgSeal() {
	var OrgSeal Beans.OrgSealConfig
	OrgSeal.AccountId = "6C3E0F9F7A4C4CEC8B64609C2077BDF8"
	OrgSeal.Color = "RED"
	OrgSeal.HText = ""
	OrgSeal.QText = ""
	OrgSeal.TemplateType = "STAR"

	var dataJsonStr string
	if data, err := json.Marshal(OrgSeal); err == nil {
		dataJsonStr = string(data)
	}
	log.Println("创建企业模板印章：------------------")
	log.Println("请求参数JSON字符串：" + dataJsonStr)
	api_url := host + "/seal/addOrganizeSeal"
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

// 获取某本地印章图片的base64，可以作为sealdata，调用签署接口进行签署
func GetSealDataByFilepath(filepath string) string {
	return helper.Base64EncodeByFile(filepath)
}
