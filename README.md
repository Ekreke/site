# 测试部署 
## nvm 安装
``` shell
# 安装
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
# 验证
nvm version
```
## node.js 安装特定版本
```shell
# 安装
nvm install 18.17.0
nvm use 18.17.0
# 验证
node -v
```  
## 安装依赖
```shell 
npm install
```
## 运行
```shell 
npm run dev
```
# Docker

## 构建镜像
``` shell
docker build -t my-blog .
``` 

## 运行容器
``` shell
docker run -p 3001:3000 -e PORT=3001 my-blog
```

