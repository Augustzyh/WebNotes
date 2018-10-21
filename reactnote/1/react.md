# 19期H5特色 

# React框架  ![icon](https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1635382818,4009623329&fm=58&bpow=480&bpoh=360)



## 一. 插件或框架的好处



	从久远的时代到现在，我们的网页更加动态化与强大，大家在学习的过程中，发现或了解过很多很多的插件或框架，用过的都知道，方便、快速、简单上手快、重用性高、维护成本低、兼容性好、稳定性强
	
	这些插件或框架的出现，是因为JavaScript的越来越强大，都成为服务端语言了。在之前我们开发大型的项目，由于业务逻辑非常复杂，html结构累赘，css样式庞大，造成了资源的浪费，性能低下，速度慢体验差，开发维护迭代成本大，没有正规的项目组织形式，所以大佬们为了解决传统开发项目导致的一系列问题，我们所熟知的这些框架就应运而生了，例如前端三大框架 angularJS，vueJS，reactJS等





## 二、React 版本



- Facebook对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设Instagram 网站
- 2013 年5月开源了 React
- 2013 年 7 月 3 日 `v0.3.0`
- 2015年4月开源了 React Native
- 2016 年 3 月 30 日 `v0.14.8`
- 2016 年 4 月 9 日 `v15.0.0`
- 2017 年 9 月 27 日 `v16.0.0` 核心架构重写 diff算法更高效
- 2017 年 11 月 29 日 `v16.2.0`
- 截止到目前：2018年9月16 `v16.5.1`







## 三、前端三大框架对比



### 1. angularJS

- 是一个比较完善的前端MV*框架，后为Google所收购
- 包含模板，数据双向绑定，路由，模块化，服务，过滤器，依赖注入等等所有功能，依赖注入和自定义directive非常灵活，功能强大
- 框架【偏重】，太庞大了，学习路线长
- 主要提供更多的是一整套解决方案，vue和react更像是一个生态





### 2. reactJS 和 VueJS

	

有很多的相似之处：

- 使用 Virtual DOM   diff算法

- 提供了响应式 (Reactive) 和组件化 (Composable) 的视图组件

- 将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库，注重UI层

- react采用的JSX语法js+xml,可以在js内写html，angular推崇使用typescript，也可以直接用js写。配合上ts还是很爽，后端的也能很快习惯ts的开发。react更注重的是在【view ui】层，用state的改变去re-render页面。angular是双向绑定，更加注重的是【model 数据】层，更加擅长对数据的处理和业务逻辑。

- React和Vue都有`props`的概念，`props`在组件中是一个特殊的属性，允许父组件往子组件传送数据  ,angular用props

- React和Vue都有自己的构建工具，你可以使用它快速搭建开发环境

- SSR(server side render) 服务器端渲染 和node结合

- [官方声明对比](https://cn.vuejs.org/v2/guide/comparison.html)

  ​

  VueJS：

  - 都是组件化思想
  - 模板的使用和数据渲染非常灵活，层次结构鲜明
  - 简单的语法并能够简单快速构建一个项目
  - 轻量级，体积小渲染速度更快
  - Vue采用的脚手架工具是：【vue-cli】
  - `cnpm i webpack webpack-cli -g`
  - `cnpm i vue-cli -g`
  - `vue init webpack projectName`
  - `npm run dev`


  - 初期是尤雨溪大神维护，现在有加入的团队组织个人提供技术一同维护迭代更新
  - Vue中指令和组件分得更清晰。指令只封装 DOM 操作，而组件代表一个自给自足的独立单元 —— 有自己的视图样式和数据逻辑

  ​

  ReactJS:

关注ui，不关注路由，数据请求等，只渲染html，组件化思想第一，跨平台概念,靠近面向对象 native app 跨平台,无需学习ios和android

- 庞大的生态系统，背后是强大的FB团队，野心更大，angularJS和react是竞争对手，都想取代对方，vue夹缝中求生存，国内比react普及高，难度低一些
- 组件有两个核心概念：props,state。 一个组件就是通过这两个属性的值在 render 方法里面生成这个组件对应的 HTML 结构
- 数据流单向，为啥不是双向呢？是因为技术不行吗？NO!，存在即有意义！
- react采用的是自己开发的脚手架：create-react-app，全局安装
- `cnpm i create-react-app -g`  //脚手架环境搭建
- `npm run start` 
- `npm run eject` 生成webpack的配置文件 less sass自行配置
- react推广了Virtual DOM，并创造了新的语法——JSX，JSX允许开发者在JavaScript中书写HTML
- react 认为组件才是王道，而组件是和模板紧密关联的，组件模板和组件逻辑分离让问题复杂化了。所以就有了 JSX 这种语法，就是为了把 HTML 模板直接嵌入到 JS 代码里面，这样就做到了模板和组件关联，但是 JS 不支持这种包含 HTML 的语法，所以需要通过工具将 JSX 编译输出成 JS 代码才能使用（可以进行跨平台开发的依据，通过不同的解释器解释成不同平台上运行的代码，由此才有RNAPP和React开发桌面客户端）


