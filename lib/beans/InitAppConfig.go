package beans

//应用初始化
type HttpConfig struct {
	HttpType  string `json:"httpType"`
	Retry     string `json:"retry"`
	ProxyIp   string `json:"proxyIp,omitempty"` //如果为空置则忽略字段
	ProxyPort string `json:"proxyPort,omitempty"`
}
type ProjectConfig struct {
	ProjectId     string `json:"projectId"`
	ProjectSecret string `json:"projectSecret"`
	ItsmApiUrl    string `json:"itsmApiUrl"`
}
type SignConfig struct {
	Algorithm      string `json:"algorithm"`
	PrivateKey     string `json:"privateKey,omitempty"`     //如果为空置则忽略字段
	EsignPublicKey string `json:"esignPublicKey,omitempty"` //如果为空置则忽略字段
}
type InitProjectConfig struct {
	ProjectConfig ProjectConfig `json:"projectConfig"`
	HttpConfig    HttpConfig    `json:"httpConfig"`
	SignConfig    SignConfig    `json:"signConfig"`
}

//AccessToken /v1/oauth2/access_token
type AccessToken struct {
	Code int64 `json:"code"`
	Data struct {
		ExpiresIn    string `json:"expiresIn"`
		RefreshToken string `json:"refreshToken"`
		Token        string `json:"token"`
	} `json:"data"`
	Message string `json:"message"`
}
