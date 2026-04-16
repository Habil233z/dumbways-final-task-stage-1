import express from 'express'
import { engine } from 'express-handlebars';

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
    workExperiences : workExperiences,
    myProjects : myProjects,
    year: currentYear
  })
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

const currentYear = new Date().getFullYear();

const workExperiences = [
  {
    image : "",
    role : "Placeholder 1",
    name : "corporation name placeholder 1",
    task : ["placeholder1", "placeholder2", "placeholder3"],
    time : "2026-...."
  },
  {
    image : "",
    role : "Placeholder 2",
    name : "corporation name placeholder 2",
    task : ["placeholder4", "placeholder5", "placeholder6"],
    time : "2026-...."
  },
  {
    image : "",
    role : "Placeholder 3",
    name : "corporation name placeholder 3",
    task : ["placeholder7", "placeholder8", "placeholder9"],
    time : "2026-...."
  },
]

const myProjects = [
  {
    image: "",
    name : "Project placeholder",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nunc risus. Sed blandit gravida diam non vulputate. Curabitur consectetur felis sit amet pretium commodo. Morbi tristique augue ut pretium molestie. Duis quis hendrerit turpis. Curabitur vestibulum leo odio, quis vestibulum nulla sagittis a. Fusce consectetur volutpat turpis, vitae iaculis elit laoreet at. Integer in elementum lectus, sit amet auctor dui. Mauris cursus nisl vitae odio viverra lacinia. Etiam a orci lectus. Mauris nisi nisl, imperdiet id congue sit amet, vehicula eu metus. Mauris bibendum turpis ac mollis tristique.",
    tag : ["Front-end"]
  },
  {
    image: "",
    name : "Project placeholder",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nunc risus. Sed blandit gravida diam non vulputate. Curabitur consectetur felis sit amet pretium commodo. Morbi tristique augue ut pretium molestie. Duis quis hendrerit turpis. Curabitur vestibulum leo odio, quis vestibulum nulla sagittis a. Fusce consectetur volutpat turpis, vitae iaculis elit laoreet at. Integer in elementum lectus, sit amet auctor dui. Mauris cursus nisl vitae odio viverra lacinia. Etiam a orci lectus. Mauris nisi nisl, imperdiet id congue sit amet, vehicula eu metus. Mauris bibendum turpis ac mollis tristique.",
    tag : ["Front-end", "Back-end"]
  },
  {
    image: "",
    name : "Project placeholder",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nunc risus. Sed blandit gravida diam non vulputate. Curabitur consectetur felis sit amet pretium commodo. Morbi tristique augue ut pretium molestie. Duis quis hendrerit turpis. Curabitur vestibulum leo odio, quis vestibulum nulla sagittis a. Fusce consectetur volutpat turpis, vitae iaculis elit laoreet at. Integer in elementum lectus, sit amet auctor dui. Mauris cursus nisl vitae odio viverra lacinia. Etiam a orci lectus. Mauris nisi nisl, imperdiet id congue sit amet, vehicula eu metus. Mauris bibendum turpis ac mollis tristique.",
    tag : ["Front-end", "Back-end"]
  }
]