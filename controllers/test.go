package controllers
import (
	"fmt"
	"github.com/astaxie/beego"
	"go-redis/lib/helper"
)
type TestController struct {
	beego.Controller
}

func (c *TestController) Get() {
	data,err:=helper.Exists("niu")
	fmt.Println(data,err)
	if data == false{
		helper.Set("niu",[]byte("123"))
	}
	fmt.Println("---------------------------")
	val,err1:=helper.Get("niu")
	fmt.Println(string(val),err1)

	val1,err2:=helper.Lindex("test",4)
	fmt.Println(string(val1),err2)
	c.Ctx.WriteString("hello htesign1!")
}
