import React,{Component} from 'react';
import {Link} from 'react-router-dom';
 
class Cone extends Component {
    constructor (props){
        super(props);
    }
    render(){
        return(
            
    <div >
    <h1>扫描二维码联系我们的哟！</h1>
    <img src={require('../assets/images/QQ.jpg')} alt="" alt="联系我们" >
        </img>
</div>
        )
    }
}
export default Cone;