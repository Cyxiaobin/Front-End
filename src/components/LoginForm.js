import React, { Component } from 'react';
import '../assets/css/login.css';

import {Link} from 'react-router-dom'


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}}




        
 render(){ 
     
    window.onload=function(){
    createCode(4);    
   }

   //生成验证码的方法
   function createCode(length) {
       var code = "";
       var codeLength = parseInt(length); //验证码的长度
       var checkCode = document.getElementById("checkCode");
       ////所有候选组成验证码的字符，当然也可以用中文的
       var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
       'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
       'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); 
       //循环组成验证码的字符串
       for (var i = 0; i < codeLength; i++)
       {
           //获取随机验证码下标
           var charNum = Math.floor(Math.random() * 62);
           //组合成指定字符验证码
           code += codeChars[charNum];
       }
       if (checkCode)
       {
           //为验证码区域添加样式名
           checkCode.className = "code";
           //将生成验证码赋值到显示区
           checkCode.innerHTML = code;
       }
   }
   

//    function ulogin() {
				
//     var userName = document.getElementById("uName").value;
//     var userPass = document.getElementById("uPass").value;
    
//     if (userPass == "123" && userName == "帅气的小鹏") {
//         alert("登陆成功");
//         window.location.href='欢迎界面2.html'
//     } 
//     else if (userName == "" || userName == null) {
//         alert("用户名不能为空");
//         return false;
//     } 
//     else if (userPass == "" || userPass == null) {
//         alert("密码不能为空");
//         return false;
//     } 
//     else if (userPass != "root" || userName != "root") {
//         alert("用户名或密码错误");
//         return false;
//     } 
//     else{
//         return true;
//     }
        
// }


    return(
        <div>
            <img class="div102"></img>
            <p class="div101" >欢迎登录</p>
            <p class="div103">用户名/学号</p>
            <p class="div104">密码</p>
             <p class="div120">验证码： </p>
            <p class="div105">忘记秘密？</p>
            <input type="checkbox" class="div106"></input> 
            <input type="text" placeholder="请输入用户名" class="div108" id="uName"></input>
            <input type="text" placeholder="请输入密码" class="div109" id="uPass"></input>  
            <input type="text" id="inputCode" placeholder="请输入验证码" class="div121"/>
        
            <td> <div id="checkCode"  class="code"  onclick="createCode(4)" ></div></td>
            {/* <td> <span onclick="createCode(4)">看不清换一张</span></td> */}

            <p class="div107">自动登录</p>
            <button class="div110"  onclick="" >登录</button>
          
           
           
      
           
        </div>
    )
 }

}






    
export default LoginForm;
