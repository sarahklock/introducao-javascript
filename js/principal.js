/* Coleta as informações sobre um paciente atravez do formulario. */
function obtemPacienteDoFormulario(form) {
    var paciente = {
         nome : form.nome.value,
         peso : form.peso.value,
         altura : form.altura.value,
         gordura : form.gordura.value,
         imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

/* Cria uma linha na tabela com as informações do paciente. */
function montaTr(paciente){
    var pacienteTr = document.createElement("tr");

    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

    return pacienteTr
}

/* Cria uma cédula com um dado em uma linha de um paciente. */
function montaTd(dado, classe) {
    var td = document.createElement("td")
    td.classList.add(classe)
    td.textContent = dado

    return td
}

/* Ao clicar no botão adicionar, cria-se uma linha na tabela com os dados inseridos. */
var botaoAdicionar = document.querySelector("#adicionar-paciente")

botaoAdicionar.addEventListener("click", function(){
    event.preventDefault()    
    var form = document.querySelector("#form-adiciona")      

    var paciente = obtemPacienteDoFormulario(form)
    var pacienteTr = montaTr(paciente)

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
})
