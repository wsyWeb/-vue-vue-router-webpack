注意：
1、vue的版本要与vue-template-compiler的版本一致 不然会报错 <br />
2、引入iview的时候要应用URL-loader，不然会报错（ERROR in ./node_modules/_iview@2.13.1@iview/dist/styles/fonts/ionicons.svg?v=2.0.0）
还要引入file-loader <br />
3、引入路由的命名要规范，直接写入为router或者 router： xxx，不然不能识别 <br />
4、路由中导入相应模块时，要么引入文件时应用import，如用require，则要在文件后加上.default。具体原因可能是vue-loader的解析问题。推荐文章（http://www.cnblogs.com/CyLee/p/5836069.html） <br />
启动项目 <br />
npm install <br />
npm start <br />
npm run dev