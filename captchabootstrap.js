// CSS para o CAPTCHA
var captchaCSS = `
<style>
    #captchavgmj .btn-option.active {
        background-color: #000;
        color: #fff;
    }
</style>
`;

// Função para criar o CAPTCHA
function criarCaptcha() {
    // Inserir o CSS dentro do head
    document.head.insertAdjacentHTML('beforeend', captchaCSS);

    // Gerar dois números aleatórios entre 1 e 10 para a operação matemática
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
    
    // Calcular o resultado da operação matemática
    var resultado = num1 + num2;
    
    // Criar o HTML do CAPTCHA dinâmico com botões Bootstrap 5
    var captchaHTML = `
        <small>${num1} + ${num2} = ?</small>
        <div class="btn-group" role="group" aria-label="Opções" style="width:180px;">
            <button type="button" class="btn btn-outline-dark btn-option me-1" data-valor="${resultado - 1}">${resultado - 1}</button>
            <button type="button" class="btn btn-outline-dark btn-option me-1" data-valor="${resultado}">${resultado}</button>
            <button type="button" class="btn btn-outline-dark btn-option me-1" data-valor="${resultado + 1}">${resultado + 1}</button>
        </div>
        <div id="resultado" class="mt-2"><i class="fa-solid fa-user-shield"></i></div>
    `;
    
    document.getElementById("captchavgmj").classList.add('border');
    document.getElementById("captchavgmj").classList.add('border-1');
    document.getElementById("captchavgmj").classList.add('border-dark');
    document.getElementById("captchavgmj").classList.add('rounded-4');
    document.getElementById("captchavgmj").classList.add('p-3');
    
    // Inserir o HTML gerado dentro da div com id "captchavgmj"
    document.getElementById("captchavgmj").innerHTML = captchaHTML;

    // Criar o input hidden para armazenar a resposta correta
    var respostaInput = document.createElement('input');
    respostaInput.type = 'hidden';
    respostaInput.id = 'captchavgmj';
    respostaInput.name = 'captchavgmj';
    respostaInput.value = '';

    // Inserir o input hidden dentro do captcha
    document.getElementById("captchavgmj").appendChild(respostaInput);

    // Adicionar evento de clique nos botões para verificar a seleção
    var buttons = document.querySelectorAll('.btn-option');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Remover classe active de todos os outros botões
            buttons.forEach(function(btn) {
                btn.classList.remove('active');
            });

            // Adicionar classe active ao botão selecionado
            this.classList.add('active');

            // Verificar se a opção selecionada está correta
            var selectedOption = parseInt(this.getAttribute('data-valor'));
            var resultadoDiv = document.getElementById("resultado");
            var respostaInput = document.getElementById("captchavgmj");

            //Linguagem
            if (navigator.language === "pt-BR") {
                var str_response1= "Opção correta!";
                var str_response2= "Opção incorreta!";
            } else {
                var str_response1= "Correct option!";
                var str_response2= "Incorrect option!";
            }

            if (selectedOption === resultado) {
                resultadoDiv.innerHTML = '<i class="fas fa-check-circle text-primary"></i><span class="text-primary"> ' + str_response1 + '</span>';
                respostaInput.value = "1"; // Resposta correta
            } else {
                resultadoDiv.innerHTML = '<i class="fas fa-times-circle text-danger"></i><span class="text-danger"> ' + str_response2 + '</span>';
                respostaInput.value = "0"; // Resposta incorreta
            }
        });
    });
}

// Chamar a função para criar o captcha ao carregar a página
document.addEventListener("DOMContentLoaded", criarCaptcha);
