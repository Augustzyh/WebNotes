cnpm i react-router-dom -D
用的时候把组件包起来

对于query  需使用node 的 url模块 cnpm i url -D

App + test1 路由写法 + query/params + routes模块化至router
App1 + test2  重定向 + 父-》子传值（render）

## 九、react-router路由

- 路由概念

  - 路由作用

  - react-router

    - 提供了一些router的核心api，静态的
      - Router, Route, Switch等，但是它没有提供dom操作进行跳转的api

  - React-router-dom

    - 提供了BrowserRouter, Route, Link等api，动态的
      - 我们可以通过DOM的事件控制路由

  - BrowerserRouter路由和HashRouter路由

    - 是路由的基本
    - 就像路由器一样去管理网络及给每个接入进来的用户分发ip
    - 是一个大容器 包裹着路由
    - HashRouter它是通过hash值来对路由进行控制。如果你使用HashRouter，你的路由就会默认有这个#。
    - BrowerserRouter它的原理是使用HTML5 history API (pushState, replaceState, popState)来使你的内容随着url动态改变的，如果放在二级目录下给BrowerserRouter增加个属性

  - Switch

    - 会用来包裹Route，它里面不能放其他html元素，用来只显示一个路由

  - Route

    - 控制路径对应显示的组件
    - 标签属性有exact、path以及component
      - exact 是严格匹配，控制匹配到/路径时不会再继续向下匹配
      - path 是标识路由的路径
        - /path/:id路由参数
      - component 则表示路径对应显示的组件

  - Link和NavLink

    - 两者都是可以控制路由跳转的

    - NavLink的api更多

    - Link标签有to属性

      - to可以接受string或者一个object，来控制url

    - NavLink它可以为当前选中的路由设置类名、样式以及回调函数等

    - ```css
      <NavLink  exact activeClassName='select'> to='/'</NavLink>
      ```

  - Redirect

    - 重定向
      - 属性 from='*' to='/'
    - 404

  - params与query

    - this.props.match 来获取路由(/news/list123)参数 
    - 可以通过node-url 来获取路由(/news/list?id=123&a=456&b=789)参数

  ```css
  1. 通过js 登录 跳转
      <redirect />
  
  2. 子路由嵌套
      render={(props)=>{
          <组件名 {...props传给子级} router={子路由列表传给子级} />
      }}
      子组件就能获取 routes:[
                          {
                              path: '/console',
                              exact: true,
                              component: Add
                          },
                          {
                              path: '/console/del',
                              component: Del
                          }
                      ]
      通过map循环生成 this.props.routes.map((item,index)=>{
                        return <Route exact={item.exact} key={index} path={item.path} component={item.component}/>
                    })
  3.  阿里图标使用
  
  4.  父组件给子组件传值，在子组件里可以设置默认props属性值
          在子组件里  子组件名.defaultProps={
                          title: '子组件标题'
                     }
  
  5.  定义父组件传值的类型
      import PropTypes from 'prop-types'
      子组件名.propTypes={
          title: PropTypes.number
      }
  6.   404
  
  7. navlink
  
  
  ```


## 十、路由小实战

- [reactEcharts小实战](http://47.96.29.109/reactEcharts/)

