package beans

//--------------新增个人账户--------------
type PerAccountConfig struct {
	Email      string `json:"email"`
	Mobile     string `json:"mobile"`
	Name       string `json:"name"`
	IdNo       string `json:"idNo"`
	Organ      string `json:"organ"`
	Title      string `json:"title"`
	Address    string `json:"address"`
	PersonArea string `json:"personArea"`
}

//---------------新增企业账户---------------
type OrgAccountConfig struct {
	Email     string `json:"email"`
	Mobile    string `json:"mobile"`
	Name      string `json:"name"`
	OrganType string `json:"organType"`
	UserType  string `json:"userType"`
	OrganCode string `json:"organCode"`
	LegalName string `json:"legalName"`
	LegalIdNo string `json:"legalIdNo"`
	LegalArea string `json:"legalArea"`
	AgentIdNo string `json:"agentIdNo"`
	AgentName string `json:"agentName"`
	Address   string `json:"address"`
	Scope     string `json:"scope"`
	RegType   string `json:"regType"`
}

//---------------更新个人账户-------------
type UpdatePerBaseInfo struct {
	Email   string `json:"email"`
	Mobile  string `json:"mobile"`
	Organ   string `json:"organ"`
	Title   string `json:"title"`
	Address string `json:"address"`
	Name    string `json:"name"`
}
type UpdatePerAccountInfo struct {
	UpdatePerson UpdatePerBaseInfo `json:"updatePerson"`
	AccountId    string            `json:"accountId"`
	DeleteList   [1]string         `json:"deleteList"`
}

//----------更新企业账户--------------
type UpdateOrgBaseInfo struct {
	Email     string `json:"email"`
	Mobile    string `json:"mobile"`
	Name      string `json:"name"`
	Address   string `json:"address"`
	OrganType string `json:"organType"`
	UserType  string `json:"userType"`
	LegalName string `json:"legalName"`
	LegalIdNo string `json:"legalIdNo"`
	LegalArea string `json:"legalArea"`
	AgentName string `json:"agentName"`
	AgentIdNo string `json:"agentIdNo"`
	Scope     string `json:"scope"`
}
type UpdateOrgAccountInfo struct {
	UpdateOrg  UpdateOrgBaseInfo `json:"updateOrganize"`
	AccountId  string            `json:"accountId"`
	DeleteList [1]string         `json:"deleteList"`
}

//----------注销账号----------------
type DeleteAccountInfo struct {
	AccountId string `json:"accountId"`
}
