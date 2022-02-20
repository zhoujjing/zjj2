import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as action from '../action/index'
import { bindActionCreators } from 'redux'
import BS from  'better-scroll'
export class Pull extends Component {
    componentDidMount(){
        this.props.getPushList()
        this.BS=new BS('.classify',{
            pullUpLoad:true,
            pullDownRefresh:true
        })
        this.BS.on('pullingUp',()=>{
            this.props.getPushList('up');
            setTimeout(() => {
                this.BS.refresh();
                this.BS.finishPullUp()
            }, 1000);
        })
        this.BS.on('pullingDown',()=>{
            this.props.getPushList();
            setTimeout(() => {
                this.BS.refresh();
                this.BS.finishPullDown()
            }, 1000);
        })
    }
  render() {
      console.log(this.props.shopReducer);
      let {pushData}=this.props.shopReducer
    return (
      <div className='classify'>
         <div className='inner'>
             {
                 pushData&&pushData.length>0?pushData.map((item,index)=>{
                     return <dl key={index}>
                         <dt><img src={item.img} alt="" /></dt>
                         <dd>{item.title}</dd>
                     </dl>
                 }):'暂无数据'
             }
         </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
    return state
}
const mapDispatchToProps=(dispatch)=>bindActionCreators(action,dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(Pull)