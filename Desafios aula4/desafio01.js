let altura;
let acompanhada;
let podeSubir='';
// <1,40 e >2.00 >1.40& acompanhada >1.20 não subirá
altura=1.39
acompanhada=true

if (altura >=1.40 && altura <= 2.00){
   podeSubir= true;
} 
else if (altura >= 1.20 && acompanhada){
   podeSubir = true;
}
else
{
  podeSubir = false;
}
console.log(podeSubir);