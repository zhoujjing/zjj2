import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouterView from './router/routerView'
import routerList from './router/routerList'
export class App extends Component {
  render() {
    return (
      <div className='wrap_box'>
        <BrowserRouter>
          <RouterView RouterList={routerList}></RouterView>
        </BrowserRouter>
      </div>
    )
  }
}

export default App