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
  helpers: {
    foo: function () { return 'FOO!'; },
  },
  extname: '.hbs',

});
app.set('views', path.join(__dirname, './views/'));
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

//Config Router
RouterConfig(app)


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})