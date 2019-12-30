import React, { Component } from 'react';
import '..//assets/css/index.css'
import  { Input,Button,message,script} from 'antd';
import { Link } from 'react-router-dom';
import '..//assets/css/reset.css'
class Zaixianxiadan extends Component {
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
       "address":this.state.address,
       "address2":this.state.address2,
       "username":this.state.username,
       "number":this.state.number,
       "things":this.state.things

}
fetch("/back/getname",{


  method:"post",
  data:data,

  // herders:{
  //     "Content-Type":"application/json"

  // },
  bode:JSON.stringify(data)
}).then(response=>response.json())
.then(result=>{
  if(result.state==2){
      message.info("订单已存在")
  }else if(result.state==1){
      message.info("提交成功")
  }
// }).catch(e=>{
//   message.error(e)
})
  

          

      }



    
    render() {
        return ( 
          <div> <div><ul class="bbb4">在 线 下 单</ul></div>
	   
            <div class="logoBar">
<div>
<Link to="/Home/" style={{color:'black'}}>
                <ul id="bbb1">返回首页</ul> 
               </Link>  
             <p className="logo_p"> <img src={require('../assets/images/logo_i.jpg')} alt=""/>
  </p> </div>
 
  <div className="logo_o"><img src={require('../assets/images/step.jpg')} alt=""/></div>
  <li class="s03">订单提交成功</li>
  
        </div>


{/* // 身体部位 */}
<div class="shoppingCart comWidth">
<div class="shopping_item">
<h3 class="shopping_tit">收货地址</h3>
<div class="shopping_cont padding_shop">
<ul class="shopping_list">
<li><span class="shopping_list_text"><em>*</em>选择楼栋：</span>
<div class="select"   name="address" id="address" value={this.state.address} onChange={e=>this.changeValue(e)}>  
<form>
<select name="career" onFocus="message()" onBlur="message1()" id="new1" class="input input_b" >
					
					<option>女生一栋</option>
					<option>女生三栋</option>
					<option>男生二栋</option>
					<option>男生四栋</option>
					<option>校外公寓</option>
					</select>
</form>

</div>
</li>
<li  name="address2" id="address2" value={this.state.address2} onChange={e=>this.changeValue(e)}><span class="shopping_list_text"><em>*</em>详细地址：</span><input type="text" placeholder="最多输入20个汉字" class="input input_b"></input></li>
<li  name="username" id="username" value={this.state.username} onChange={e=>this.changeValue(e)}><span class="shopping_list_text"><em>*</em>收 货 人：</span><input type="text" placeholder="最多10个" class="input input_b"></input></li>
<li  name="number" id="number" value={this.state.number} onChange={e=>this.changeValue(e)}><span class="shopping_list_text"><em>*</em>联系方式：</span><input type="text" placeholder="如：12312312" class="input input_b"></input></li>
</ul>
</div>
</div>


<div className="shopping_item">
<h3 class="shopping_tit">支付方式</h3>
<div class="shopping_cont padding_shop"   name="choose"
 id="choose" value={this.state.choose}
 onChange={e=>this.changeValue(e)}>

<ul class="shopping_list">
<li>>微信/支付宝支付
<input type="checkbox"></input>
</li>
<li>现金支付(货到付款)
<input type="checkbox"></input>
</li>
</ul>
</div>
<div className="shopping_item">
<h3 class="shopping_tit">送货清单</h3>
<div class="shopping_cont pb_10">
  <div class="own"  name="things" id="things" 
  value={this.state.things}
   onChange={e=>this.changeValue(e)} >

    <label>快递代拿<input type="checkbox"></input></label>
    <br/>
    <label>代拿外卖<input type="checkbox"></input></label>
    <br/>
    <label>物品代购<input type="checkbox"></input></label>
    <br/>
    <label>其他服务（请联系管理员）<input type="checkbox"></input></label>
  </div>
</div>
<Button onClick={this.Upload}>提交订单</Button>



</div>
















</div>
	
</div>
</div>
        )
    }
}


export default Zaixianxiadan;