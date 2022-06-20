注意！

本项目位于项目doubanTop250 https://github.com/hlf20010508/doubanTop250.git 内

若使用vscode等调试运行，请保证打开的文件夹为本项目文件夹，而非doubanTop250

否则会出现路径错误

建议在命令行中运行

<br/>

基于vue-cli 2.0

<br/>

安装依赖
```
npm install
```

在开发环境下运行 localhost:8080
```
npm run dev
```

用webpack将项目打包成html和js交给后端运行

此处已更改过package.json第10行build，会自动将build的dist更新到doubanTop250_flask文件夹中

需要doubanTop250_flask项目https://github.com/hlf20010508/doubanTop250_flask.git
```
npm run build
```
