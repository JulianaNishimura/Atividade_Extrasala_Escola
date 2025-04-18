document.addEventListener('DOMContentLoaded', listarAvisos);

function listarAvisos() {
  fetch('http://localhost:8080/avisos')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao buscar os avisos');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Avisos recebidos:', data);
      criarAvisos(data);
    })
    .catch((error) => {
      console.error('Erro:', error);
      alert('Erro ao buscar os avisos.');
    });
}

function criarAvisos(data) {
  let div = document.getElementById('divAvisos');

  data.forEach((aviso) => {
    let card = document.createElement('div');
    card.classList.add('avisoCard');

    let titulo = document.createElement('h3');
    titulo.classList.add('avisoTitulo');
    titulo.textContent = aviso.titulo;

    let cabecalho = document.createElement('div');
    cabecalho.classList.add('avisoCabecalho');

    let autor = document.createElement('p');
    autor.classList.add('avisoAutor');
    autor.textContent = `Por ${aviso.autor}`;

    let data = document.createElement('p');
    data.classList.add('avisoData');
    data.textContent = formatarData(aviso.dataDePublicacao);

    let descricao = document.createElement('p');
    descricao.classList.add('avisoDescricao');
    descricao.textContent = aviso.descricao;

    let botoes = document.createElement('div');
    botoes.classList.add('avisoBotoes');

    let btnAtualizar = document.createElement('button');
    btnAtualizar.textContent = 'Atualizar ✏️';
    btnAtualizar.classList.add('btnAtualizar');
    btnAtualizar.onclick = () => atualizarAviso(aviso.id); // ou abrir formulário

    let btnExcluir = document.createElement('button');
    btnExcluir.textContent = 'Excluir ❌';
    btnExcluir.classList.add('btnExcluir');
    btnExcluir.onclick = () => excluirAviso(aviso.id);

    cabecalho.appendChild(autor);
    cabecalho.appendChild(data);

    botoes.appendChild(btnAtualizar);
    botoes.appendChild(btnExcluir);

    card.appendChild(titulo);
    card.appendChild(cabecalho);
    card.appendChild(descricao);
    card.appendChild(botoes);

    div.appendChild(card);
  });
}

function formatarData(dataRecebida) {
  console.log(dataRecebida);
  let data = new Date(dataRecebida);

  return (
    data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }) +
    ' ' +
    data.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  );
}

function excluirAviso(id) {
  fetch(`http://localhost:8080/avisos/deletar/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao excluir o aviso');
      }
      location.reload();
    })
    .catch((error) => {
      console.error('Erro ao excluir:', error);
      alert('Erro ao excluir o aviso.');
    });
}

function atualizarAviso(id) {
  window.location.href = `/pages/edicaoAviso.html?id=${id}`;
}
