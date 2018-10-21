ls -a //看是否有ssh

//建立ssh
ssh-keygen -t rsa -C "747869432@qq.com"

//拿到公钥 去github绑定ssh 这样才能确认身份，进行修改

//将本地库推送到github  仓库第二个模块
git remote add origin git@github.com:Augustzyh/studyGit.git
git push -u origin master         //yes  第一次-u 后面就不用了

//第二次push    远程库 哪个分支   master分支只能用来发布
git push origin master

//clone
git clone sshurl

//md语法 `代码区`    ```css回车 代码类型