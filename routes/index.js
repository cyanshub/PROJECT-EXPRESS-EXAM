// 載入所需套件
const express = require("express")
const routes = require("./modules/routes.js")
const router = express.Router()


// 利用router撰寫網站路由(利用.use方法作為外殼)
router.use("/", routes)


// 封包路由模組, 供其他檔案載入使用
module.exports = router