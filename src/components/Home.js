import React, { Component } from 'react';
import '../assets/css/index.css'
import {Link} from 'react-router-dom'


class Home extends Component {


    constructor(props){

        super(props);

       
    }


    handleUsername=(e)=>{

      this.setState({
        username:e.target.value
      })
    }
    render() {
      return (



<div  class="beijing5">
        <div class="herder"  >
       
        <div class="logo_i">
        <img src={require('../assets/images/logo_i.jpg')} alt=""/>
          </div>
          <div>
        <Link to="/Home/" style={{color:'black'}}>
        <div class="shouye"><ul>首页</ul> </div>
        </Link>
        <Link to="/Zaixianxiadan/" style={{color:'black'}}>
        <div class="xiadan"><ul>在线订单</ul></div>
        </Link>
        <Link to="/Zaixianxiadan/" style={{color:'black'}}>
        <div class="dingdan"><ul>我的订单</ul></div> 
        </Link>
        <Link to="/Page4/" style={{color:'black'}}>
        <div class="bangzhu"><ul>帮助中心</ul></div>
        </Link> 
        
        <Link to="/ReactForm/" style={{color:'black'}}>
        <div class="denglu"><ul>登录</ul></div>
        </Link>

        <Link to="/F/" style={{color:'black'}}>
        <div class="zhuce"><ul>注册</ul></div>
        </Link>
        </div>
        </div>
{/* 身体部位 */}
<div id="page1"> 
<div class="shadow">
  <div class="content">
    <h1 class="biaoti"> H  O  P  E  跑  腿  网</h1> 
    <p id="intro">Welcome to the Hope></p>
    </div></div> </div>

         {/* 脚部分 */}
        
       <div class="foot">
         <p><a>希望hope跑腿服务信息服务平台：</a>
        <Link to="/Jie" style={{color:'black'}}>
        <div  class=" aaa1"><ul>代拿简介</ul> </div>
        </Link>
        <Link to="/Tps" style={{color:'black'}}>
        <div class="aaa2"><ul>代拿公告</ul></div>
        </Link>
        <Link to="/Hel" style={{color:'black'}}>
        <div class="aaa3"><ul>寻找帮助</ul></div>
        </Link>
        <Link to="/Cone" style={{color:'black'}}>
        <div class="aaa4" ><ul>联系我们</ul></div>
        </Link> 
        </p>
        </div>
        
        
        

      
        
      </div>
        
      );
    }
  }
  
  export default Home;
  