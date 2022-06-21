const resultado = document.getElementById('resultado')!

 function insert(num: any){   
     resultado.innerHTML += num;
 }

 function clean(){
    resultado.innerHTML = "";
 }

 function back(){
    resultado.innerHTML = resultado.innerHTML.substring(0, resultado.innerHTML.length - 1);
 }

 function calcular(){
   if (resultado){
      resultado.innerHTML = eval(resultado.innerHTML)
   }
 }