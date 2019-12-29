import React, { Component } from 'react';
import '../assets/css/login.css';

import {Link} from 'react-router-dom'
import  { Input,Button,message,script} from 'antd';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    changeValue=(e)=>{
        this.setState(
            {
                [e.target.name]:e.target.value
            }
        )}
        Upload = () =>{
               //xhr
            var xhr = new XMLHttpRequest()
            var data={
                "username":this.state.username,
                "password":this.state.password,
                // "gender":this.state.gender,
                // "age":this.state.age,
                // "address":this.state.address,


        }
        
            //open连接
            xhr.open("post","/user/login")
            //配件响应函数
            xhr.onreadystatechange=function () {
                    if(xhr.readyState==4){
                                if(xhr.status==200){
                                       
                                        console.log(xhr.responseText)
                               var result = JSON.parse( xhr.responseText)
                                        if(result.state==2

                                 ){message.info("用户名已存在")

                                 }else if(result.state==1){message.info("注册成功")

                                 }  
                                    }else{
                                    message.info(xhr.status)
                                }
                    }
            }
            //发送数据
            xhr.setRequestHeader('content-type','application/json');
            xhr.send(JSON.stringify(data))

            //fetch

		
	
            

        }

    




    


        
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
//    function validateCode() {

//  //获取显示区生成的验证码
//  var checkCode = document.getElementById("checkCode").innerHTML;
//  //获取输入的验证码
//  var inputCode = document.getElementById("inputCode").value;
//  console.log(checkCode);
//  console.log(inputCode);
//  if (inputCode.length <= 0)
//  {
//      alert("请输入验证码！");
//  }
//  else if (inputCode.toUpperCase() != checkCode.toUpperCase())
//  {
//      alert("验证码输入有误！");
//      createCode(4);
//  }
//  else
//  {
//      alert("验证码正确！");
//  }       
       
//    }



    return(
        <div>
            <img class="div102"></img>
            <p class="div101" >欢迎登录</p>
            <p class="div103">用户名/学号</p>
            <p class="div104">密码</p>
             <p class="div120">验证码： </p>
            <p class="div105">忘记秘密？</p>
            <input type="checkbox" class="div106"  ></input> 
            <input type="text" placeholder="请输入用户名" class="div108" name="username" id="username" value={this.state.username} 
            onChange={e=>this.changeValue(e) }/>
            <input type="text" placeholder="请输入密码" class="div109" name="password" id="password" value={this.state.password}
             onChange={e=>this.changeValue(e)}></input>  
            <input type="text" id="inputCode" placeholder="请输入验证码" class="div121"/>
        
            <td> <div id="checkCode"  class="code"  onclick="reateCode(4)" ></div></td>
       

            <p class="div107">自动登录</p>
            <Button class="div110"  onClick={this.Upload} >登录</Button>
          
           
           
      
           
        </div>
        
    )
 }

}






    
export default LoginForm;
