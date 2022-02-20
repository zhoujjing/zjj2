// import React, { Component } from 'react'
// export default function HOCLogin(Com){
//     return class extends Component{
//        componentDidMount(){
//            if (!localStorage.getItem('login')) {
//                this.props.history.push('/login')
//            }
//        }
//        render(){
//            return <Com {...this.props}></Com>
//        }
//     }
// }
import React, { Component } from 'react'
 export default function HOCLogin(Com){
     return class extends Component{
         componentDidMount(){
             if(!localStorage.getItem('login')){
                 this.props.history.push('/login')
             }
         }
         render(){
             return <Com {...this.props}></Com>
         }
     }
 }