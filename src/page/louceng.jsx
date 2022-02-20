import React, { Component } from 'react'
import axios from '../utils/axios'
import BScroll from 'better-scroll'

// better-scroll里只能有一个子元素,让父元素overflow  hidden
export class LouCeng extends Component {
    state = {
        arr: [],
        leftIndex: 0
    }
    
    scrollIndex(index) {
        this.setState({
            leftIndex: index
        })
        this.rightDoms = [...document.getElementById('ul').children];
        // console.log(this.rightDoms[index]);
        this.rights.scrollToElement(this.rightDoms[index], 200)
    }
    componentDidMount() {
        axios.get('/list').then(res => {
            //  console.log(res.data);
            this.setState({
                arr: res.data
            })
        })
        let left = document.getElementById('left')
        console.log(left);
        let lefts = new BScroll(left, {
            scrollY: true,
            click: true
        })
        // let right = document.getElementById('right')
        // console.log(right);
        this.rights = new BScroll('.right', {
            scrollY: true,
            probeType: 3
        })
        this.rights.on('scroll', (e) => {
            let leftIndex;
            this.rightDoms.forEach((item, index) => {
                if(-e.y>=item.offsetTop){
                    leftIndex=index
                }
            })
            this.setState({
                leftIndex
            })
        })
    }
    render() {
        let { arr } = this.state
        return (
            <div className='lou_wrap'>
                <div className='left' id='left'>
                    <div>
                        {
                            arr && arr.length > 0 ? arr.map((item, index) => {
                                return <div
                                    key={index}
                                    style={{ height: '50px', lineHeight: '50px' }}
                                    onClick={this.scrollIndex.bind(this, index)}
                                    className={this.state.leftIndex === index ? 'activeClass' : ''}
                                >{item.title}</div>
                            }) : '暂无数据'
                        }
                    </div>
                </div>

                <div className='right' id='right'>
                    <div id='ul'>
                        {
                            arr && arr.length > 0 ? arr.map((item, index) => {
                                return item.children.map((ite, ind) => {
                                    return (
                                        <div key={ind}>
                                            <h3 style={{ background: '#ccc' }}>{ite.title}</h3>
                                            <div className='h3_wrap'>
                                                {
                                                    ite.children.map((it, in1) => {
                                                        return (
                                                            <dl key={in1} style={{ width: "33%" }}>
                                                                <dt>
                                                                    <img src={it.img} alt="" />
                                                                </dt>
                                                                <dd>
                                                                    {it.name}
                                                                </dd>
                                                            </dl>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }) : '暂无数据'
                        }

                    </div>
                </div>
            </div>
        )
    }
}

export default LouCeng