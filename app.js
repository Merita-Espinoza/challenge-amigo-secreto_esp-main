// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

    let amigos = [];

    let agregarAmigo = function () {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = '';
    document.getElementById('resultado').innerHTML = '';
    };

    let mostrarLista = function () {
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        ul.appendChild(li);
    }
    };

    let sortearAmigo = function () {
    if (amigos.length === 0) {
        alert('La lista se encuenrra vacía. Por favor agrega los amigos a sortear.');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML =
        'El amigo secreto sorteado es: ' + amigoSorteado;
    };



