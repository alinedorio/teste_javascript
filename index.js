function InserirAluno(qt_aulas){
    var matricula = prompt('Digite a sua matrícula')
    var nome = prompt('Digite o seu nome')
    var qt_faltas = parseInt(prompt('Digite a quantidade de faltas'))
    var nota_b1 = parseFloat(prompt('Digite a nota do primeiro bimestre'))
    var nota_b2 = parseFloat(prompt('Digite nota do segundo bimestre'))

    var tabela = document.getElementById('tabela')

    var linha = tabela.insertRow(-1)

    var media = (nota_b1 + nota_b2)/2
    var situacao
    var nota_PF
    var media_final

    if(qt_faltas > (25*qt_aulas)/100){
        situacao = 'Reprovado por falta'
        nota_PF = '-'
        media_final = media
    }

    else{
        if(media >= 7){
            situacao = 'Aprovado'
            nota_PF = '-'
            media_final = media
        }
    
        else{
            nota_PF = parseFloat(prompt('Digite a nota da prova final'))
            media_final = (media + nota_PF)/2
            if(media_final >= 7){
                situacao = 'Aprovado'
            }
    
            else{
                situacao = 'Reprovado'
            }
        }
    }

    

    linha.insertCell(0).innerText = matricula;
    linha.insertCell(1).innerText = nome;
    linha.insertCell(2).innerText = qt_faltas;
    linha.insertCell(3).innerText = nota_b1;
    linha.insertCell(4).innerText = nota_b2;
    linha.insertCell(5).innerText = media;
    linha.insertCell(6).innerText = nota_PF;
    linha.insertCell(7).innerText = media_final;
    linha.insertCell(8).innerText = situacao;

    
}
