
console.log('[DESAFIO - ESTÁGIO TARGET SISTEMAS]')
//resolvendo desafio de fibonnaci
function secondChallenge() {
    console.log('[--- 2° DESAFIO ---]')
    const prompt = require('prompt-sync')
    let PromptSync = prompt()
    
    let num = Number(PromptSync('Informe um número:    '))
    
    //verificação de entrada do valor: 
    if(isNaN(num) == true){
        console.log('[ERRO] Informe um número!')
        let num = PromptSync('Informe um número:    ')
    } else {
        let ult = 1
        let penut = 0 
        
        //verificação do termo 1 e 0 
        if(num  === ult || num === penut){
            console.log(`Os número ${num} pertence a sequência de fibonnaci`) 
        } else {
            //verificação do termo até o número de fibonnaci ser superior ao termo informado
            let fibo = 0;
            do {
                 fibo = ult + penut;
                 penut = ult
                 ult = fibo
                 if(fibo === num){
                    console.log(`O número ${num} pertence a sequência de fibonnaci`) 
                    break;
                 }
            }while (fibo <= num)
            if(fibo !== num){
                console.log(`O número ${num} não pertence a sequência de fibonnaci`) 
            }
        }
    }
}

secondChallenge()
//desafio com daddos extraidos de um JSON
function ThirdChallenge (){
    console.log('[--- 3° DESAFIO ---]')
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
//Excluindo dados que não tiveram faturamento
let dadosFiltrados = []
 dados.forEach(element => {
    if(element.valor !== 0){
        dadosFiltrados.push(element)
    }
})
//Valor máximo e Mínimo
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

//dias com rendimentos acima da média
let diasAcimaMedia = 0;
dadosFiltrados.forEach(i => {
    if (i.valor > media) {
         diasAcimaMedia++
    } 
})
console.log(`O menor valor foi de ${min.valor}`)
console.log(`O maior valor foi de ${max.valor}`)
console.log(`Foram ao total, ${diasAcimaMedia} dias que ultrapassaram a média`)
}
ThirdChallenge()


//porcentual de colaboração em cada estado
function fourthChallenge(){
    console.log('[--- 4° DESAFIO ---]')
    //uso do map por se encaixar na função chave/valor
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
        console.log(`${key} representa ${(value/Total*100).toFixed(2)}% do Faturamento Total`)
    })  
}
fourthChallenge()

function fifthChallenge(){
    console.log('[--- 5° DESAFIO ---]')
    const promptString = require('prompt-sync')
    let PromptSync = promptString()
    
    let string = PromptSync('Informe uma palavra:    ')
    let inverseString = ''
    for(let i = string.length-1;i>=0;i--){
        inverseString += string[i]
    }
    console.log(`A palavra em modo inverso é ${inverseString}`)
    
}
fifthChallenge()