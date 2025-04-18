document.addEventListener('DOMContentLoaded', () => {
  let botaoAdiciona = document.getElementById('adicionarBtn');
  if (botaoAdiciona) {
    botaoAdiciona.addEventListener('click', adicionar);
  }
});

function adicionar() {
  let titulo = document.getElementById('titulo').value;
  let descricao = document.getElementById('descricao').value;
  let autor = document.getElementById('autor').value;
  let data = new Date().toISOString();

  fetch('http://localhost:8080/avisos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: descricao,
      autor: autor,
      dataDePublicacao: data,
    }),
  })
  .then(res => {
    if(!res.ok){
        throw new Error('Erro ao enviar');
    }
    return res.json()
  })
  .then(data => {
    console.log(data);
    window.location.href = '/pages/mural.html';
  })
  .catch(error => {
    console.error('Erro:', error);
    alert('Erro ao adiconar o aviso.');
  });
}
