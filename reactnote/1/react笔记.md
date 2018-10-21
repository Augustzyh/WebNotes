# React框架  ![icon](https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1635382818,4009623329&fm=58&bpow=480&bpoh=360)



## 一. 插件或框架的好处



	从久远的时代到现在，我们的网页更加动态化与强大，大家在学习的过程中，发现或了解过很多很多的插件或框架，用过的都知道，方便、快速、简单上手快、重用性高、维护成本低、兼容性好、稳定性强
	
	这些插件或框架的出现，是因为JavaScript的越来越强大，都成为服务端语言了。在之前我们开发大型的项目，由于业务逻辑非常复杂，html结构累赘，css样式庞大，造成了资源的浪费，性能低下，速度慢体验差，开发维护迭代成本大，没有正规的项目组织形式，所以大佬们为了解决传统开发项目导致的一系列问题，我们所熟知的这些框架就应运而生了，例如前端三大框架 angularJS，vueJS，reactJS等





## 二、React 版本



- Facebook对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设Instagram 网站
- 2013 年5月开源了 React
- 2013 年 7 月 3 日 `v0.3.0`
- 2015年4月开源了 React Native
- 2016 年 4 月 9 日 `v15.0.0`
- 2017 年 9 月 27 日 `v16.0.0` 核心架构重写
- 截止到目前：2018年9月16 `v16.5.1`
- 截止到目前：2018年10月8 `v16.5.2`







## 三、前端三大框架对比



### 1. angularJS

- 是一个比较完善的前端MV*框架，后为Google所收购
- 包含模板，数据双向绑定，路由，模块化，服务，过滤器，依赖注入等等所有功能，依赖注入和自定义directive非常灵活，功能强大
- 框架【偏重】，太庞大了，学习路线长
- 主要提供更多的是一整套解决方案，vue和react更像是一个生态





### 2. reactJS 和 VueJS

	

有很多的相似之处：

- 使用 Virtual DOM

- 提供了响应式 (Reactive) 和组件化 (Composable) 的视图组件

- 将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库

- react采用的JSX语法，angular推崇使用typescript，也可以直接用js写。配合上ts还是很爽，后端的也能很快习惯ts的开发。react更注重的是在【view ui】层，用state的改变去re-render页面。angular是双向绑定，更加注重的是【model 数据】层，更加擅长对数据的处理和业务逻辑。

- React和Vue都有`props`的概念，`props`在组件中是一个特殊的属性，允许父组件往子组件传送数据

- React和Vue都有自己的构建工具，你可以使用它快速搭建开发环境

- SSR(server side render) 服务器端渲染

- [官方声明对比](https://cn.vuejs.org/v2/guide/comparison.html)

  

  VueJS：

  - 都是组件化思想
  - 模板的使用和数据渲染非常灵活，层次结构鲜明
  - 简单的语法并能够简单快速构建一个项目
  - 轻量级，体积小渲染速度更快
  - Vue采用的脚手架工具是：【vue-cli】 2.x版本，现在已经是3.x版本了，2.x和3.x构建项目的方式也不同了
  - `cnpm i webpack webpack-cli -g`
  - `cnpm i vue-cli -g`
  - `vue init webpack projectName`
  - `npm run dev`


  - 初期是尤雨溪大神维护，现在有加入的团队组织个人提供技术一同维护迭代更新
  - Vue中指令和组件分得更清晰。指令只封装 DOM 操作，而组件代表一个自给自足的独立单元 —— 有自己的视图样式和数据逻辑

  跨平台

windows、android、IOS

安卓开发  IOS开发 原生APP (动画流畅)

软件打包APP

react-native开的APP 接近于原生APP

  ReactJS:

+ React 是一个用于构建用户界面的渐进式 JavaScript 库，也可以说是 是一个采用声明式，高效而且灵活的用来构建用户界面的框架。
可以和你的其它技术栈组合到一起来使用，主要用于构建Ui，不用关注内在的实现原理，只要提供数据就可，也就是数据驱动视图，不关注路由，不处理数据请求.说白了就是，React 提供了模板语法以及一些函数钩子用于基本的 HTML 渲染
+ 第一个真正意义上把组件化思想移植到前端开发领域，angular 1.x是模块化思想，从2.x开始也用组件化思想，但angular 一个版本一个样。学习成本大！ 后来vue也借鉴了react 和angular的思想和优点并简化了，学习成本非常低
+ 由于react设计思想独特，性能出众，靠近后端语言的面向对象编程思想强烈，并且从最早的ui引擎逐渐变成了一套前后端都能满足的web App解决方案，所以越来越多的人使用。最后孵化出了 react native框架，目标很伟大，就算没学android开发或ios开发，也能用开发web app的方式去写 Native(原生的) app。这将是颠覆半个互联网行业生态，那到时，只要写一次ui，就能同时运行在浏览器，服务器，手机端。


- 庞大的生态系统，背后是强大的FB团队，野心更大，angularJS和react是竞争对手，都想取代对方
- 但学了 react 就可以上react native框架 开发跨平台app了，所以我看好react
- 组件有两个核心概念：props,state。 一个组件就是通过这两个属性的值在 render 方法里面生成这个组件对应的 HTML 结构
- 数据流单向，为啥不是双向呢？是因为技术不行吗？NO!，存在即有意义！
- react采用的是自己开发的脚手架：create-react-app，全局安装
- `cnpm i create-react-app -g`
- `npm run start` 
- `npm run eject` 生成webpack的配置文件 
- react推广了Virtual DOM，并创造了新的语法——JSX，JSX允许开发者在JavaScript中书写HTML
- react 认为组件才是王道，而组件是和模板紧密关联的，组件模板和组件逻辑分离让问题复杂化了。所以就有了 JSX 这种语法，就是为了把 HTML 模板直接嵌入到 JS 代码里面，这样就做到了模板和组件关联，但是 JS 不支持这种包含 HTML 的语法，所以需要通过工具将 JSX 编译输出成 JS 代码才能使用（可以进行跨平台开发的依据，通过不同的解释器解释成不同平台上运行的代码，由此才有RNAPP和React开发桌面客户端）

**特点**：

 + 一切皆组件化思想

 + 基于虚拟DOM性能高效

 + 渐进式，专注ui，可以和其它的技术栈结合开发，很灵活

 + 声明式程序设计编程

 + JSX语法，允许JavaScript和XML混搭，类似于node 的模板引擎  jade ejs swig handl.. pug...

    + JSX语法的诞生

 + 都是组件间传值通信，都是单向数据流

   ```javascript
   vue是一个mvvm框架，即数据双向绑定，即当数据发生变化的时候，视图也就发生变化，当视图发生变化的时候，数据也会跟着同步变化。这也算是vue的精髓之处了。值得注意的是，我们所说的数据双向绑定，一定是对于UI控件来说的，非UI控件不会涉及到数据双向绑定。 单向数据绑定是使用状态管理工具（如redux）的前提。如果我们使用vuex，那么数据流也是单向的
   两者并不互斥， 在全局性数据流使用单向，方便跟踪
   局部性数据流使用双向，简单易操作。处理表单，vue的双向数据绑定用起来就特别舒服了
   ```






## 四、ReactJS学习

	

#### 1. Babel

+ babelJS

  ```css
  2015年6月， ES2015（即 ECMAScript 6、ES6） 正式发布。虽然 ES6 提出了许多激动人心的新特性，但那时许多浏览器不支持或者支持不好，没有普遍地推广起来。
  而 Babel 的出现，让我们可以现在就使用最新的 JavaScript 语法，而不用等待浏览器提供支持。
  
  Babel 是一个转换编译器，它能将 ES6 转换成可以在浏览器中运行的代码。Babel 可以处理 ES6 的所有新语法，并且内置了 React JSX 扩展及 Flow 类型注解支持。
  
  ```

  [在线语法转换](http://babeljs.io/repl)





   + babel-standalone

     ```css
     由于 Babel 本身的设计是基于 node.js 环境下运行使用的，而这个名为 babel-standalone 的开源项目，则支持非 node.js 环境下使用 Babel。
     babel-standalone 已经包含了 Babel 所有的插件，其体积还是很大的（目前版本 6.26.0，未压缩的 js 文件 1.78MB，压缩了则为 772kb）。
     使用这个类库，可以让我们实时在线转换 es6 为 js，同时支持 babel 提供的各种插件，而且最关键的是全特性支持，包括 amd 包裹，将 import 转换为 amd 的 require 等等。
     ```



#### 2.安装react模块

```css
1.安装nodeJS
	去官网下载
	node -v 
	npm -v	包管理工具	国外的，下载极其慢
2.全局安装cnpm，并设置淘宝镜像
	国内的包管理工具，很快
	npm install -g cnpm --registry=https://registry.npm.taobao.org
3.卸载模块
	npm uninstall Name
	cnpm uninstall Name
4.安装react依赖模块（测试环境，快速上手）
	cnpm init -y	定义项目所需要的各种模块及配置信息
	cnpm i react react-dom babel-standalone -S
	-S => --save	表示生产环境也需要使用的模块
	-D => --save-dev 表示只在开发环境用到的模块

```

+ 在项目文件夹 下 shift  鼠标右键  powershell 

+ 项目路径不要用 中文路径和大写名称 

+ cnpm init -y 

  + 个人练习时可以使用
  + 生成一个工程文件 记录项目使用的 依赖（第三方js库）



 #### 3.react基础语法

 	1. 语法注释
 	2. 插值
 	3. 表达式
 	4. 节点属性
 	5. 列表渲染
 	6. 事件处理
 	7. 无状态组件 
 	8. 声明式组件 



可以预习 es6 class

https://react.docschina.org/tutorial/tutorial.html






​	





















































































































































