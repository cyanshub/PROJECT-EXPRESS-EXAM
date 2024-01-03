// 載入專案所需套件
const express = require("express")
const exphbs = require("express-handlebars")


// 設定參數
const app = express()
const port = 3000;


// 建立並啟用樣板引擎
app.engine("hbs", exphbs({defaultLayout: "main", extname:".hbs"}))
app.set("view engine", "hbs")


// 設定路由
// 首頁路由
app.get("/", (req,res) => {
  // 渲染首頁
  res.render("index")
})


// 啟動伺服器
app.listen(port,()=>{
  console.log(`Express is running on http://localhost:${port}`)
})