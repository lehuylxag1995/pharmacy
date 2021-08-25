const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const RouterConfig = require('./routers/index')
const app = express()
const port = 3000


//config static files
app.use(express.static(path.join(__dirname, './public')))

//config template engines
var hbs = exphbs.create({
  /* config */
  extname: '.hbs',
  layoutsDir:path.join(__dirname, './views/layouts'),
  partialsDir:[
    path.join(__dirname, './views/partials/client'),
    path.join(__dirname, './views/partials/server')
  ],
});
app.set('views', path.join(__dirname, './views/pages'));
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');


//Config Router
RouterConfig(app)


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})