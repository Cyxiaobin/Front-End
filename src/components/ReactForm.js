import React, { Component } from 'react';
import {Link} from 'react-router-dom'
 import '../assets/css/F.css';
import  { Input,Button,message,script} from 'antd';


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
   
     var data={
         "password":this.state.password,
                "username":this.state.username,
               
  
  }
  fetch("/user/login",{


    method:"post",
    data:data,
  
    herders:{
        "Content-Type":"application/json"
  
    },
    body:JSON.stringify(data)
  }).then(response=>response.json())
  .then(result=>{
    if(result.state==2){
        message.info("登录失败")
    }else if(result.state==1){
        message.info("登录成功")
    }
  }).catch(e=>{
    message.error(e)
  })
    
  
            
  
        }
   
            //fetch

		
	
            

     
    





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
<div  type="button"><ul>立即注册</ul></div>
</Link>
</div>
</div>
        </div>
    )
}  

}


export default ReactForm;
