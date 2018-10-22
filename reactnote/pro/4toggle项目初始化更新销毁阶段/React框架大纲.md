

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
    1 constructor（）	构造函数，在创建组件的时候调用一次
    2 componentWillmount（）	在组件即将被挂载的时候调用一次
    	组件还没有渲染出来，但js逻辑已经开始执行了 一般异步的方法（ajax）请求数据
    3 render（）	渲染
    4 componentDidMount（）	在组件被挂载完成的时候调用一次，可以在这里使用 refs
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
- ui组件库

 

## 九、react-router路由

- 路由概念
- 路由作用
- Browerser路由
- Hash路由
- Switch
- Route
- link
- exact-path-component
- indexRoute
- Redirect
- params与query

 

## 十、路由小实战

- [reactEcharts小实战](http://47.96.29.109/reactEcharts/)

 

## 十一、Redux状态管理

- redux的概念
- redux的用法及原理解析
- react-redux详细解析
- ...

 

## 十二、react项目实战

 

 

 

 

 

 

 

