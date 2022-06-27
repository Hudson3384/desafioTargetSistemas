
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


async function start(){
    const url = 'https://drive.google.com/file/d/1qXvCPjEL4jerElN-hnScoKkEVmSQ8A2L'
}

