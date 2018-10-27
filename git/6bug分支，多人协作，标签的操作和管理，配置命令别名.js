//bug修复 分支管理  bug分支通常创建新的分支修改

//现状 现在编写部分有bug还没改完，但要现存起来
git stash

//回到master然后创建新分支去解决bug,然后删除

// 查看保存环境
git stash list

//重回dev  恢复stash并删除这个环境  继续开发
git stash pop

//恢复方法2
//1   恢复
git stash apply
//2   删除stash
git stash drop

//恢复指定stash
git stash apply stash@{0}



//feature 分支  开发新功能最好新建一个分支 起名feture-  同bug类似

//多人协作

//1 查看远程库信息  fetch  push
git remote -v

//2 本地推送分支
git push origin branch-name  // 若失败 则先 git pull抓取远程分支合并或解决冲突/然后重新推送

//3 本地创建和远程一样的分支进行开发
git checkout -b branch-name origin/branch-name  //最好名字一样

//4 pull 问题 若失败 设置本地与远程连接再 git pull
git branch --set-upstream-to=origin<branch>branch-name
git pull


//标签 commit数量过多时，推荐打标签
//1 打标签  最近版本
git tag v1.0    //一瞬间就能知道是1.0版本

//2 中途隔很多commit 打标签到指定版本
//简版看log  git log --pretty=oneline --abbrev-commit
git tag -a v0.1 -m "后补tag" commit_id

//3 看版本详情信息
git show v0.1
git tag //查看所有

//4 删除标签
git tag -d v0.1

//5 推送某个标签到远程
git push origin tagName
git push origin --tags //推送所有未推送过的标签到远程

//6 删除远程 先删除本地
git push origin :refs/tags/tagName



//命令配置 如 status -》st
git config --global alias.st status
