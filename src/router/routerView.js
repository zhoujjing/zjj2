import { Switch, Redirect, Route } from 'react-router-dom'
import { Suspense } from 'react'
let routerView = (props) => {
    // console.log(props);
    let { RouterList } = props;
    let routerList = RouterList.filter((item, index) => {
        return !item.to
    })
    // console.log(routerList);
    let redirect = RouterList.filter((item, index) => {
        return item.to
    })[0]
    // console.log(redirect);
    return (
        <Suspense fallback={<div>...loading</div>}>
            <Switch>
                {
                    routerList && routerList.length > 0 ? routerList.map((item, index) => {
                        return <Route path={item.path} key={index} render={(routerProps) => {
                            if (item.children) {
                               return <item.component child={item.children} {...routerProps}></item.component>
                            } else {
                               return <item.component {...routerProps}></item.component>
                            }
                        }}>
                        </Route>
                    }) : '暂无数据'
                }
                {
                    redirect ? <Redirect to={redirect.to} from={redirect.from}></Redirect> : '暂无重定向'
                }
            </Switch>
        </Suspense>
    )
}
export default routerView