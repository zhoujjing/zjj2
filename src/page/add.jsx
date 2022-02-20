import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as action from '../action/index'
import { bindActionCreators } from 'redux'

export class Add extends Component {
    state={
        title:'',
        word:''
    }
    getValue(e){
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]:value
        },()=>{
            console.log(this.state);
        })
    }
    addFn(){
        this.props.adds(this.state)
    }
  render() {
      console.log(this.props);
    return (
      <div>
          <input type="text" 
          value={this.state.title} 
          name='title' 
          onChange={this.getValue.bind(this)}/>
          <input type="text" 
          value={this.state.word}
          name='word' 
          onChange={this.getValue.bind(this)}
          />
          <button onClick={this.addFn.bind(this)}>提交</button>
      </div>
    )
  }
}
let mapStateToProps=(state)=>{
    return state
}
let mapDispatchToProps=(dispatch)=>bindActionCreators(action,dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Add)