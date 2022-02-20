import React, { Component } from 'react'
import Tabbar from './tabbar'
import RouterView from '../router/routerView'
export class All extends Component {
  render() {
    // console.log(this.props);

    let { child } = this.props;
    return (
      <div className='content'>
        <header>内容</header>
        <main>
          <RouterView RouterList={child}></RouterView>
        </main>
        <footer>
          <Tabbar></Tabbar>
        </footer>
      </div>
    )
  }
}

export default All