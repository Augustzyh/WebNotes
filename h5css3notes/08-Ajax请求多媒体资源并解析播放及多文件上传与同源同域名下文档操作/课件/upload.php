<?php
// 老师, 一般文件上传, 是考虑保存到服务器磁盘里还是保存到数据库里?
// 肯定是保存到资源服务器里， 数据库只存储 url路径
// 这里 只是简单模拟 后端接收文件 并生成文件
// ecs服务器权限太高 ，需要另行配置
// 你需要学php
$myFile = $_FILES['xyz'];
$myName = $myFile['name'];
$myPath = 'upload/'.$myName;
move_uploaded_file($myFile['tmp_name'],$myPath);
// move_uploaded_file($_FILES['xyz']['tmp_name'],'upload/'.$myFile['name']);

