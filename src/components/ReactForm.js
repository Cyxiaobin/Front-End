import React, { Component } from 'react';
import {Link} from 'react-router-dom'
 import '../assets/css/F.css';
import  { input,Button,message,script} from 'antd';


class ReactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    changeValue=(e)=>{
        this.setState({
          [e.target.name]:e.target.value
        })
      }
      Upload = () =>{
        //xhr
   var xhr = new XMLHttpRequest()
     var data={
         "password":this.state.password,
                "username":this.state.username,
               
  
  }
//   fetch("/user/login",{


//     method:"post",
//     data:data,
  
//     herders:{
//         "Content-Type":"application/json"
  
//     },
//     body:JSON.stringify(data)
//   }).then(response=>response.json())
//   .then(result=>{
//     if(result.state==2){
//         message.info("登录失败")
//     }else if(result.state==1){
//         message.info("登录成功")
//     }
//   }).catch(e=>{
//     message.error(e)
//   })
    
  
            
  
//         }
   
            //fetch

	
                xhr.open("post","/user/login")
                
                xhr.onreadystatechange = function (  ) {
                    if(xhr.readyState == 4){
                        if(xhr.status == 200){
                            console.log(xhr.responseText)
                            var result = JSON.parse(xhr.responseText)
                            if(result.state==2){
                                message.info("用户名或密码错误！")
                                message.info(xhr.responseText)
        
                            }else if(result.state==1){
                                message.info("登录成功")
                                message.info(xhr.responseText)
                            }
                        }else{
        
                        }
                    }
                    }
                    xhr.setRequestHeader('content-type','application/json');
                    xhr.send(JSON.stringify(data))
                    
                }

     
    
            



        
    render() {
        return (
            <div class="beijing">
            <div class="header-line"></div>
            <div class="content">
          
            <h1 class="content-title"> 立即登录</h1>
            <div class="content-form">
                <form  action="" >
            <div id="change_margin_1">
                <input value={this.state.username} onChange={e=>this.changeValue(e)} class="userName" type="text" name="username" placeholder="请输入用户名" ></input>
            </div>
            <p id="remind_1"></p>
            <div id="change_margin_2">
                <input value={this.state.password} onChange={e=>this.changeValue(e)} class="userPassword" type="password" name="password" placeholder="请输入密码" ></input>
            </div>
            <p id="remind_2"></p>
         
            <div id="change_margin_6">
                <input onClick={this.upload} class="content-form-signup" type="submit" value="立即登录"></input>
            </div>
            </form>
            </div>
            <div class="content-login-description">没有账户？立即注册
              
<Link to="/F/" style={{color:'black'}}>
<div  type="Button"><ul>立即注册</ul></div>
</Link>
</div>
</div>
        </div>
    )
}  

}


export default ReactForm;
