function escolha1() {
  document.getElementById('historia').innerHTML = `
    <p>Você se aproxima e inicia uma conversa. Descobrem interesses em comum e passam o restante do show juntos, cantando e dançando.</p>
    <p>Ao final, trocam contatos e combinam de se encontrar novamente.</p>
  `;
  document.getElementById('opcoes').innerHTML = `
    <button onclick="finalFeliz()">Marcar um encontro no dia seguinte</button>
    <button onclick="finalAberto()">Esperar que ele entre em contato</button>
  `;
}

function escolha2() {
  document.getElementById('historia').innerHTML = `
    <p>Você decide aproveitar o show sozinho, mas não consegue tirar aquele olhar da cabeça.</p>
    <p>Ao final, ele desaparece na multidão, deixando uma sensação de oportunidade perdida.</p>
  `;
  document.getElementById('opcoes').innerHTML = `
    <button onclick="reiniciar()">Reiniciar</button>
  `;
}

function finalFeliz() {
  document.getElementById('historia').innerHTML = `
    <p>O encontro é mágico. Passeiam pela orla, compartilham histórias e percebem uma conexão especial.</p>
    <p>Nasce ali uma linda história de amor, marcada por aquela noite inesquecível.</p>
  `;
  document.getElementById('opcoes').innerHTML = `
    <button onclick="reiniciar()">Reiniciar</button>
  `;
}

function finalAberto() {
  document.getElementById('historia').innerHTML = `
    <p>Os dias passam e você aguarda ansiosamente uma mensagem que nunca chega.</p>
    <p>Apesar da decepção, guarda a lembrança daquele encontro como um momento especial.</p>
  `;
  document.getElementById('opcoes').innerHTML = `
    <button onclick="reiniciar()">Reiniciar</button>
  `;
}

function reiniciar() {
  location.reload();
}
