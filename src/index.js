const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const RouterConfig = require('./routers/index')
const connectMongoDB = require('./config/database')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const cookieParser = require('cookie-parser')
const session = require('express-session')
const flash = require('connect-flash')

//Call middleware
const configPassport = require('./middlewares/authentication')

const app = express()
const port = 3000

//config middleware base
app.use(express.static(path.join(__dirname, './public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: 'keyboard cat',
        cookie: { maxAge: 60000 },
    })
)
app.use(flash())

//Authentication passport
app.use(passport.initialize())
app.use(passport.session())

//Authentication passport config
configPassport(passport, LocalStrategy)

//config template engines
var hbs = exphbs.create({
    /* config */
    extname: '.hbs',
    layoutsDir: path.join(__dirname, './views/layouts'),
    partialsDir: path.join(__dirname, './views/partials'),
    defaultLayout: false,
})
app.set('views', path.join(__dirname, './views/pages'))
app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')

//Connect database
connectMongoDB()

//Config Router
RouterConfig(app)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
