const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const path = require('path')
const game = require('./routes/game')
// const { isLoggedIn } = require('./middleware')
const isLoggedIn = false
const {Game, Biodata, History} = require('./models');
app.use(game)
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))



const user = require('./db/user.json');

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/games', (req, res, next) => {
    res.render('login')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/dashboard', async (_, res) => {
    const data = await Game.findAll({
        include: [Biodata, History]
    });
    console.log(res.json(data))
})

app.post('/login', (req, res) => {
    const { username, password } = req.body
    if(user.username === username && user.password === password) {
        res.redirect('/dashboards')
    } else {
        res.render('login')
    }
})



app.listen(3000, () => {
    console.log('listening on port 3000')
})