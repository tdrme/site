//微信QQ屏蔽
    // 跳转提示
    if (is_weixn_qq()) {;
        window.location.href = 'https://c.pc.qq.com/middle.html?pfurl='+window.location.href; 
    }
    function is_weixn_qq(){
        // 判断当前是否微信/QQ浏览器
        var ua = navigator.userAgent;
        var isWeixin = !!/MicroMessenger/i.test(ua);
        var isQQ = !!/QQ\//i.test(ua);
        if(isWeixin||isQQ){
            return true;
        }
        return false;
    }
