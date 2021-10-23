import express from "express";
import rotaProduto from './rotas/produto'



const app = express();
const port = 3000;


app.use(express.json()) // Content-Type JSON para o body - Trata o body do request como JSON 
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/api/produtos', rotaProduto);




app.listen(port, () => {
  console.log(`Iniciando o servidor na porta ${port}`)
})




