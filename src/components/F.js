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
        upload = ()=>{
            var xhr = new XMLHttpRequest()
            var data ={
                "userName":this.state.userName,
                "userPassword":this.state.userPassword,
                "Name":this.state.Name,
                "Gender":this.state.Gender,
                "Age":this.state.Age
            }
            xhr.open("post","/user/register","true")
            xhr.onreadystatechange=function(params) {
                if(xhr.readyState==4){
                        if(xhr.status==200){
                                message.info(xhr.reponseText)
                                console.log(xhr.responseText)
                        }else{
                                message.info(xhr.status)
                        }
                }
            }
            xhr.setRequestHeader('content-type','application/json');
            xhr.send(JSON.stringify(data))
        }
        
    render(){
       
        
        return(
            <div>
                <div class="header-line"></div>
                <div class="content">
                    <img class="content-logo" src="img/form_logo.png" alt="logo"></img>
                <h1 class="content-title"> 创建账户</h1>
                <div class="content-form">
                    <form method="post" action="" >
                <div id="change_margin_1">
                    <input value={this.state.userName} onChange={e=>this.changeValue(e)} class="userName" type="text" name="userName" placeholder="请输入用户名" ></input>
                </div>
                <p id="remind_1"></p>
                <div id="change_margin_2">
                    <input value={this.state.userPassword} onChange={e=>this.changeValue(e)} class="userPassword" type="password" name="userPassword" placeholder="请输入密码" ></input>
                </div>
                <p id="remind_2"></p>
                <div id="change_margin_3">
                <input value={this.state.Name} onChange={e=>this.changeValue(e)} class="Name" type="text" name="Name" placeholder="姓名" ></input>
                </div>
                <div id="change_margin_4">
                <input value={this.state.Gender} onChange={e=>this.changeValue(e)} class="Gender" type="text" name="Gender" placeholder="性别" ></input>
                </div>
                <div id="change_margin_5">
                <input value={this.state.Age} onChange={e=>this.changeValue(e)} class="Age" type="number" name="Age" placeholder="年龄" ></input>
                    
                </div>
                <div id="change_margin_6">
                    <input onClick={this.upload} class="content-form-signup" type="submit" value="创建账户"></input>
                </div>
                </form>
                </div>
                <div class="content-login-description">已经拥有账户？</div>
                <div><a class="content-login-link" href="log_in.html">登录</a></div>
                </div>
            </div>
        )
    }
}


export default F;