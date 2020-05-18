package main

import (
	//wxmp "sjzmp/conf"

	_ "go-redis/routers"

	"github.com/astaxie/beego"
	"github.com/sjzdlm/db"
)

func main() {
	db.InitX()
	beego.Run()
}
