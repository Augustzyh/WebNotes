

# React框架

 

 

## 一、插件或框架的好处

 

## 二、React版本历程

 

## 三、前端三大框架对比

- angularJS
- vueJS
- reactJS
- react特点

 

## 四、React准备工作

- BabelJS
- babel-standalone
- 安装node
- 安装cnpm
- 安装react依赖包
- 初始化工程文件

 

## 五、react基础语法掌握

- Babel手动/自动编译

- helloWorld

- 语法注释

- 插值

- 三元表达式

- 节点属性绑定

- 列表渲染

- 事件处理

- 无状态组件

- 声明式无状态组件

- `class`声明式状态组件

- `class`关键字构建类

- `class`继承父类

- 事件调用与this指向

- 事件对象与传参

- 谷歌浏览器兼容es6的import模块导入导出

   

## 六、react-经典小练习

- react-todoList

- 伸缩式导航


## 七、生命周期

- react手脚架安装

- 什么是生命周期

  - 一个组件从创建到销毁的过程
  - 当组件实例被创建并且会插入到DOM中，需要调用的函数，就是生命周期函数 

- Mounting 初始化阶段

  - 组件创建到首次渲染到页面 

    ```css
    constructor（）	构造函数，在创建组件的时候调用一次
    componentWillmount（）	在组件即将被挂载的时候调用一次 
    	组件还没有渲染出来，但js逻辑已经开始执行了 一般异步的方法（ajax）请求数据
    render（）	渲染
    componentDidMount（）	在组件被挂载完成的时候调用一次，可以在这里使用 refs
    	组件已经被渲染出来了
    ```

  - 

- Updating 运行中阶段

  - 状态更新引起的变化 

    ```css
    componentWillReceiveProps(nextProps)	父组件的更新会触发子组件的这个函数
    	nextProps 父组件更新的时候带来的数据
    shouldComponentUpdate(nextProps,nextState)
    	是否需要重新渲染
    	return false/true
    componentWillUpdate(nextProps,nextState)	即将更新
    render	渲染
    componentDidUpdate()	完成更新
    
    作业：
    	把小练习写一写
    	把生命周期函数全都写五遍
    ```

  - 

- Unmounting 销毁阶段

  - 组件在销毁之前

  - ```css
    compontentWillUnmount	即将销毁
    ```

  - 

- Mounting 和 Unmounting 阶段在组件的整个生命周期中只会出现一次

- Updating 阶段会在组件每次更新中都会执行

## 八、脚手架开发小练习

- 组件开发
- 组件状态
- 组件props
- 组件事件
- 组件事件对象
- ref属性获取原生DOM对象
- 样式
- 图片
- 表单
- ui组件库

 

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

 

## 十一、Redux状态管理

- redux的概念
- redux的用法及原理解析
- react-redux详细解析
- ...

 

## 十二、react项目实战

 

 

 

 

 

 

 

