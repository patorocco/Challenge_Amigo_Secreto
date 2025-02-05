//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = []; // Array para armazenar os amigos inseridos

function adicionarAmigo() {
    //Captura o valor do campo de entrada
    let campoDeTexto = document.getElementById('nomeDoAmigo');
    let nomeDoAmigo = campoDeTexto.value.trim();

    //Validação: Verificar se o campo está vazio
    if(nomeDoAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    //Adicionar ao array
    listaDeAmigos.push(nomeDoAmigo);

    //Limpar o campo de entrada
    campoDeTexto.value = '';

    //Exibir a lista atualizada
    listaDeAmigosAtualizada();
}

function listaDeAmigosAtualizada() {
    // Obter o elemento da lista
    let listaContainer = document.getElementById('listaDeAmigos');
    // Limpar a lista existente para evitar duplicação
    listaContainer.innerHTML = '';

    // Percorrer o array e criar elementos <li>
    listaDeAmigos.forEach(amigo => {
        let itemListado = document.createElement('li');
        itemListado.textContent = amigo;
        listaContainer.appendChild(itemListado);        
    });
}

function sortearAmigo() {
    //Verificar se há amigos na lista
    if (listaDeAmigos.length === 0) {
        alert('Nenhum amigo na lista para sortear.');
        return;
    }

    //Gerar um índice aleatório dentro do intervalo do array
    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);

    //Obter o nome correspondente ao índice sorteado
    let amigoSorteado = listaDeAmigos[indiceSorteado];

    //Exibir o amigo sorteado na página
    document.getElementById('resultadoSorteio').innerHTML = `🎉Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}

