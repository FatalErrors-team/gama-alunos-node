<p align="center"> <img src="https://i.ibb.co/Jkm5cnR/GAMA-ALUNOS.png" height=300></p>

<h1 align="center">
  Gama Alunos Node 
  <img src="https://img.shields.io/badge/Node-v14.16.0-339933.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Hapi-20.0.0-f1c40f.svg?&style=for-the-badge"/>
</h1>

Gama-alunos-node é um projeto proposto pelo professor Gustavo Gondim como desafio final do curso de Node. Nele, deveríamos implementar um modelo de API de alunos baseado no [projeto de Java](https://github.com/FatalErrors-team/final-project) também realizado no treinamento. A ideia é que além de conter as ações de um CRUD normal, o sistema ainda tivesse um relação direta com servidor Java. Assim funcionaria como uma API Gateway que permitiria persistência poliglota.

## Ferramentas
Como desenvolvedores, usamos o VsCode com os plugins do __eslint__, __prettier__ e __editorconfig__ com a finalidade de manter um código mais limpo e organizado para todos na equipe (É, Gustavo, eu sou fanático por um código lindo, ou melhor, limpo). Além disso, definimos entre nós algumas convenções que seriam adotadas tanto em código como nos commits.

No que se refere a questão de arquitetura do sistema utilizamos os seguintes módulos:
#### Hapi (20.0.0)
Nossa opção como servidor http, primordialmente por ter sido uma das tecnologias ensinadas no curso, mas também por ser um framework completo com um conjunto de plugins que resolve os problemas de maneira fácil.

#### Hapi-Swagger (14.1.0)
Pacote utilizado para documentar os endpoints da API, assim como também definimos no projeto de Java. Serve, por exemplo, para guiar o usuário da API quais tipos de dados ele pode ou deve passar em cada request. Isso é extremamente relevante dentro do meio do Javascript que é uma linguagem de tipagem dinâmica e fraca que aceita qualquer argumento como parâmetro.

#### Joi (17.x)
Usado para facilitar a validação dos objetos recebidos no body. Tem uma integração praticamente automática com o Swagger, então foi um dos pontos que ajudou muito no que se refere a documentar também.

## Como executar?
Antes de tudo, você precisa ter o node instalado, é claro, e o yarn. Caso ainda não possua o yarn é só executar o comando: `npm install yarn --global`. Após isso, verifique se a instalação ocorreu normalmente com `yarn --version`. Se por algum motivo, as coisas não ocorreram bem, tente executar o comando como superusuário (root).
#### Instale as dependências
```console
gamaalunos@gamaalunos-pc:$ yarn install
```
#### Execute o projeto
```console
gamaalunos@gamaalunos-pc:$ yarn start
```
Esse comando start chama um script definido no package que irá iniciar o servidor com o nodemon, não sendo preciso realizar o reboot do sistema a cada alteração.

## Devs
#### Em outras palavras, os carinhas que vão ser contratados
<table>
  <tr>
    <td>
      <a href="https://github.com/joaovicdsantos">
      <img src="https://avatars.githubusercontent.com/u/24553367?s=400&u=8ea941dbf9cf96e898be1676e2579b6659920a49&v=4" width=120>
        <p align="center">João Victor</p>
      </a>
    </td>
    <td>
      <a href="https://github.com/chavesjoabe">
      <img src="https://avatars.githubusercontent.com/u/59907815?s=400&u=16f4eb2bb285c7fe628c759619fa3ef5069a9e0e&v=4" width=120>
      <p align="center">Joabe Chaves</p>
      </a>
    </td>
    <td>
      <a href="https://github.com/ecolius">
      <img src="https://avatars.githubusercontent.com/u/79538539?s=400&u=7f31220a25ce05210c8086846a1b29c514f17fa7&v=4" width=120>
  <p align="center">Vinicius Antonio</p>
      </a>
    </td>
  </tr>
</table>
