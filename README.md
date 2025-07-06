# Orçamento - App

## Aplicativo para a Criação de Orçamentos

<br>

Status: Concluído

<br>

Pré-requisito: Navegador atualizado

<br>

## Sumário

- [Sobre](#Sobre)
- [Como Usar](#Como-Usar)
- [Linguagens e Recursos Usados](#inguagens-e-Recursos-Usados)
- [Links](#Links)
- [Autor](#Autor)

## Sobre

Projeto de aplicação para criação de orçamentos onde é possível baixá-los como um arquivo do Excel e também enviá-lo por e-mail.

### Desktop <br>
![](./frontend/screenshots/screenshot_inicial.png)
### Mobile <br>
![](./frontend/screenshots/screenshot_inicial-mobile.png)

## Como Usar

<p>Ao carregar a tela inicial da aplicação, insira o Nome, Quantidade e Preço do Item</p>

### Desktop <br>
![](./frontend/screenshots/adicionar_item.png)

### Mobile <br>
![](./frontend/screenshots/adicionar_item-mobile.png)

<p>O item adicionado será incluído na tabela de Itens adicionados.</p>

<hr>

### Desktop <br>
![](./frontend/screenshots/item_adicionado.png)

### Mobile <br>
![](./frontend/screenshots/item_adicionado-mobile.png)

<b>OBS.: O preço será multiplicado à quantidade!</b>
<hr>

<p>É possível adicionar quantos itens forem necessários.</p>

<p>Os itens do orçamento são armazenados no Armazenamento Local (localStorage) do navegador (browser).</p>

<p>Ao clicar no botão "Baixar Planilha do Excel", é baixado um arquivo XLSX com os itens cadastrados.</p>

![](./frontend/screenshots/baixar-arquivo.png)
<hr>

<p>É possível também enviar este mesmo arquivo por e-mail.</p>

### Desktop <br>
![](./frontend/screenshots/modal_email.png)

### Mobile <br>
![](./frontend/screenshots/modal_email-mobile.png)

<p>Para enviar o arquivo XLSX por e-mail, clique em "Enviar por E-mail". Ao abrir a janela modal, insira o Nome, Email, Email de Destinatário e uma Mensagem (opcional), e então clicar em "Enviar".</p>

<p>Ao aparecer a mensagem "E-mail enviado com sucesso!", a mensagem foi enviada!</p>

![](./frontend/screenshots/email_enviado.png)

<b>OBS.: A mensagem pode cair na caixa de Spam do destinatário!</b>
<hr>

## Linguagens e Recursos Usados
- JavaScript
- ReactJS
- CSS3
- Node.js
- Express.js

## Links

- URL do Projeto: [Clique aqui](https://github.com/DouglasReis98/OrcamentoAPP-ReactJS)
- URL da Página: [Clique aqui](https://orcamentoapp.vercel.app)

## Autor
- Website - [Douglas Reis](https://douglasreis.vercel.app)
- LinkedIn - [@douglas-reis98](https://www.linkedin.com/in/douglas-reis98/)