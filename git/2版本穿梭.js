//上一次提交可能有东西写错了，
//查看版本/提交历史      英文状态按Q退出
git log
//精简版
git reflog   //还可接参
//更好查看
git log --graph --pretty=oneline --abbrev-commit
//master 主分支 主副本  head相当于指针停留在最近一次
//所以版本回退只需将head指向以前版本
//版本回退
git reset --hard commit_id   //返回最近的一次id则输入 HEAD^
