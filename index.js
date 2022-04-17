const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const path = require('path')
const game = require('./routes/game')
const auth = require("./routes/auth");
const session = require("express-session");
const flash = require("express-flash");
// const { isLoggedIn } = require('./middleware')
const isLoggedIn = false
const {Game, Biodata, History} = require('./models');

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(
    session({
      secret: "rahasia",
      resave: false,
      saveUninitialized: false,
    })
  );

const passport = require("./lib/passport");
app.use(passport.initialize());
app.use(passport.session());

const jwtPassport = require("./lib/jwtPassport");
app.use(jwtPassport.initialize());

const restrict = require("./middlewares/restrict");
const apiRestrict = require("./middlewares/apiRestrict");

app.use(flash());



const user = require('./db/user.json');
app.use(game)
app.use(auth);
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/games', restrict, (req, res, next) => {
    res.render('games')
})


app.get('/dashboards', apiRestrict, restrict, async (_, res) => {
    const data = await Game.findAll({
        include: [Biodata, History]
    });
})





app.listen(3000, () => {
    console.log('listening on port 3000')
})