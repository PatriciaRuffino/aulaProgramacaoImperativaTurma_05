
//chamar a função entrada dentro do objeto informando o nome do restaurante e cardápio



function Restaurante (nomeDoRestaurante, cardapio){
    this.nome=nomeDoRestaurante;
    this.cardapio=cardapio.join();
}


/* function entrada(){
    return "Seja bem vindo(a) ao"
} */
let entrada=()=>"Seja bem vindo(a) ao", rest = new Restaurante ("Coma Bem!", ["Cachorro-Quente","Hamburger","Milk-shake","Sorvete"],"Seja bem vindo!")
 console.log(entrada(),rest);
    

   

  
    


