node项目一般写在root下

pm2 start 文件 --watch   以观察者模式运行

node项目可以不再ctrl+c后停止的，pm2进程帮忙监听，便于开发


pm2 stop 文件