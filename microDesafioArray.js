let compras = ["Arroz", "Feijão", "Nuggets", "Macarrão", "Frango", "Chicória"];

console.log(compras.join());
console.log("O método join uni todos os elementos do array e retorna como string");

compras.push("Quinoa");
console.log(compras);
console.log("O método push adiciona um ou mais elementos ao final do array.")

compras.pop();
console.log(compras);
console.log("O método pop sempre retira o último nome do array.")

compras.shift();
console.log(compras);
console.log("O método shift remove o elemento do array localizado no índice 0.");

compras.unshift("Biscoito")
console.log(compras);
console.log("O método unshift insere um ou mais dados no ínicio do nosso array.");
