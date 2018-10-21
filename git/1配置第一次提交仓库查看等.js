//git分布式无需联网  每个人都是一个完整版本库

//全局配置本机git 仓
git config --global user.name "augustOctopus"
git config --global user.email "747869432@qq.com"
//查看配置
git config --list

//开始git  进入项目目录
git init
//隐藏文件 ls -a
//新建
touch test.txt
open test.txt //打开

//添加到仓库
//可多次add记录多次修改再提交
1.  git add 1.txt  //提交指定文件,还没正式提交
2.  git commit -m "第一次commit"  //添加描述提交

//查看仓库状态
git status   //add后的会出现 绿色
git diff 1.txt //查看状态为非add状态下 修改后未add 红色  查看变化内容

