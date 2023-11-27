console.log("Boas vindas ao jogo de BlackJack!")

if (confirm("Quer iniciar uma nova rodada?")) { 
   const cartaUsuario1 = comprarCarta()
   const cartaUsuario2 = comprarCarta()

   const cartaComputador1 = comprarCarta()
   const cartaComputador2 = comprarCarta()

   const pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor
   const pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor

   console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${pontuacaoUsuario}`);
   console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${pontuacaoComputador}`);
   
   if (pontuacaoUsuario > pontuacaoComputador){
     console.log("O usuário ganhou!")
   
      } else if (pontuacaoComputador > pontuacaoUsuario) {
         console.log("O computador ganhou!")
         
         } else if (pontuacaoComputador === pontuacaoUsuario) {
            console.log("Empatou!")
            
            } else {
            
}
      













 } else { 
   console.log("O jogo acabou!") 
 } 