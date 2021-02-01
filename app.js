const express = require("express");
const app = express();
const path = require("path");
const exhb = require("express-handlebars");

const hbs = exhb.create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, 'public')))

const rBolimlar = require('./routes/bolimlar')
const rKurslar = require('./routes/kurslar')
const rIndex = require('./routes/index')
const rTopshiriqlar = require('./routes/topshiriqlar')
const rDashboard = require('./routes/dashboard')
const rTolovlar = require('./routes/tolovlar')
const rXato = require('./routes/xato')

app.use(rBolimlar)
app.use(rKurslar)
app.use(rIndex)
app.use(rTopshiriqlar)
app.use(rDashboard)
app.use(rTolovlar)
app.use(rXato)

let port = process.env.PORT || '3000';
app.listen(port, () => {
  console.log(`server http://localhost:${port}/ portda ishladi`);
});
