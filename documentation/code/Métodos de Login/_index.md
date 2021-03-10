---
title: Métodos de Login
---

# Métodos de Login

## Constants

<dl>
<dt><a href="#loginHeader">loginHeader</a> ⇒</dt>
<dd><p>Realiza login por meio do token enviado pelo header</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#teste">teste(user)</a> ⇒</dt>
<dd><p>Realiza login por meio dos dados enviados no body</p>
</dd>
</dl>

<a name="loginHeader"></a>

## loginHeader ⇒

Realiza login por meio do token enviado pelo header

**Kind**: global constant  
**Returns**: Retorna um token jwt ou uma mensagem de erro.

| Param         | Type                | Description                                 |
| ------------- | ------------------- | ------------------------------------------- |
| authorization | <code>string</code> | Basic token com os dados de usuário e senha |

<a name="teste"></a>

## teste(user) ⇒

Realiza login por meio dos dados enviados no body

**Kind**: global function  
**Returns**: Retorna um token jwt ou uma mensagem de erro.

| Param | Type                | Description                          |
| ----- | ------------------- | ------------------------------------ |
| user  | <code>Object</code> | body com os dados de usuário e senha |
