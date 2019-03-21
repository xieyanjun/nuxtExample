# m.hoolihome.com-nuxt

> hooli m站

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

hooli m站

version: 1.1.0

技术栈：Nuxt.js

yarn run build:dev
pm2 start npm --name "devm.hoolihome.com" -- run start

yarn run build:test
pm2 start npm --name "testm.hoolihome.com" -- run start

yarn run build:ready
pm2 start npm --name "readym.hoolihome.com" -- run start

yarn run build
pm2 start npm --name "m.hoolihome.com" -- run start

-------------------------------------

/* eslint-disable */
// eslint-disable-next-line
// eslint-disable-line no-console
/* prettier-ignore */

php接口参数加密key： 32884bc57d7f761a9b1296e1a59cfbc0
/common/：  b15681f74461af9642ab5356fba7962b

iconfont:
<https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1089243&keyword=>
项目：m.hoolihome.com

oss存储:
/assets/* <=> //static.hoolihome.com/m/assets/*
/assets/css/main.css <=> //static.hoolihome.com/m/assets/css/main.css
/assets/img/logo.png <=> //static.hoolihome.com/m/assets/img/logo.png

路由：
http(s)://m.hoolihome.com
/               m站首页

/cn             m站中文首页
/cn/*           m站中文其它路由和/一致

/en             m站英文首页
/en/*           m站英文其它路由和/一致

测试url:    <http://testm.hoolihome.com/>

预发url:    <http://readym.hoolihome.com/> <https://readym.hoolihome.com/>

生产url:    <http://m.hoolihome.com/> <https://m.hoolihome.com/>

m站可能打开环境：
1、手机浏览器（系统自带Android浏览器、Safari、QQ、UC、360、百度等）
2、微信：微信webview、微信小程序webview
3、Hooli APP（Android、iOS）webview
4、光大银行APP webview
5、PC浏览器
6、其它环境

m站适配:
<http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js>

UI框架: Vant
<https://youzan.github.io/vant/#/zh-CN/intro>

postcss:
  postcss-px2rem -- remUnit: 37.5 (px自动转换为rem, 默认为iPhone6/7/8，比例为37.5px : 1rem)
  在不需要转换的css后面加上: border: 1px red solid; /*px*/
  px2rem会自动适配px, 字体同理, 默认为dpr=2下的值
