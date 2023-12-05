let jogarDeNovo = true;

while (jogarDeNovo) {
    
  let pontuacaoUsuario    = 0;
  let pontuacaoComputador = 0;
  const cartasUsuario     = [];
  const cartasComputador  = []
  

  if (confirm("╔═════════════════════════════════╗ \n    Boas vindas ao jogo de BlackJack! \n╚═════════════════════════════════╝ \nQuer iniciar uma nova rodada?")) {
    
    let cartaUsuario1 = comprarCarta();
    let cartaUsuario2 = comprarCarta();

    while (cartaUsuario1.valor === "A" && cartaUsuario2.valor === "A") {
      cartaUsuario1 = comprarCarta();
      cartaUsuario2 = comprarCarta();
    }

    let cartaComputador1 = comprarCarta();
    let cartaComputador2 = comprarCarta();

    while (cartaComputador1.valor === "A" && cartaComputador2.valor === "A") {
      cartaComputador1 = comprarCarta();
      cartaComputador2 = comprarCarta();
    }

    pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor;
    pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor;
    cartasUsuario.push(cartaUsuario1.texto, cartaUsuario2.texto);
    cartasComputador.push(cartaComputador1.texto);
    cartasComputador.push(cartaComputador2.texto);

    alert(`➥ Usuário Cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} ➥ Pontuação: ${pontuacaoUsuario} \n➥ Computador Cartas: ${cartaComputador1.texto} ? ➥ Pontuação ?`);
  }

  let comprarOuNao = true;
  if (comprarOuNao === true) {
    do {
      comprarOuNao = confirm(`Suas cartas ➥ ${cartasUsuario.join(" ")} Pontuação ➥ ${pontuacaoUsuario}! \nDeseja comprar mais uma carta?`);
      if (comprarOuNao) {
        let novaCarta = comprarCarta();
        alert(`O USUÁRIO comprou: ${novaCarta.texto} \nSuas cartas ➥ ${novaCarta.texto} ${cartasUsuario.join(" ")} Pontuação ➥ ${pontuacaoUsuario}!`);
        pontuacaoUsuario += novaCarta.valor;
        cartasUsuario.push(novaCarta.texto);
      }
    } while (comprarOuNao === true && pontuacaoUsuario < 22);
  }

/////////////////////////////////////////////////////////////////////////
  

  let comprarOuNaoComputador = true;
  let novaCartaComp = comprarCarta();

  if (comprarOuNaoComputador === true && pontuacaoUsuario >= pontuacaoComputador && pontuacaoComputador <= 20 && pontuacaoUsuario < 21) {
    do {
      if (comprarOuNaoComputador) {
        novaCartaComp = comprarCarta();
        alert("Carta COMPUTADOR comprada ➥ " + novaCartaComp.texto);
        pontuacaoComputador += novaCartaComp.valor;
        cartasComputador.push(novaCartaComp.texto);
        alert("Cartas Computador ➥ " + cartasComputador.join(" ") + "Pontuação Computador ➥" + pontuacaoComputador)
      }
    } while (pontuacaoComputador <= pontuacaoUsuario && pontuacaoComputador < 21 && pontuacaoUsuario < 21);
  }

  //---//---//---//---//---//---//---//---! CARTAS E PONTOS !---//---//---//---//---//---//---//---//


alert(`➥ Usuário Cartas: ${cartasUsuario.join(" ")} ➥ Pontuação: ${pontuacaoUsuario} \n➥ Computador Cartas: ${cartasComputador.join(" ")} ➥ Pontuação: ${pontuacaoComputador}`);


  //---//---//---//---//---//---//---//---! CHECANDO VENCEDOR !---//---//---//---//---//---//---//---//

  if (pontuacaoComputador > 21 && pontuacaoUsuario > 21) {
    alert("Nenhum vencedor! 🤡");
    console.log("");
    console.log("O jogo acabou!");
  } else if (pontuacaoComputador > 21) {
    alert("O Usuário ganhou! 🎉");
    console.log("");
    alert("O jogo acabou!");
  } else if (pontuacaoUsuario > 21) {
    alert("O Computador ganhou! 🎉");
    console.log("");
    console.log("O jogo acabou!");
  } else if (
    pontuacaoComputador === pontuacaoUsuario &&
    pontuacaoComputador <= 21 &&
    pontuacaoUsuario <= 21
  ) {
    alert("Empatou! 🤡");
    console.log("");
    alert("O jogo acabou!");
  } else if (pontuacaoUsuario > pontuacaoComputador) {
    alert("O Usuário ganhou! 🎉");
    console.log("");
    alert("O jogo acabou!");
  } else if (pontuacaoComputador > pontuacaoUsuario) {
    alert("O Computador ganhou! 🎉");
    console.log("");
    alert("O jogo acabou!");
  } else if (pontuacaoComputador > 21 && pontuacaoUsuario > 21) {
    alert("Nenhum vencedor! 🤡");
    console.log("");
    alert("O jogo acabou!");
  }

  jogarDeNovo = confirm("Quer jogar um novo jogo?");
}


