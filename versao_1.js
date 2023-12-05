/* if (confirm("Quer iniciar uma nova rodada?")) {

  alert("Bem vindo ao jogo de BlackJack!")
  const userCard1 = comprarCarta()
  const userCard2 = comprarCarta()
  const botCard1  = comprarCarta()
  const botCard2  = comprarCarta()
  let userScore = userCard1.valor + userCard2.valor
  let botScore  = botCard1.valor + botCard2.valor

  alert(`Usuário - cartas: ${userCard1.texto} ${userCard2.texto}  - pontuação ${userScore}  \nComputador - cartas: ${botCard1.texto} ${botCard2.texto} - pontuação ${botScore}`)

  if(userScore > botScore && userScore < 22){
    alert("Usuário venceu!")
    } else if (botScore > userScore && botScore < 22) {
      alert("Computador venceu!")
      } else if (userScore === botScore && userScore <= 21 && botScore <= 21) {
        alert("Empatou!")
  } else {
    alert("O jogo acabou!")
}
}

*/