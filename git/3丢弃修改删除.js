//commit提交的只是add的修改而不是文件本身
//放弃对工作区的修改 status存在工作树时 最新添加的也被丢弃了
git checkout -- 1.txt

//暂存区 撤销修改 如add后撤回
git reset HEAD 1.txt
//接着再使用顶上的命令checkout

//删除文件
rm 2.txt  //也可以直接删除  再看status提示删除
git rm 2.txt
//不小心删错了
git reset HEAD 2.txt   //使用rm
git checkout -- 2.txt   //直接删未使用rm