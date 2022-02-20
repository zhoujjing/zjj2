import React, { Component } from 'react'
import HOCLogin from '../utils/HOCLogin'
export class My extends Component {
    render() {
    return (
      <div>My页面</div>
    )
  }
}

export default HOCLogin(My)