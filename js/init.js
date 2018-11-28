/**
 * Created by Administrator on 2017/11/29.
 * 前端的全局文件
 * 用于记录登录状态 和公共数据   全局引用
 */

/*全局参数定义*/
var loginstatus;//登录状态
var user_id=localStorage.user_id;
var userpwd=localStorage.userpwd;
var token=localStorage.token
var page_data;//当前页面数据  共本页所有函数使用
var hostUrl="https://www.mykissbear.com/"
/*
全局参数定义结束
* */
var L=getUrlname(window.location.href)

if(!(L=="login.html"||L=="register.html")){
    if(!(user_id>1)){
        window.location.href="login.html";
    }
}


//加载启动页面函数
//autoload();
//获取登录状态给全局参数   调用原生函数
function getLoginStatus(){

}
//登录函数 登录后复制
function login(){

}
//获取get变量
function getQueryString(name){
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

function getUrlname(url){
    url=url.split('?')[0];
    var urlSlashCount=url.split('/').length;
    return url.split('/')[urlSlashCount-1].toLowerCase();
}