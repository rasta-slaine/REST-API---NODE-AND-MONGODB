import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import ErroValidacao from "../erros/ErroValidacao.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros (erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    new RequisicaoIncorreta().enviarResposta(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(erro).enviarResposta(res);
  } else if (erro instanceof ErroBase) {
    erro.enviarResposta(res);
  } else {
    new ErroBase().enviarResposta(res);
  }
}

export default manipuladorDeErros;

/*

Criar e utilizar um middleware de manipulador de erros:

Esse middleware é caracterizado por receber quatro parâmetros, 
convencionalmente chamados de: erro, req, res e next. 
Foi nele que centralizamos o tratamento da maioria dos erros que poderiam acontecer na aplicação, 
possibilitando a reutilização de código. E, de acordo com o erro recebido, 
ele pode encerrar o fluxo de requisição ao enviar uma resposta de erro padronizada para o cliente, 
utilizando o objeto res.


Identificar e tratar erros de validação:

É possível identificar um erro de validação do Mongoose ao verificar se o erro 
é uma instância de mongoose.Error.ValidationError. Também aprendemos como 
personalizar as mensagens de validação nos Schemas do Mongoose e como obtê-las no objeto de erro.

*/ 


