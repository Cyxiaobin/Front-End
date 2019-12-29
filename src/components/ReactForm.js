import React, { Component } from 'react';
import '..//assets/css/index.css'

import  { Input,Button,message,script} from 'antd';


class ReactForm extends Component {
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
                "gender":this.state.gender,
                "age":this.state.age,
                "address":this.state.address,


        }
        
            //open连接
            xhr.open("post","/user/register")
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

    





    render() {
        return (
 <div class="loginBox"   style={{
     height :400,
     backgroundImage: "url(" + require("../assets/image/2.jpg")+")"
 }}
 >
            <div align="center" >


                 用户名: 
                  <Input type="text" placeholder="填真实姓名" name="username" id="username" value={this.state.username} onChange={e=>this.changeValue(e)}/> <br /><br />
                密码:
                <Input type="password" name="password" id="password" value={this.state.password} onChange={e=>this.changeValue(e)}></Input><br /><br />
                性别：
                <Input type="gender"  name="gender" value={this.state.gender} onChange={e=>this.changeValue(e)}></Input><br /><br />
                真实姓名：
                <Input type="name" name="name" value={this.state.name} onChange={e=>this.changeValue(e)}></Input><br /><br />
                {/* 服务方向：
                <Input type="direction" name="direction" value={this.state.direction} onChange={e=>this.changeValue(e)}></Input><br /><br /> */}
                年龄
                <Input type="age" name="age" value={this.state.age} onChange={e=>this.changeValue(e)}></Input><br /><br />
                <Button onClick={this.Upload} >注册</Button>


                  <br /><br /> <br /><br />


            

            </div>
           </div> 
            );
      
        
      
    }
}

export default ReactForm;
