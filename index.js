import express from 'express'
import { engine } from 'express-handlebars';
import { myProjects, workExperiences, currentYear, carouselData } from './src/scripts/data.js';

const app = express()

app.use(express.static('src'))

app.engine("hbs", engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: "./src/views/layouts",
    partialsDir: "./src/views/partials"
}))

app.set('view engine', 'hbs')
app.set("views", "./src/views")

app.get('/', (req, res) => {
  res.render("index", {
    carouselData: carouselData,
    workExperiences : workExperiences,
    myProjects : myProjects,
    year: currentYear,
  })
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

function darkMode() {
  const darkMode = document.body
  element.classList.toggle("dark-mode")
  console.log("test")
}