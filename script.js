
//resolvendo desafio de fibonnaci
function desafioFibonnaci() {
    let num = document.querySelector('input#inputFibonnaci')
    //verificação de entrada do valor: 
    if(num.value.length == 0 || isNaN(num.value) == true){
        window.alert('[ERRO] Informe um número!')
    } else {
        let ult = 1
        let penut = 0 
        let resp = document.querySelector('p.answerDesafio2')
        resp.innerHTML = ''
        //verificação do termo 1 e 0 
        if(num.value  == ult || num.value == penut){
            resp.innerHTML = `O número ${num.value} pertence a sequência de fibonnaci`
        } else {
            //verificação do termo até o número de fibonnaci ser superior ao termo informado
            let fibo = 0;
            while(fibo <= num.value){
                 fibo = ult + penut;
                 penut = ult
                 ult = fibo
                 if(fibo == num.value){
                    resp.innerHTML = `O número ${num.value} pertence a sequência de fibonnaci`
                 } 
            } if(resp.innerHTML == ''){
                //resposta ao caso de não ser correspondente
                resp.innerHTML = `O número ${num.value} não pertence a sequência de fibonnaci`
            }
        }
    }
}



function ThirdChallenge (){
    let resDesafioTerceiro = document.getElementsByClassName('AnswerThirdChallenge')
    const dados = JSON.parse(`[
        {
            "dia": 1,
            "valor": 22174.1664
        },
        {
            "dia": 2,
            "valor": 24537.6698
        },
        {
            "dia": 3,
            "valor": 26139.6134
        },
        {
            "dia": 4,
            "valor": 0.0
        },
        {
            "dia": 5,
            "valor": 0.0
        },
        {
            "dia": 6,
            "valor": 26742.6612
        },
        {
            "dia": 7,
            "valor": 0.0
        },
        {
            "dia": 8,
            "valor": 42889.2258
        },
        {
            "dia": 9,
            "valor": 46251.174
        },
        {
            "dia": 10,
            "valor": 11191.4722
        },
        {
            "dia": 11,
            "valor": 0.0
        },
        {
            "dia": 12,
            "valor": 0.0
        },
        {
            "dia": 13,
            "valor": 3847.4823
        },
        {
            "dia": 14,
            "valor": 373.7838
        },
        {
            "dia": 15,
            "valor": 2659.7563
        },
        {
            "dia": 16,
            "valor": 48924.2448
        },
        {
            "dia": 17,
            "valor": 18419.2614
        },
        {
            "dia": 18,
            "valor": 0.0
        },
        {
            "dia": 19,
            "valor": 0.0
        },
        {
            "dia": 20,
            "valor": 35240.1826
        },
        {
            "dia": 21,
            "valor": 43829.1667
        },
        {
            "dia": 22,
            "valor": 18235.6852
        },
        {
            "dia": 23,
            "valor": 4355.0662
        },
        {
            "dia": 24,
            "valor": 13327.1025
        },
        {
            "dia": 25,
            "valor": 0.0
        },
        {
            "dia": 26,
            "valor": 0.0
        },
        {
            "dia": 27,
            "valor": 25681.8318
        },
        {
            "dia": 28,
            "valor": 1718.1221
        },
        {
            "dia": 29,
            "valor": 13220.495
        },
        {
            "dia": 30,
            "valor": 8414.61
        }
    ]`)
let dadosFiltrados = []
 dados.forEach(element => {
    if(element.valor !== 0){
        dadosFiltrados.push(element)
    }
})
//Valor máxiimo e Mínimo
let min = {valor: Infinity}
let max = {valor: -Infinity}
for ( let i of dadosFiltrados) {
    min = i.valor < min.valor ? i : min
    max = i.valor > max.valor ? i : max 
}

//soma dos valores: 
let sum = 0; 
dadosFiltrados.forEach(i => sum+=i.valor )

//média dos rendimentos 
const media = sum/dadosFiltrados.length //dias que não tiveram rendimento zero

let diasAcimaMedia = 0;
dadosFiltrados.forEach(i => {
    if (i.valor > media) {
         diasAcimaMedia++
    } 
})
resDesafioTerceiro.textcontent = `O menor valor foi de ${min.valor}, o maior de ${max.valor} e a quantidade
de dias que ultrapassaram a média foi de ${diasAcimaMedia} dias`
}
ThirdChallenge()

function fourthChallenge(){
    let answerFourhChallenge = document.querySelector('p.answerFourhChallenge')
        const fatGeral = new Map([  
            ['SP', 67836.43],
            ['RJ', 36678.66],
            ['MG', 29229.88],
            ['ES', 27165.48],
            ['Outros', 19849.53]
    ])
    let Total = 0;
    fatGeral.forEach((value) => Total += value)
    fatGeral.forEach((value,key) => {
        answerFourhChallenge.innerHTML += `O faturamento de ${key} representa ${value/Total*100}`
    })  
}
fourthChallenge()
    