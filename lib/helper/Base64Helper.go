package helper

import (
	"encoding/base64"
	"fmt"
	"io/ioutil"
	"os"
)

// Base64编码
func Base64Encode(dataString string) string {
	encodeString := base64.StdEncoding.EncodeToString([]byte(dataString))
	return encodeString
}

// Base64解码
func Base64Decode(encodeString string) []byte {
	decodeBytes, err := base64.StdEncoding.DecodeString(encodeString)
	if err != nil {
		fmt.Println(err)
	}
	return decodeBytes
}

// 将文件进行Base64编码
func Base64EncodeByFile(filePath string) string {
	file, err := os.Open(filePath)
	if err != nil {
		fmt.Println(err)
	}
	fileBytes, err := ioutil.ReadAll(file)
	if err != nil {
		fmt.Println(err)
	} else {
		file.Close()
	}
	encodeString := base64.StdEncoding.EncodeToString(fileBytes)
	return encodeString
}

// 保存文件
func SaveFileByBase64(base64String, outFilePath string) {
	// 将Base64字符串解码为[]byte
	var fileBytes = Base64Decode(base64String)

	saveFileErr := ioutil.WriteFile(outFilePath, fileBytes, 0666)

	if saveFileErr != nil {
		fmt.Println("文件保存失败:" + saveFileErr.Error())
		panic(saveFileErr)
	} else {
		fmt.Println("文件保存成功:" + outFilePath)
	}
}
