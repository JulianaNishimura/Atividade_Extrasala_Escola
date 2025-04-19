document.addEventListener('DOMContentLoaded', () => {
  let botaoAdiciona = document.getElementById('adicionarBtn');
  if (botaoAdiciona) {
    botaoAdiciona.addEventListener('click', adicionar);
  }
});

function adicionar(event) {
  event.preventDefault(); 
  let titulo = document.getElementById('titulo').value;
  let descricao = document.getElementById('descricao').value;
  let autor = document.getElementById('autor').value;
  let data = new Date().toISOString().replace('Z', '');

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
    .then((res) => {
      if (!res.ok) {
        throw new Error('Erro ao enviar');
      }
      return res.text();
    })
    .then((data) => {
      console.log(data);
      window.location.href = 'mural.html';
    })
    .catch((error) => {
      console.error('Erro:', error);
      alert('Erro ao adicionar o aviso.');
    });
}
