herois = [{nome: 'Homem-Aranha', vitorias: 15, derrotas: 5}, {nome: 'Super Man', vitorias: 1000, derrotas: 1}, {nome: 'Mulher Maravilha', vitorias: 100, derrotas: 0}]

for(let i=0; i< herois.length; i++){
    saldoVitorias = exibirResultado(herois[i].nome, herois[i].vitorias, herois[i].derrotas)
}

function exibirResultado(heroi, qtdVitorias, qtdDerrotas){
    let saldoVitorias = calcularSaldoVitorias(qtdVitorias, qtdDerrotas)
    let nivel = calcularNivelDoHeroi(saldoVitorias)
    console.log(`"O ${heroi} tem de saldo de ${saldoVitorias} vitórias está no nível de ${nivel}.`)
}

function calcularSaldoVitorias(qtdVitorias, qtdDerrotas){
    return qtdVitorias - qtdDerrotas
}
function calcularNivelDoHeroi(saldoVitorias){
    if(saldoVitorias < 10){
        nivel = "Ferro"
    }

    else if(saldoVitorias  <= 20){
        nivel = "Bronze"
    }

    else if(saldoVitorias  <= 50){
        nivel = "Prata"
    }

    else if(saldoVitorias  <= 80){
        nivel= "Ouro"
    }
    
    else if(saldoVitorias  <= 90){
        nivel = "Diamante"
    }

    else if(saldoVitorias  <= 100){
        nivel = "Lendário"
    }
    else{
        nivel = "Imortal"
    }

    return nivel
}
