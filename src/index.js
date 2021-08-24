const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
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
  extname:'.hbs',

}); 
app.set('views', path.join(__dirname, './views/'));
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');


app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})