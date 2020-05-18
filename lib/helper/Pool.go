package helper

import (
	_"strconv"
	"github.com/astaxie/beego"
    "github.com/gomodule/redigo/redis"
    "os"
    "os/signal"
    "syscall"
    "time"
)

var (
    Pool *redis.Pool
)

func init() {
    redisHost := beego.AppConfig.String("redisHost")
    if redisHost == "" {
        redisHost = ":6379"
    }
    Pool = newPool(redisHost)
    cleanupHook()
}

func newPool(server string) *redis.Pool {
	//var timeout = beego.AppConfig.String("timeout")
	// j, err :=strconv.ParseInt(timeout,10,64)
	
    return &redis.Pool{

        MaxIdle:     3,
        IdleTimeout: 240 * time.Second,
        Dial: func() (redis.Conn, error) {
			c, err := redis.Dial("tcp", server,
				redis.DialPassword(beego.AppConfig.String("password")),
                redis.DialConnectTimeout(time.Duration(1000)*time.Second),
                redis.DialReadTimeout(time.Duration(1000)*time.Second),
                redis.DialWriteTimeout(time.Duration(1000)*time.Second))
            if err != nil {
                return nil, err
            }
            return c, err
        },
	
        TestOnBorrow: func(c redis.Conn, t time.Time) error {
            _, err := c.Do("PING")
            return err
        },
	}
	
}

func cleanupHook() {

    c := make(chan os.Signal, 1)
    signal.Notify(c, os.Interrupt)
    signal.Notify(c, syscall.SIGTERM)
    signal.Notify(c, syscall.SIGKILL)
    go func() {
        <-c
        Pool.Close()
        os.Exit(0)
    }()
}