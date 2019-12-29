import React, { Component } from 'react';
import '..//assets/css/index.css'

import { Link } from 'react-router-dom';
import '..//assets/css/reset.css'
class Zaixianxiadan extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return ( 
          <div>
	   
            <div class="logoBar">

<Link to="/Home/" style={{color:'black'}}>
                <ul id="bbb1">返回首页</ul> 
               </Link>  
             <p className="logo_p"> <img src={require('../assets/images/logo_i.jpg')} alt=""/>
  </p> 
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
<div class="select">
<form>
<select name="career" onfocus="message()" onblur="message1()" id="new1" class="input input_b" >
					
					<option>女生一栋</option>
					<option>女生三栋</option>
					<option>男生二栋</option>
					<option>男生四栋</option>
					<option>校外公寓</option>
					</select>
</form>

</div>
</li>
<li><span class="shopping_list_text"><em>*</em>详细地址：</span><input type="text" placeholder="最多输入20个汉字" class="input input_b"></input></li>
<li><span class="shopping_list_text"><em>*</em>收 货 人：</span><input type="text" placeholder="最多10个" class="input input_b"></input></li>
<li><span class="shopping_list_text"><em>*</em>联系方式：</span><input type="text" placeholder="如：12312312" class="input input_b"></input></li>
</ul>
</div>
</div>


<div className="shopping_item">
<h3 class="shopping_tit">支付方式</h3>
<div class="shopping_cont padding_shop">

<ul class="shopping_list">
<li>
{/* ..... */}
</li>
<li>
{/* ..... */}
</li>
</ul>
</div>
<div className="shopping_item">
<h3 class="shopping_tit">送货清单</h3>



</div>
















</div>
	
</div>
</div>
        )
    }
}


export default Zaixianxiadan;