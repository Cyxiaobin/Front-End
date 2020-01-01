import React, { Component } from 'react';
import  { input,Button,message,script} from 'antd';
import '../assets/css/backstage.css';



class Houtai extends Component {


    constructor(props){

        super(props);

       
   

    }

    
    render() {
      return (
        //  头部

<div>

        <div class="head">
         
        <h3 class="head_text ">PTW跑腿网后台管理系统</h3>
</div>
<div class="operation_user clearfix">
    <div class="link fl"><a href="#">跑腿网</a><span>&gt;&gt;</span><a href="#">服务管理</a><span>&gt;&gt;</span><a href="#">服务修改</a></div>
    <div class="link fr">
        <a href="#" class="icon icon_i">首页</a><span></span><a href="#" class="icon icon_j">前进</a><span></span><a href="#" class="icon icon_t">后退</a><span></span><a href="#" class="icon icon_n">刷新</a><span></span><a href="#" class="icon icon_e">退出</a>
    </div>

</div>
<div class="content1 clearfix">
        <div class="main">
        <div class="cont">
        <div class="title">服务管理</div>
        <div class="details">
        <div class="details_operation clearfix">
        <div class="bui_select">
        <input type="button" value="添&nbsp;&nbsp;加" class="add"/>

        </div>
        <div class="fr">
                        <div class="text">
                            <span>服务名称：</span>
                            <div class="bui_select">
                                <select name="" id="" class="select">
                                    <option value="1">快递代拿</option>
                                    <option value="1">外卖代送</option>
                                    <option value="1">东西代买</option>   
                                    <option value="1">其他服务</option>
                                </select>
                            </div>
                            
                            </div>
                            <div class="text">
                            <span>服务时间：</span>
                            <div class="bui_select">
                                <select name="" id="" class="select">
                                    <option value="1">长期有效</option>
                                    
                                    
                                </select>
                            </div>
                        </div> 
                         <div class="text">
                            <span>搜索</span>
                            <input type="text" value="" class="search" />
                        </div> 
                        </div>
                        </div>

     





    
     
          
                <form class="table" cellspacing="0" cellpadding="0">
                    <thead>
                        <tr>
                            <th width="25%">编号</th>
                            <th width="40%">标题</th>
                     
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr> 
                            {/* <!--这里的id和for里面的c1 需要循环出来--> */}
                          
                            <td><input type="checkbox" id="c1" class="check" />001</td>
                            <td>快递代拿</td>
                          
                            <td align="center"><input type="button" value="修改" class="btn"/><input type="button" value="删除" class="btn"/></td>
                    </tr>   
                     </tbody> 
                       </form>


                   
                   
                       
   
        </div>
        </div>
        </div>
                
            

    <div class="menu">
        <div class="cont">
            <div class="title">管理员</div>
            <ul class="mList">
                <li>
                    <h3><span>-</span>服务管理</h3>
                    <dl>
                        <dd>服务修改</dd>
                  
                    </dl>
                </li>
                <li>
                    <h3><span>+</span>订单管理</h3>
                    <dl>
                        <dd><a href="#">订单修改</a></dd>
                     
                    </dl>
                </li>
            </ul>
        </div>
    </div></div>


   
     </div>

      );
    }
  }
  
  export default Houtai;
  