package beans

//个人模板印章
type PerSealConfig struct {
	AccountId    string `json:"accountId"`
	Color        string `json:"color"`
	TemplateType string `json:"templateType"`
}

//企业模板印章
type OrgSealConfig struct {
	AccountId    string `json:"accountId"`
	Color        string `json:"color"`
	TemplateType string `json:"templateType"`
	HText        string `json:"hText"`
	QText        string `json:"qText"`
}
