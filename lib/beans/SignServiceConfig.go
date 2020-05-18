package beans

//签署位置信息signPos
type SignPos struct {
	PosType       int    `json:"posType"`
	PosPage       string `json:"posPage"`
	PosX          string `json:"posX"`
	PosY          string `json:"posY"`
	Key           string `json:"key"`
	Width         string `json:"width"`
	CacellingSign string `json:"cacellingSign"`
	QrcodeSign    string `json:"qrcodeSign"`
}

//签署文件file信息
type File struct {
	SrcPdfFile    string `json:"srcPdfFile"`
	DstPdfFile    string `json:"dstPdfFile"`
	FileName      string `json:"fileName"`
	OwnerPassword string `json:"ownerPassword"`
}

//平台自身签
type PlatSelfSignConfig struct {
	SignPosInfo SignPos `json:"signPos"`
	FileInfo    File    `json:"file"`
	SignType    string  `json:"signType"`
	SealId      string  `json:"sealId"`
}

//平台用户签
type UserOfPlatSignConfig struct {
	SignPosInfo SignPos `json:"signPos"`
	FileInfo    File    `json:"file"`
	SignType    string  `json:"signType"`
	AccountId   string  `json:"accountId"`
	SealData    string  `json:"sealData"`
}

//PDF文档验签
type SignedPDF struct {
	File string `json:"file"`
}
