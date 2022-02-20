import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../action/index'
import { throttle, debounce } from 'lodash'
export class ShopCar extends Component {
  componentDidMount() {
    if (!this.props.shopReducer.arr.length > 0) {
      this.props.getList()
    }

  }
  delFn(id) {
    this.props.dels(id)
  }
  addFn() {
    this.props.history.push({
      pathname: '/add'
    })
  }
  editFn(item) {
    this.props.history.push({
      pathname: '/edit',
      state:item
    })
  }
  render() {
    console.log(this.props);
    let { arr } = this.props.shopReducer
    return (
      <div>
        {
          arr && arr.length > 0 ? arr.map((item, index) => {
            return <div key={index}>
              <h3>{item.title}</h3>
              <p>{item.word}</p>
              <button onClick={debounce(() => this.delFn(item.id), 500)}>删除</button>
              <button onClick={this.addFn.bind(this)}>添加</button>
              {/* <button onClick={debounce(()=>{console.log("111")},2000)}>点击</button> */}
              <button onClick={this.editFn.bind(this,item)}>编辑</button>
            </div>
          }) : '暂无数据'
        }
      </div>

    )
  }
}
let mapStateToProps = state => {
  return state
}
let mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ShopCar)