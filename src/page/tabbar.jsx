import React, { Component } from 'react'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
// import { Tabbar } from 'react-vant';
// import { useState } from 'react';
class Tabbars extends Component {

  render() {
    return (

      <div className='tabbar_box'>
{/* 
        <Tabbar value={active} onChange={this.setActive.bind(this)}>
          <Tabbar.Item icon="home-o">标签</Tabbar.Item>
          <Tabbar.Item icon="search">标签</Tabbar.Item>
          <Tabbar.Item icon="friends-o">标签</Tabbar.Item>
          <Tabbar.Item icon="setting-o">标签</Tabbar.Item>
        </Tabbar> */}

        <NavLink to='/all/home'>配送到家</NavLink>
        <NavLink to='/all/classify'>分类</NavLink>
        <NavLink to='/all/shopcar'>购物车</NavLink>
        <NavLink to='/louceng'>楼层</NavLink>
        <NavLink to='/pull'>下拉</NavLink>
        <NavLink to='/my'>我的</NavLink>
      </div>
    )
  }
}
export default Tabbars