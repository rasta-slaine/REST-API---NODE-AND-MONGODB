import NaoEncontrado from "../erros/NaoEncontrado.js";

function manipulador404(req, res, next) {
  const erro404 = new NaoEncontrado();
  next(erro404);
}

export default manipulador404;



/*

Criar e utilizar um middleware de manipulador de erros:

Esse middleware é caracterizado por receber quatro parâmetros, 
convencionalmente chamados de: erro, req, res e next. 
Foi nele que centralizamos o tratamento da maioria dos erros que poderiam acontecer na aplicação, 
possibilitando a reutilização de código. E, de acordo com o erro recebido, 
ele pode encerrar o fluxo de requisição ao enviar uma resposta de erro padronizada para o cliente, 
utilizando o objeto res.


Criar um middleware para tratar páginas 404:

Esse middleware deve ser registrado após todas as outras rotas da aplicação.
 Assim, se nenhuma das rotas registradas tiver sido correspondida, 
 o código desse middleware será executado. Em seguida, nele podemos criar um erro 
 (no nosso caso, uma nova instância da classe NaoEncontrado) e enviá-lo para o manipulador de erros.

*/