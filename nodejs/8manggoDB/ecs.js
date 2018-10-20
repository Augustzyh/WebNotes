1 安装解压改名
2 vi ~/.bash_profile
3 PATH=$PATH:/usr/local/src/node-v10.8.0/bin        path：  /usr/local/mongodb/bin

4 source ~/.bash_profile
5 /var 目录下mkdir mongodb cd mkdir db/log
6 常驻启动mongodb必须有日志 mongod --dbpath /var/mongodb/db --fork --logpath /var/mongodb/log/log
7 pid forked process: 2916  用来关闭程序，两种方式
(kill 2916  /   mongo -> show dbs -> use admin -> db.shutdownServer())
mongod --dbpath /usr/local/apache/htdocs/all/blogshow/database/db --fork --logpath /usr/local/apache/htdocs/all/blogshow/database/log/log
8 进入项目安装依赖
9 pm2 start app.js
查看项目 pm2 ls    关闭 kill pid/ pm2 stop 1


apache：
停止 apachectl stop
启动 /usr/local/apache/bin/apachectl start apaceh
重启 /usr/local/apache/bin/apachectl restart
                            数据库     集合
 导出数据库：mongoexport -d octopus -c homes -o ./blog --type json
 导入数据库;mongoimport --db octopus --host 127.0.0.1 --port 27017 --collection homes --type json --file ./blog