const express = require('express') 
const app = express()
const _cal = require('./calculator');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send('hello world')
  })

app.post('/',(req,res)=>{
    const n1 = parseInt(req.body.num1)
    const n2 = parseInt(req.body.num2)
    const add_cal = n1+n2
    res.send(`result: ${add_cal}`)
})

app.get('/add', (req, res) => {
    let rs = 0;
    let a = parseInt(req.query.a)
    let b = parseInt(req.query.b)
    rs = _cal.add(a,b)
    res.json(rs)
})
app.get('/sub', (req, res) => {
    let rs = 0;
    let a = parseInt(req.query.a)
    let b = parseInt(req.query.b)
    rs = _cal.sub(a,b)
    res.json(rs)
})
app.get('/mul', (req, res) => {
    let rs = 0;
    let a = parseInt(req.query.a)
    let b = parseInt(req.query.b)
    rs = _cal.mul(a,b)
    res.json(rs)
})
app.get('/div', (req, res) => {
    let rs = 0;
    let a = parseInt(req.query.a)
    let b = parseInt(req.query.b)
    rs = _cal.div(a,b)
    res.json(rs)
})


app.listen(3000, () => console.log('Listening on port 3000..'))