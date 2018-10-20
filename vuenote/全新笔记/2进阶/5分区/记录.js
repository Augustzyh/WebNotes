公共模板引入app。vue 所有页面都显示

1图片可放入assets内 
2放入static /static/18560855790257725.gif
看似路径不相符，静态文件可以直接通过static访问到 并且可以直接访问


<li v-for="item in nav" :key="item.title"><router-link :to="item.path">{{item.title}}</router-link></li>
    :key 增加循环效率不报错、
<li v-for="item in nav" :key="item.title"><router-link :to="`/xxx/${item.id}.html`">{{item.title}}</router-link></li>
    id拼接
