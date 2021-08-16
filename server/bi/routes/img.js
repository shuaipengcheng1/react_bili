var express = require('express')
var mysql = require('mysql')
// 创建路由
var router = express.Router();
// 连接数据库
var database = mysql.createConnection({
    database: 'bilibili',
    user: 'root',
    port: '3306',
    password: 'spc652324'
})
database.connect((err) => {
    if (!err) {
        console.log('连接成功')
    } else {
        console.log('失败')
    }
})

// 读取所有的数据
router.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin",'*')
    database.query(`SELECT * FROM data WHERE id=85`, (err, data) => {
        if (!err) {
            console.log(data)
            console.log(req.url)
            res.send(data)
        }else{
            console.log(err)
        }
    })
})

router.get('/Bigimg', (req, res) => {
    res.header("Access-Control-Allow-Origin",'*')
    database.query(`SELECT * FROM data WHERE id!=""`, (err, data) => {
        if (!err) {
            console.log(data)
            console.log(req.url)
            res.send(data)
        }else{
            console.log(err)
        }
    })
})
module.exports = router;