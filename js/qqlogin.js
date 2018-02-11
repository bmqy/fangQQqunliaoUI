
// 插入QQ登录按钮
QC.Login({
    btnId:"qqLoginBtn"	//插入按钮的节点id
});

// 调用openapi获取当前登录用户基本信息
var paras = {};

QC.api("get_user_info", paras)
    .success(function(s){//成功回调
        console.log(s);
        app.user.nickname = s.data.nickname;
        app.user.avatar = s.data.figureurl;
        app.user.status.vip = s.data.vip;
    })
    .error(function(f){//失败回调
        console.log("获取用户信息失败！");
    })
    .complete(function(c){//完成请求回调
        console.log("获取用户信息完成！");
    });

// 获取openId 与 accessToken
if(QC.Login.check()){//如果已登录
    QC.Login.getMe(function(openId, accessToken){
        console.log(["当前登录用户的", "openId为："+openId, "accessToken为："+accessToken].join("\n"));
    });
    //这里可以调用自己的保存接口
    //...
}