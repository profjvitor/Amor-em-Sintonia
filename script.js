function escolha1() {
  document.getElementById('historia').innerHTML = `
    <p>Leo se aproxima com um sorriso tímido. Rafael retribui. Descobrem que vieram sozinhos. Cantam "Born This Way" juntos, rindo como velhos amigos.</p>
    <p>Mas, no meio da empolgação, a chuva começa e eles se perdem um do outro na multidão.</p>
  `;
  document.getElementById('opcoes').innerHTML = `
    <button onclick="tentarEncontrar()">Tentar encontrá-lo novamente</button>
    <button onclick="irEmbora()">Ir embora e seguir a vida</button>
  `;
}

function escolha2() {
  document.getElementById('historia').innerHTML = `
    <p>Leo prefere curtir sozinho. Ele dança, canta, se emociona. Mas ao final do show, algo dentro dele diz que perdeu uma chance rara.</p>
  `;
  document.getElementById('opcoes').innerHTML = `
    <button onclick="reiniciar()">Reiniciar</button>
  `;
}

function tentarEncontrar() {
  document.getElementById('historia').innerHTML = `
    <p>Leo vaga entre a multidão. Quando já está prestes a desistir, ouve seu nome ser chamado. Rafael está ali, debaixo da arquibancada, esperando.</p>
    <p>Trocam números. Começam a conversar por mensagens todos os dias.</p>
  `;
  document.getElementById('opcoes').innerHTML = `
    <button onclick="encontro()">Marcar um encontro</button>
    <button onclick="esfriar()">Esperar mais um pouco</button>
  `;
}

function irEmbora() {
  document.getElementById('historia').innerHTML = `
    <p>Leo vai embora com o coração apertado. Dias depois, publica um texto sobre a noite mágica... e recebe uma mensagem: "É você do show da Gaga?"</p>
    <p>Era Rafael.</p>
  `;
  document.getElementById('opcoes').innerHTML = `
    <button onclick="encontro()">Marcar um encontro</button>
    <button onclick="esfriar()">Fingir que não é ele</button>
  `;
}

function encontro() {
  document.getElementById('historia').innerHTML = `
    <p>O encontro acontece numa livraria em Copacabana. Conversam por horas. A conexão é forte, mas Rafael hesita. Ele ainda não se assumiu para os pais.</p>
    <p>Leo precisa decidir como reagir à insegurança de Rafael.</p>
  `;
  document.getElementById('opcoes').innerHTML = `
    <button onclick="apoio()">Oferecer apoio e paciência</button>
    <button onclick="pressionar()">Pedir um compromisso agora</button>
  `;
}

function esfriar() {
  document.getElementById('historia').innerHTML = `
    <p>O tempo passa. A conexão esfria. Quando tentam retomar o contato, já não é mais o mesmo.</p>
    <p>Às vezes, o tempo perdido não volta.</p>
  `;
  document.getElementById('opcoes').innerHTML = `
    <button onclick="reiniciar()">Reiniciar</button>
  `;
}

function apoio() {
  document.getElementById('historia').innerHTML = `
    <p>Leo apoia Rafael sem pressionar. Aos poucos, Rafael vai ganhando coragem. Eles viajam juntos, compartilham segredos e se tornam inseparáveis.</p>
    <p>Até que um dia, Rafael o convida para conhecer seus pais.</p>
  `;
  document.getElementById('opcoes').innerHTML = `
    <button onclick="finalFeliz()">Aceitar com o coração aberto</button>
    <button onclick="recusar()">Evitar o encontro</button>
  `;
}

function pressionar() {
  document.getElementById('historia').innerHTML = `
    <p>Leo exige mais do que Rafael pode dar. Ele se afasta, com medo e culpa. A história termina antes de realmente começar.</p>
  `;
  document.getElementById('opcoes').innerHTML = `
    <button onclick="reiniciar()">Reiniciar</button>
  `;
}

function finalFeliz() {
  document.getElementById('historia').innerHTML = `
    <p>No jantar, tudo corre bem. Os pais de Rafael são receptivos. Entre risos, histórias e música, Leo percebe: o amor pode vencer qualquer medo.</p>
    <p>Do show à vida real, eles escreveram sua própria canção de amor.</p>
    <p><strong>Final Feliz 🌈</strong></p>
  `;
  document.getElementById('opcoes').innerHTML = `
    <button onclick="reiniciar()">Reiniciar a história</button>
  `;
}

function recusar() {
  document.getElementById('historia').innerHTML = `
    <p>Leo recua, inseguro. Rafael entende, mas sente que algo se rompe. Continuam amigos, mas o romance perde força.</p>
    <p>Nem toda história precisa ser eterna para ser bonita.</p>
  `;
  document.getElementById('opcoes').innerHTML = `
    <button onclick="reiniciar()">Reiniciar</button>
  `;
}

function reiniciar() {
  location.reload();
}
