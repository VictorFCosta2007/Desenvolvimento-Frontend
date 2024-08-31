# Criando primeiro projeto com angular

# Configurações iniciais



### Instalação normal [Global]
    - npm install -g @angular/cli
    - Set-ExecutationPolicy Unrestricted

### Maquinas do (Instituto Federal) - IF
    - npm  install -g @angular/cli
    - configurar variavel de ambiente

### Criação de aplicação a angular
    ng new primeiro-programa-angular--no-standalone

### Executar Aplicação
    entrar na pasta da aplicação angular
    ng serve --open [ng s -o]

### Single page application
    Uma Single page Application (aplicação de página únic (SPA)) é um aplicativo da web ou site que interage com usuário reescrevendo dinamicamente a página da web atual com novos dados do servidor da web, em vez do método padrão de carregar páginas inteiras novas. O objetivo são transições mais rápidas que fazem o site parecer mais com um aplicativo nativo. 

# O que são componentes em angular
    No Angular, um componente é uma unidade autônoma e reutilizável de uma aplicação que encapsula o HTML, o CSS e a lógica relacionada. Cada componente representa uma parte específica da interface do usuário e interage com outros componentes para construir a aplicação como um todo.
    Referencias: https://www.dio.me/articles/vantagens-de-utilizar-componentes-com-angular

#
    Um componene em angular sempre terá 3 arquivos sendo: html, css, ts
    Isso pode variar, mas em geral são 3


### Como criar um componente
    ng generate component nome-componente
    ng generate component  components/views/home