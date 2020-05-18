package helper

import (
	"bytes"
	"io"
	"io/ioutil"
	"mime/multipart"
	"net/http"
	"os"
	"path/filepath"
)

//SendPOST POST请求
func SendPOST(apiUrl string, data string) ([]byte, int) {
	// API接口返回值
	var apiResult []byte
	url := apiUrl
	//fmt.Println("URL:>", url)

	var jsonStr = []byte(data)
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonStr))
	req.Header.Set("X-Tsign-Open-App-Id", "7438802093")
	req.Header.Set("X-Tsign-Open-Token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJnSWQiOiI0ZDA1ZTkzMTM1Yzk0ZDI3YWVlZDZjMTY5YTI3ZjY4YiIsImFwcElkIjoiNzQzODgwMjA5MyIsIm9JZCI6IjI3YjQ5ZTgwYjQ4NjQ3MzJiMzBmOTM4NTY1ZThjZDlmIiwidGltZXN0YW1wIjoxNTg4OTAwNzc1NzcxfQ.zMydufqgveD8o2sWvBAT1sdza3GyyzbQ1LzA_cYNVPU")
	req.Header.Set("Content-Type", "application/json")
	client := &http.Client{}
	resp, err := client.Do(req)

	if err != nil {
		panic(err)
	} else {
		var httpStatus = resp.StatusCode
		if httpStatus != http.StatusOK {
			return apiResult, httpStatus
		}
		defer resp.Body.Close()
		body, _ := ioutil.ReadAll(resp.Body)
		apiResult = body
		return apiResult, httpStatus
	}
}

//SendPUT PUT请求
func SendPUT(apiUrl string, data string) ([]byte, int) {
	// API接口返回值
	var apiResult []byte
	url := apiUrl
	//fmt.Println("URL:>", url)

	var jsonStr = []byte(data)
	req, err := http.NewRequest("PUT", url, bytes.NewBuffer(jsonStr))
	req.Header.Set("X-Tsign-Open-App-Id", "7438802093")
	req.Header.Set("X-Tsign-Open-Token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJnSWQiOiI0ZDA1ZTkzMTM1Yzk0ZDI3YWVlZDZjMTY5YTI3ZjY4YiIsImFwcElkIjoiNzQzODgwMjA5MyIsIm9JZCI6IjI3YjQ5ZTgwYjQ4NjQ3MzJiMzBmOTM4NTY1ZThjZDlmIiwidGltZXN0YW1wIjoxNTg4OTAwNzc1NzcxfQ.zMydufqgveD8o2sWvBAT1sdza3GyyzbQ1LzA_cYNVPU")
	req.Header.Set("Content-Type", "application/json")
	client := &http.Client{}
	resp, err := client.Do(req)

	if err != nil {
		panic(err)
	} else {
		var httpStatus = resp.StatusCode
		if httpStatus != http.StatusOK {
			return apiResult, httpStatus
		}
		defer resp.Body.Close()
		body, _ := ioutil.ReadAll(resp.Body)
		apiResult = body
		return apiResult, httpStatus
	}
}

// (filedir, api_url, dataJsonStr,ownerPassword,dstPdfFile ,signType ,accountId ,sealData )
func Up(filedir string, sendurl string, signpos string, filname string, ownerPassword string, dstPdfFile string, signType string, accountId string, sealData string) string {
	//创建一个缓冲区对象,后面的要上传的body都存在这个缓冲区里
	bodyBuf := &bytes.Buffer{}
	bodyWriter := multipart.NewWriter(bodyBuf)
	//要上传的文件
	// filepath := "D:/test.pdf"
	//创建第一个需要上传的文件,filepath.Base获取文件的名称
	fileWriter1, _ := bodyWriter.CreateFormFile("file", filepath.Base(filedir))
	//打开文件
	fd1, _ := os.Open(filedir)
	defer fd1.Close()
	//把第一个文件流写入到缓冲区里去
	_, _ = io.Copy(fileWriter1, fd1)
	bodyWriter.WriteField("fileName", filname)
	bodyWriter.WriteField("ownerPassword", ownerPassword)
	bodyWriter.WriteField("dstPdfFile", dstPdfFile)
	bodyWriter.WriteField("signPos", signpos)
	bodyWriter.WriteField("signType", signType)
	bodyWriter.WriteField("accountId", accountId)
	bodyWriter.WriteField("sealData", sealData)
	//获取请求Content-Type类型,后面有用
	contentType := bodyWriter.FormDataContentType()
	bodyWriter.Close()
	//创建一个http客户端请求对象
	client := &http.Client{}
	//创建一个post请求
	req, _ := http.NewRequest("POST", sendurl, nil)
	//设置请求头
	req.Header.Set("User-Agent", "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:47.0) Gecko/20100101 Firefox/47.0")
	//这里的Content-Type值就是上面contentType的值
	req.Header.Set("Content-Type", contentType)
	//转换类型
	req.Body = ioutil.NopCloser(bodyBuf)
	//发送数据
	data, _ := client.Do(req)
	//读取请求返回的数据
	bytes, _ := ioutil.ReadAll(data.Body)
	defer data.Body.Close()
	//返回数据
	return (string(bytes))
}
