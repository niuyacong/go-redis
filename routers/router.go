package routers

import (
	"github.com/astaxie/beego"
	"go-redis/controllers"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.AutoRouter(&controllers.MainController{})
	beego.AutoRouter(&controllers.TestController{})
}
