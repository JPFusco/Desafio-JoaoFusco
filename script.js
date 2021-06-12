const imagem1 = document.querySelector('#img1')
const imagem2 = document.querySelector('#img2')
const imagem3 = document.querySelector('#img3')
const imagem4 = document.querySelector('#img4')
const barra1 = document.querySelector('#barra1')
const barra2 = document.querySelector('#barra2')
const barra3 = document.querySelector('#barra3')
const barra4 = document.querySelector('#barra4')
const nome1 = document.querySelector('#nome1')
const nome2 = document.querySelector('#nome2')
const nome3 = document.querySelector('#nome3')
const nome4 = document.querySelector('#nome4')
const status1 = document.querySelector('#status1')
const status2 = document.querySelector('#status2')
const status3 = document.querySelector('#status3')
const status4 = document.querySelector('#status4')

var numeros = [];
while (numeros.length < 4){
    var r = Math.floor(Math.random() * 671);
    if (numeros.indexOf(r) == -1){
        numeros.push(r);
    }
}

pegarPersonagem1 = () => {
    return fetch(`https://rickandmortyapi.com/api/character/${numeros[0]}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem1.src = data.image;
        nome1.innerHTML = data.name;
        if(data.status == 'Alive'){
            status1.innerHTML = 'Vivo';
            barra1.style.backgroundColor = '#76EF4c';
        }
        if(data.status == 'Dead'){
            status1.innerHTML = 'Morto';
            barra1.style.backgroundColor = '#d63d2e';
        }
        if(data.status == 'unknown'){
            status1.innerHTML = 'Desconhecido';
            barra1.style.backgroundColor = '#9e9e9e';
        }
    });
}

pegarPersonagem2 = () => {
    return fetch(`https://rickandmortyapi.com/api/character/${numeros[1]}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem2.src = data.image;
        nome2.innerHTML = data.name;
        if(data.status == 'Alive'){
            status2.innerHTML = 'Vivo';
            barra2.style.backgroundColor = '#76EF4c';
        }
        if(data.status == 'Dead'){
            status2.innerHTML = 'Morto';
            barra2.style.backgroundColor = '#d63d2e';
        }
        if(data.status == 'unknown'){
            status2.innerHTML = 'Desconhecido';
            barra2.style.backgroundColor = '#9e9e9e';
        }
    });
}

pegarPersonagem3 = () => {
    return fetch(`https://rickandmortyapi.com/api/character/${numeros[2]}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem3.src = data.image;
        nome3.innerHTML = data.name;
        if(data.status == 'Alive'){
            status3.innerHTML = 'Vivo';
            barra3.style.backgroundColor = '#76EF4c';
        }
        if(data.status == 'Dead'){
            status3.innerHTML = 'Morto';
            barra3.style.backgroundColor = '#d63d2e';
        }
        if(data.status == 'unknown'){
            status3.innerHTML = 'Desconhecido';
            barra3.style.backgroundColor = '#9e9e9e';
        }
    });
}

pegarPersonagem4 = () => {
    return fetch(`https://rickandmortyapi.com/api/character/${numeros[3]}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem4.src = data.image;
        nome4.innerHTML = data.name;
        if(data.status == 'Alive'){
            status4.innerHTML = 'Vivo';
            barra4.style.backgroundColor = '#76EF4c';
        }
        if(data.status == 'Dead'){
            status4.innerHTML = 'Morto';
            barra4.style.backgroundColor = '#d63d2e';
        }
        if(data.status == 'unknown'){
            status4.innerHTML = 'Desconhecido';
            barra4.style.backgroundColor = '#9e9e9e';
        }
    });
}
pegarPersonagem1();
pegarPersonagem2();
pegarPersonagem3();
pegarPersonagem4();

console.log(numeros)




