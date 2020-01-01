import React,{Component} from 'react';
import {Link} from 'react-router-dom';
 
class Hel extends Component {
    constructor (props){
        super(props);
        this.state={}
    }
    render(){
        return(
            
    <div >
    <img src={require('../assets/images/pzp.jpg')} alt="" alt="联系我们" ></img>
</div>
        )
    }
}
export default Hel;