# prettier-demo

支持 js css less sass json markdown 等等

prettier focus on how your code looks

linting focus on how your code behaves

1.    npm install -D prettier
2.  npx prettier src/index.js 只在命令行显示格式化后的内容
3.  npx prettier src/index.js --write 写入硬盘
4.  修改配置 touch .prettierrc


    {
    "singleQuote": true
    }

5.  package.json 增加脚本

"format": "prettier \"src/\*_/_.js\" --write"
npm run format

6. editor integration that's where prettier shines
   编辑器安装 prettier 插件

7. react 代码示例
   npm i -D react
