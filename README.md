# novel

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Git 仓库地址
https://github.com/zjtCore/novel.git

##### Git 设置代理
```
 git config --global http.pxoxy http://gjd:foxconn88@http://10.194.192.219:808
```

##### Git 查看代理
```
git config --global --get http.proxy
```
##### Git 查看配置
```
 git config --list
```
##### Git 删除代理
```
 git config --global --unset http.proxy 
```

##### Git 克隆项目
```
 git clone https://github.com/zjtCore/novel.git(项目在git上的地址)
```

### Git 将本地项目上传到git步骤
    前言:已经在git上建立了仓库的才可以执行下面的步骤 具体可以百度 简单
    这里我的git仓库地址为https://github.com/zjtCore/novel.git
    
###### 1（先进入项目文件夹）
```
    通过命令 git init 把这个目录变成git可以管理的仓库
    如果目录里已经有.git文件 可以忽略这个步骤
```

###### 2把文件添加到版本库中
```
    使用命令 git add .添加到暂存区里面去，不要忘记后面的小数点“.”，（小数点前面有空格）意为添加文件夹下的所有文件
```
###### 3
```
用命令 git commit告诉Git，把文件提交到仓库。引号内为提交说明 
git commit -m 'first commit'
注意: 在Linux系统中，commit信息使用单引号包括，windows系统，commit信息使用双引号。
```

###### 4、关联到远程库
```
    git remote add origin 你的远程库地址   
    如：
    git remote add origin https://github.com/zjtCore/novel.git
```
###### 5
```
    获取远程库与本地同步合并（如果远程库不为空必须做这一步，否则后面的提交会失败）
    git pull --rebase origin master
```
###### 6、把本地库的内容推送到远程
```
    使用 git push命令，实际上是把当前分支master推送到远程。执行此命令后会要求输入用户名、密码，验证通过后即开始上传。
    git push -u origin master
    执行上述命令之后 会弹出github的登录界面 到时候输入 github的账户和密码 确认登录就成功了
```

###### *、状态查询命令
```
git status 
```
