// 載入所需套件
const express = require("express")
const router = express.Router()


// 利用 router 撰寫網頁路由
// 首頁
router.get("/", (req,res)=>{
  res.render("index") // 渲染首頁
})


// 封包路由模組
module.exports = router