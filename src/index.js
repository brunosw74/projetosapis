const { application } = require('express');
const express = require('express');
//FAKE DATABASE
let books = []
//CRIAR O APP 
const app = express();

app.use(express.json());

app.post('/books',(req, res) => {
    const {id, title, author, publishedAt} = req.body; 
    const book = {id, title, author, publishedAt};
    books.push(book);//está empurrando o livro criado e colocando na biblioteca criada no let book a cima
    return res.status(201).json(book);//return 201 para confirmar a criação do book
});

app.get('/books',(req, res)=>{
    const allBooks = books;
    return res.status(201).json(allBooks);
});

//get que permite no livro encontrar o id do livro que procura

app.get("/books/:book_id", (req , res) => {
    const {book_id}= req.params;   
    const book = books.find((book) => book.id === book_id);
    if (!book) res.status(400).json('not found');
    return res.status(200).json(book);
});

app.delete("/books/:book_id",(req,res) =>{
    const {book_id}= req.params;//estamos extraindo o book_id do books
    const filterredBooks= books.filter((book) => book.id !== book_id);//estamos filtrando o id = https://blog.betrybe.com/javascript/javascript-filter/
    books = filterredBooks;//estamos atribuindo ao banco de dados
    return res.status(204).json('deleted');
});  

app.patch("/books/:book_id,", (req, res) => {
    const{author, title, publishedAt} = req.body;//aqui ele ta podendo alterar esssas coisas na api
    const{book_id} = req.params;//aqui é o parametro de acesso ou seja o id 
    const book = books.find((book) => book_id === book_id);                                                                                         
    return res.status(200).json(book); 
}); //lembrar que => é a execução e !== é diferente 

//app.patch('/squares/:x/:y/paint', (req, res, next) => {
   // const x = req.params.x
    //const y = req.params.y

    //res.send({
       // painted : true
   // })
//})



//APLICAR MIDDLEWARES


//MANDAR O SERVIDOR RODAR
app.listen(3333, () => console.log("server is running"));
