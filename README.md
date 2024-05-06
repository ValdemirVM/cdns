# CAPTCHA BOOTSTRAP - by Valdemir VM
## Introdução
Este é um CAPTCHA dinâmico criado com JavaScript, HTML e CSS para adicionar uma camada extra de segurança aos formulários em seu site. Ele consiste em uma operação matemática simples que o usuário deve resolver selecionando a opção correta entre três possibilidades.

## Licença
Este projeto é licenciado sob a Creative Commons Attribution 4.0 International (CC BY 4.0).
<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"><img loading="lazy" src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png" target="_blank" width="100"></a>

## Como Integrar
### Inclua o JavaScript:
Adicione o seguinte trecho de código dentro da tag <head> de suas páginas HTML:
```html
<script src="https://cdn.jsdelivr.net/gh/ValdemirVM/cdns@main/captchabootstrap.js"></script>
```

## Adicione o Markup:
Insira a seguinte linha onde deseja exibir o CAPTCHA em seu formulário:
```html
<div id="captchavgmj"></div>
```
## Personalização
### Alterando o Estilo:
O CAPTCHA pode ser personalizado alterando as propriedades CSS diretamente no arquivo JavaScript ou em seu arquivo CSS externo.
Para alterar cores, tamanhos, fontes e outros estilos, edite as regras CSS dentro da variavel captchaCSS no arquivo JavaScript.
### Customizando o Texto:
O texto exibido no CAPTCHA, como a operação matemática e as opções de resposta, pode ser personalizado diretamente no código JavaScript, na função criarCaptcha().
### Adicionando Efeitos Visuais:
Você pode adicionar animações, transições e outros efeitos visuais ao CAPTCHA utilizando JavaScript e CSS. Modifique as classes e eventos conforme necessário para adicionar esses efeitos.

## Utilização
### Como Funciona:
O CAPTCHA apresentará uma operação matemática que o usuário deve resolver selecionando a opção correta entre as disponíveis.
### Feedback de Resposta:
Após selecionar uma opção, o CAPTCHA fornecerá um feedback imediato ao usuário, indicando se a resposta está correta ou incorreta.
### Armazenando a Resposta:
O CAPTCHA inclui um campo <input type="hidden" id="captchapost" name="captchapost" value=""> para armazenar automaticamente a resposta do usuário (1 para correta, 0 para incorreta). Este valor pode ser enviado ao servidor junto com outros dados do formulário.

### Por exemplo, em PHP:
```php
<?php
// Verifica se o formulário foi enviado e se o CAPTCHA foi respondido corretamente
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $respostaCorreta = $_POST["captchapost"]; // Valor do campo hidden com a resposta correta

    // Verifica se a resposta enviada é igual à resposta correta
    if ($respostaCorreta == "1") {
        echo "Resposta correta!";
    } else {
        echo "Resposta incorreta!";
    }
}
?>
```
### Exemplo de Uso em html:


## Conclusão
O CAPTCHA JavaScript oferece uma maneira simples e eficaz de adicionar um desafio de verificação humana em seus formulários web, ajudando a proteger contra atividades maliciosas. Personalize o CAPTCHA conforme necessário para atender às suas necessidades de design e funcionalidade.

