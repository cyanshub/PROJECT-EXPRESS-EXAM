// 載入所需套件
const express = require("express")
const router = express.Router()


// 利用 router 撰寫網頁路由
// 首頁
router.get("/", (req,res)=>{
  res.render("index") // 渲染首頁
})

// 關於
router.get("/about", (req,res)=>{
  res.render("about") // 渲染其他樣板
})

// 作品集
router.get("/portfolio", (req,res)=>{
  res.render("portfolio") // 渲染其他樣板
})

// 聯絡
router.get("/contact", (req,res)=>{
  res.render("contact") // 渲染其他樣板
})


// 封包路由模組
module.exports = router