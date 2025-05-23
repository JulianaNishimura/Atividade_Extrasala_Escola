document.addEventListener('DOMContentLoaded', () => {
    let editarBtn = document.getElementById('editarBtn');
    if (editarBtn) {
        editarBtn.addEventListener('click', atualizarAviso);
    }
  });

function atualizarAviso(event) {
  event.preventDefault(); 
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  let novoTitulo = document.getElementById('titulo').value;
  let novaDescricao = document.getElementById('descricao').value;
  let novoAutor = document.getElementById('autor').value;

  let avisoAtualizado = {};

  fetch(`http://localhost:8080/avisos/get/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao buscar o aviso atual');
      }
      return response.json();
    })
    .then((avisoAtual) => {
      if (novoTitulo !== ''){
        avisoAtualizado.titulo = novoTitulo;
      } else {
        avisoAtualizado.titulo = avisoAtual.titulo;
      }

      if (novaDescricao !== ''){
        avisoAtualizado.descricao = novaDescricao;
      } else {
        avisoAtualizado.descricao = avisoAtual.descricao;
      }

      if (novoAutor !== ''){
        avisoAtualizado.autor = novoAutor;
      } else {
        avisoAtualizado.autor = avisoAtual.autor;
      }

      avisoAtualizado.dataDePublicacao = new Date().toISOString();

      return fetch(`http://localhost:8080/avisos/atualizar/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(avisoAtualizado),
      });
    })
    .then((response) => {
      if (!response.ok){
        throw new Error('Erro ao atualizar o aviso');
      }
      return response.text();
    })
    .then((data) => {
      window.location.href = '/pages/mural.html';
    })
    .catch((error) => {
      console.error('Erro:', error);
      alert('Erro ao atualizar o aviso.');
    });
}
