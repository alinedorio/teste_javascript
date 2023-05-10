
/*function InserirAluno(qt_aulas){
    var matricula = prompt('Digite a sua matrícula')
    var nome = prompt('Digite o seu nome')
    var qt_faltas = parseInt(prompt('Digite a quantidade de faltas'))
    var nota_b1 = parseFloat(prompt('Digite a nota do primeiro bimestre'))
    var nota_b2 = parseFloat(prompt('Digite nota do segundo bimestre'))

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
*/

function InserirAluno(qt_aulas){

    var aluno = {}

    aluno.matricula = prompt('Digite a sua matrícula')
    aluno.nome = prompt('Digite o seu nome')
    aluno.qt_faltas = parseInt(prompt('Digite a quantidade de faltas'))
    aluno.nota_b1 = parseFloat(prompt('Digite a nota do primeiro bimestre'))
    aluno.nota_b2 = parseFloat(prompt('Digite nota do segundo bimestre'))

    inserirDadosTabela(aluno);
}


function verificarTabela(){
    var tabela = document.querySelector('#tabela')
    
    if(tabela == null){
        tabela = document.createElement('table')
        var body = document.querySelector('body');

        tabela.id = 'tabela'

        body.appendChild(tabela);

        var thead = document.createElement('thead');

        tabela.appendChild(thead);

        var th1 = document.createElement('th');
        th1.innerText = 'Matrícula'

        thead.appendChild(th1)

        var th2 = document.createElement('th');
        th2.innerText = 'Nome'

        thead.appendChild(th2)

        var th3 = document.createElement('th');
        th3.innerText = 'Faltas'

        thead.appendChild(th3)

        var th4 = document.createElement('th');
        th4.innerText = 'Nota 1B'

        thead.appendChild(th4)

        var th5 = document.createElement('th');
        th5.innerText = 'Nota 2B'

        thead.appendChild(th5)

        var th6 = document.createElement('th');
        th6.innerText = 'Média Parcial'

        thead.appendChild(th6)

        var th7 = document.createElement('th');
        th7.innerText = 'Nota PF'

        thead.appendChild(th7)

        var th8 = document.createElement('th');
        th8.innerText = 'Média Final'

        thead.appendChild(th8)

        var th9 = document.createElement('th');
        th9.innerText = 'Situação'

        thead.appendChild(th9)
    }

    return tabela;

}

function inserirDadosTabela(aluno){
    var tabela = verificarTabela();

    var linha = tabela.insertRow(-1)
    
    linha.insertCell(0).innerText = aluno.matricula;
    linha.insertCell(1).innerText = aluno.nome;
    linha.insertCell(2).innerText = aluno.qt_faltas;
    linha.insertCell(3).innerText = aluno.nota_b1;
    linha.insertCell(4).innerText = aluno.nota_b2;
    linha.insertCell(5).innerText = aluno.media;
    linha.insertCell(6).innerText = aluno.nota_PF;
    linha.insertCell(7).innerText = aluno.media_final;
    linha.insertCell(8).innerText = aluno.situacao;
}
