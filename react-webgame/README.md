1. npm init 
    make package.json 
2. npm i react react-dom
3. npm i -D webpack webpack-cli
4. make file webpack.config.js 
    mode, entry, module(Loaders), plugins, output
5. npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
6. package.json 
    "scripts": {
        "dev": "webpack"
    },
7. npx webpack || npm run dev
    dist/app.js 


2-7 
    - presets > targets > browsers
           > debug


2-8
    - WordRelay

2-9
    - webpack hot-reloading
    - npm i react-refresh @pmmmwh/react-refresh-webpack-plugin -D //version upgrade
    - npm i -D webpack-dev-server //Need server 
    - change package.json
        old version : "webpack-dev-server --hot"
        scripts > dev : "webpack serve --env development"
    - change webpack.config.js 
        require("@pmmmwh/react-refresh-webpack-plugin")
        plugins: [new RefreshWebpackPlugin()]
        devServer: {}
            !Notice! publicPath > devMiddleware & static version changed

    