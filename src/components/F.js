import React,{Component} from 'react';
import '../assets/css/F.css';
import {message} from 'antd';

import {Link} from 'react-router-dom'

class F extends Component { 
        constructor(props){
            super(props);
            this.state={}
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
                "gender":this.state.gender,
                "age":this.state.age
  
  }
  fetch("/user/register",{


    method:"post",
    data:data,
  
    herders:{
        "Content-Type":"application/json"
  
    },
    body:JSON.stringify(data)
  }).then(response=>response.json())
  .then(result=>{
    if(result.state==2){
        message.info("订单已存在")
    }else if(result.state==1){
        message.info("提交成功")
    }
  }).catch(e=>{
    message.error(e)
  })
    
  
            
  
        }
        
    render(){
       
        
        return(
            <div class="beijing2">
                <div class="header-line"></div>
                <div class="content">
                   {/* logo */}
                <h1 class="content-title"> 创建账户</h1>
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
                <div id="change_margin_3">
                <input value={this.state.name} onChange={e=>this.changeValue(e)} class="Name" type="text" name="name" placeholder="姓名" ></input>
                </div>
                <div id="change_margin_4">
                <input value={this.state.gender} onChange={e=>this.changeValue(e)} class="Gender" type="text" name="gender" placeholder="性别" ></input>
                </div>
                <div id="change_margin_5">
                <input value={this.state.age} onChange={e=>this.changeValue(e)} class="Age" type="number" name="age" placeholder="年龄" ></input>
                    
                </div>
                <div id="change_margin_6">
                    <input onClick={this.upload} class="content-form-signup" type="submit" value="创建账户"></input>
                </div>
                </form>
                </div>
                <div class="content-login-description">已经拥有账户？
              
        <Link to="/ReactForm/" style={{color:'black'}}>
        <div  type="button"><ul>立即登录</ul></div>
        </Link>
</div>

               
                </div>
            </div>
        )
    }
}


export default F;