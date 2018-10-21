//解决多人操作同一份代码冲突的问题,一般开发新功能时建议创建分支，开发完成后再与主分支合并

//1 查看分支   master主分支
git branch

//2 创建分支
git branch test1 //自己起名字

//3 切换分支
git checkout test1

//4 新建并切换
git checkout -b test2

//5 删除分支  -d未合并不能删  -D强制删
git branch -d test2

//6 合并  test1开发完之后合并到主分支，把test1合并到当前分支,然后就可以push啦  合并完成后再把test1删除掉
git merge test1



//7 分支冲突情况 合并时同时修改了主分支和test1 文件内多出：
<<<<<<< HEAD
444
=======
3
>>>>>>> test1
//手动解决 以上全部换成555

//7 分支合并时加上--no--ff 可产生历史记录 建议使用
git merge --no--ff test1