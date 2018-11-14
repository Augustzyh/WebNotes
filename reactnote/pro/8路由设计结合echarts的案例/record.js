//下载echarts先
npm install echarts
npm install echarts-gl  //3d

app引入，组件传值比较好
export 导出  加default默认导出

404页面注意：
精准匹配才会继续往下走

地图组件github --- react-amap 高德地图  bmap百度
https://elemefe.github.io/react-amap/components/marker

//打包上线问题
//目录问题 BrowserRouter
现在package.json下加一个属性，改成相对路径
"homepage": "."
然后服务器的二级目录的名字写在App.js的Router内:
basename={"文件夹名字"}
对于404页面的显示，因为上线后属于服务器查询BrowserRouter仅适用于开发模式
应改为HashRouter
npm run build

//打包成app  可以用KM盒子  这里选用HBuilder
新建移动app 只留下配置文件
mainfest更名 全部丢入
打开配置文件->组件配置
发行   安卓市场申请

模拟器推荐  逍遥 夜神 MuMu