// 載入專案所需套件
const express = require("express")
const exphbs = require("express-handlebars")
const routes = require("./routes")


// 設定參數
const port = 3000;
const app = express()
app.engine("hbs", exphbs({defaultLayout: "main", extname:".hbs"})) // 建立樣板引擎
app.set("view engine", "hbs") // 使用樣板引擎
app.use(routes) // 使用設定好的路由


// 啟動伺服器
app.listen(port,()=>{
  console.log(`Express is running on http://localhost:${port}`)
})