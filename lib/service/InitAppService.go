package service

import (
	"encoding/json"
	"log"

	Beans "go-redis/lib/beans"
	"go-redis/lib/helper"
)

//这个公共的服务地址统一在本InitService.go里面进行配置
const (
	host string = "https://smlopenapi.esign.cn/tech-sdkwrapper/timevale"
)

//应用初始化
func InitApp() {
	var initProject Beans.InitProjectConfig
	var httpConfig Beans.HttpConfig
	var signConfig Beans.SignConfig
	var projectConfig Beans.ProjectConfig
	//----json拼接----
	projectConfig.ItsmApiUrl = "http://smlitsm.tsign.cn:8080/tgmonitor/rest/app!getAPIInfo2"
	//填入贵司的projectid
	projectConfig.ProjectId = "7438802093"
	//填入贵司的ProjectSecret
	projectConfig.ProjectSecret = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnfJ9LpQ2fNPBxfcuidzG06/HqJh0p7m0OZT1IX0KbsLxQo39PFbEbhSJClMBJ+SooiV/YXcjTOW2tDGHaCLxMXdIoupPzg8G2DLS802lJbIbvjysQJ+thatG6R5PCgC3nNoG6ctRCU1vlJjSnbZrDqwEemjlmV0JCLVGx4+aAWgZaWIwjZ0VWLhHD4OEPPGpmw0ddxgDpM36eS2N9QU4I5T+JR6wV926mCxzElK3bHKFaK8QFctOkzn1tAQFtvphsP4Olw9aJcIGKaTa8yZz2dWve4tTpxlwW4GOZJ+upGVpGOsK07Nv5Z9xC8Gho5UktTNefW3yyTIodttyqmO1MQIDAQAB"

	httpConfig.HttpType = "HTTP"
	httpConfig.ProxyIp = ""
	httpConfig.ProxyPort = ""
	httpConfig.Retry = "5"

	signConfig.Algorithm = "HMACSHA256"
	signConfig.EsignPublicKey = ""
	signConfig.PrivateKey = "5"

	initProject.HttpConfig = httpConfig
	initProject.ProjectConfig = projectConfig
	initProject.SignConfig = signConfig

	var dataJsonStr string
	if data, err := json.Marshal(initProject); err == nil {
		dataJsonStr = string(data)
	}
	log.Println("应用初始化：--------")
	log.Println("请求参数JSON字符串：" + dataJsonStr)
	api_url := host + "/init"
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
