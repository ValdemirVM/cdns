/**
 * CAPTCHA BOOTSTRAP
 * Author: Valdemir V Mendes
 */
// CSS para o CAPTCHA
var captchaCSS = `
<style>
    #captchavgmj .btn-option.active {
        background-color: #6c757d;
        color: #fff;
    }
    #captchavgmj button{
        font-size: 12px !important; /* Tamanho de fonte menor */
        padding: 0.15rem 0.3rem; /* Espaçamento interno menor */
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
    
    // Função para embaralhar um array usando o algoritmo de Fisher-Yates (Knuth)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Gerar dois números aleatórios entre 1 e 10 para a operação matemática
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;

    // Calcular o resultado da operação matemática
    var resultado = num1 + num2;

    // Criar um array com os valores dos botões
    var opcoes = [resultado - 1, resultado, resultado + 1];

    // Embaralhar o array de opções
    opcoes = shuffleArray(opcoes);

    // Criar o HTML do CAPTCHA dinâmico com os botões embaralhados
    var captchaHTML = `
        <h6 class="text-secondary">${num1} + ${num2} = ?</h6>
        <div class="btn-group" role="group" aria-label="Opções" style="width:140px;">
            <button type="button" class="btn btn-outline-secondary btn-option me-1" data-valor="${opcoes[0]}">${opcoes[0]}</button>
            <button type="button" class="btn btn-outline-secondary btn-option me-1" data-valor="${opcoes[1]}">${opcoes[1]}</button>
            <button type="button" class="btn btn-outline-secondary btn-option me-1" data-valor="${opcoes[2]}">${opcoes[2]}</button>
        </div>
        <small id="resultado" class="mt-2"><i class="fa-solid fa-lock"></i></small>
    `;
        
    document.getElementById("captchavgmj").classList.add('border');
    document.getElementById("captchavgmj").classList.add('border-1');
    document.getElementById("captchavgmj").classList.add('border-secondary');
    document.getElementById("captchavgmj").classList.add('rounded-4');
    document.getElementById("captchavgmj").classList.add('p-3');
    
    // Inserir o HTML gerado dentro da div com id "captchavgmj"
    document.getElementById("captchavgmj").innerHTML = captchaHTML;

    // Criar o input hidden para armazenar a resposta correta
    var respostaInput = document.createElement('input');
    respostaInput.type = 'hidden';
    respostaInput.id = 'captchapost';
    respostaInput.name = 'captchapost';
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
            var respostaInput = document.getElementById("captchapost");

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
