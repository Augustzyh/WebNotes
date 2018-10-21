<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="58期-张宇航">
  <meta name="Keywords" content="大章鱼">
  <meta name="Description" content="章鱼网页">
  <link rel="shortcut icon" href="../images/octopus.ico">
  <title>账号注册</title>
  <style type="text/css">
    body,p,h1,h2,h3,h4,h5,h6,dt,dd,ul,ol,dl{margin:0; }
    ul,ol,dl{padding:0; }
    li{list-style:none;}
    a{text-decoration:none; color:#000;}
    img{border:none;}
    body{
        background:url("../images/1.jpg") center;
    }
    #login{
        width:325px;
        height:400px;
        border:1px solid #bbb;
        margin:100px auto;
        border-radius:20px;
        box-shadow:0 0 15px #bbb;
    }
    #login ul{
        margin:10px auto;
    }
    #login ul li{
        position:relative;
        padding-top:30px;
    }
    #login ul li span{
        display:inline-block;
        width:90px;
        height:20px;
        color:#7f7fff;
        text-align:center;
    }
    #login span:hover{
        color:#bbb;
    }
    #login ul li input{
        
        width:190px;
        height:30px;
        border:1px solid #bbb;
        border-radius:3px;
    }
    #login ul li .tip{
        display:none;
        position:absolute;
        left:300px;
        top:22px;
        width:250px;
        height:50px;
        background:rgba(0,0,255,0.5);
        border-radius:5px;
    }
    #login ul li .tip i{
        display:block;
        position:absolute;
        left:-20px;
        top:16px;
        width:0;
        height:0;
        border:10px solid transparent;
        border-right-color:rgba(0,0,255,0.5);
    }
    #login ul li .tip p{
        color:#fff;
        text-align:center;
        line-height:50px;
    }
    #login ul li input:focus + .tip{
        display:block;
    }
    #login .btn{
        float:right;
        margin:5px 35px auto auto;
    }
    #login .btn input{
        height:30px;
        border:none;
        background:rgba(0,0,255,0.5);
        color:#fff;
        border-radius:5px;
        cursor:pointer;
    }
    #login .btn input:hover{
        background-color:#bbb;
        color:#7f7fff;
    }
    #login .sex{
        display:inline-block;
        width:80px;
        margin:11px auto auto 20px;
    }
    #login .sex span{
        color:#7f7fff;
    }
    #login .sex select{
        width:43px;
        color:#7f7fff;
    }
  </style>
  <script>
    function checkq()
    {
        x = document.getElementById("check").value;
        y = x.indexOf("@");
        if(y == -1)
        {
            alert("您输入的邮箱不含@哦！很严谨的-_-，下次注意！");
        }
        else {
            alert("哎哟不错哦，邮箱写@了！")
            }
    }
  </script>
 </head>
 <body>
    <div id="login">
        <form action="../hm12.html" method="post">
        <ul>
            <li>
                <span>user</span>
                <input type="text" placeholder="请输入用户名" name="user"/>
                <div class="tip">
                    <i></i>
                    <p>用户名由6-10位字母或数字组成</p>
                </div>
            </li>
            <li>
                <span>password</span>
                <input type="password" placeholder="请输入密码" name="password"/>
                <div class="tip">
                    <i></i>
                    <p>请设置您的密码</p>
                </div>
            </li>
            <li>
                <span>password</span>
                <input type="password" placeholder="再次输入密码" name="psw"/>
                <div class="tip">
                    <i></i>
                    <p>请再次输入密码</p>
                </div>
            </li>
            <li>
                <span>email</span>
                <input type="text" placeholder="请输入邮箱" name="email" id="check"/>
                <div class="tip">
                    <i></i>
                    <p>请输入您的邮箱</p>
                </div>
            </li>
            <li>
                <span>nickname</span>
                <input type="text" placeholder="昵称" name="nickname"/>
                <div class="tip">
                    <i></i>
                    <p>为你的账号起一个名字</p>
                </div>
            </li>
        </ul>
            <div class="sex">
            <span class="sex-name">性别</span>
            <select name="sex" id="">
                <option value="man">男</option>
                <option value="woman">女</option>
            </select>
            </div>
            <div class="btn">
            <input type="submit" value="注册" onclick="checkq();javascript:alert('注册成功');"/>
            <input type="button" onclick="window.location.href='../hm12.html'" value="我有账号直接登陆"/>
            </div>
        </form>
    </div>
 </body>
</html>
