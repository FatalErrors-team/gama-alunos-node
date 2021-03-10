---
title: Funções do Bcrypt
---

# Funções do Bcrypt

## Constants

<dl>
<dt><a href="#generatePasswordHash">generatePasswordHash</a> ⇒ <code>string</code></dt>
<dd><p>Função para gerar o hash da senha por meio do Bcrypt</p>
</dd>
<dt><a href="#comparePasswordHash">comparePasswordHash</a> ⇒ <code>boolean</code></dt>
<dd><p>Função para comparar hash com senha em texto por meio do Bcrypt</p>
</dd>
</dl>

<a name="generatePasswordHash"></a>

## generatePasswordHash ⇒ <code>string</code>

Função para gerar o hash da senha por meio do Bcrypt

**Kind**: global constant  
**Returns**: <code>string</code> - Senha criptografada

| Param    | Type                | Description               |
| -------- | ------------------- | ------------------------- |
| password | <code>string</code> | Senha a ser criptografada |

<a name="comparePasswordHash"></a>

## comparePasswordHash ⇒ <code>boolean</code>

Função para comparar hash com senha em texto por meio do Bcrypt

**Kind**: global constant  
**Returns**: <code>boolean</code> - retorna o resultado da comparação

| Param        | Type                | Description           |
| ------------ | ------------------- | --------------------- |
| textPassword | <code>string</code> | Senha em texto normal |
| hashPassword | <code>string</code> | Senha já hasheada     |
