import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as action from '../action/index'
import { bindActionCreators } from 'redux'
export class Edit extends Component {
    state={
        title:'',
        word:'',
        id:''
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
    editFn(){
        this.props.edits(this.state)
    }
    componentDidMount(){
        this.setState({
            title:this.props.location.state.title,
            word:this.props.location.state.word,
            id:this.props.location.state.id,
        })
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
          <button onClick={this.editFn.bind(this)}>提交</button>
      </div>
    )
  }
}
let mapStateToProps=(state)=>{
    return state
}
let mapDispatchToProps=(dispatch)=>bindActionCreators(action,dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Edit)