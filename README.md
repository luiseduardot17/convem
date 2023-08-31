# 🚀 Desafio Convem
#### Sobre o desafio:

Construa (do zero) em Angular (http://angular.io) uma aplicação que na tela principal exiba o texto "Você quer se juntar ao time da Convem?", um campo para preenchimento e um botão para confirmação.

Ao clicar no botão de confirmação, você deve chamar uma API em Node.js que retorne sucesso no caso da resposta "SIM" (não importa se maiúsculo ou minúsculo) e "Erro" no caso de qualquer outra resposta.

Em caso de sucesso, exiba na tela o texto "Você está mais próximo de se juntar ao time!". Exiba "Erro" em qualquer outro caso.


## 📥 Como instalar e usar o projeto:

Para instalar o projeto, com o Visual Studio Code, ou outro editor de sua preferência,
abra o terminal e clone o projeto:
```
git clone https://github.com/luiseduardot17/convem.git
```
Confirme se esta no diretório correto, utilizando o comando:
```
cd convem
```
Para esta aplicação você deverá ter o angular instalado em seu sistema, caso ainda não o tenha:
```
npm install -g @angular/cli
```
No Windows, a execução de scripts PowerShell é desabilitada por padrão. Para permitir a execução de scripts PowerShell necessários para binários globais npm, você deve definir a seguinte política de execução:
```
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```
No terminal, instale as dependências do projeto (Para isso você precisa ter o Node.js instalado):
```
npm install ou npm i
```
Por fim, no terminal execute o projeto:
```
ng serve ou ng serve --open para abrir no navegador automaticamente em http://localhost:4200/
```

#