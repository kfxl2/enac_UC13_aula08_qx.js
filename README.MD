# Exercícios de Revisão de Lógica com JavaScript

**Utilizando os Padrões JSDoc**.

## **Questão 1: Verificar Idade**

### O que a questão pede?
Crie uma função chamada `verificarIdade` que recebe um número representando a idade de uma pessoa e retorna:
- `"Menor de idade"` se a idade for menor que 18.
- `"Maior de idade"` se for 18 ou mais.

### Como foi resolvida?
A função utiliza uma estrutura condicional `if/else` para verificar a idade e retornar a mensagem apropriada.

### Código:
```javascript
/**
 * Verifica se uma pessoa é maior ou menor de idade.
 * @param {number} idade - A idade da pessoa.
 * @returns {string} - Retorna "Menor de idade" ou "Maior de idade".
 */
function verificarIdade(idade) {
    if (idade < 18) {
        return "Menor de idade";
    } else {
        return "Maior de idade";
    }
}

// Exemplos de uso
console.log(verificarIdade(15)); // Menor de idade
console.log(verificarIdade(18)); // Maior de idade
console.log(verificarIdade(21)); // Maior de idade
```
## Questão 2: Definir Dia da Semana

### O que a questão pede?
Implemente a função `definirDiaDaSemana` que recebe um número (1 a 7) e retorna o nome do dia correspondente. Caso o número seja inválido, retorna `"Número inválido"`.

### Como foi resolvida?
A função utiliza a estrutura `switch` para mapear números de 1 a 7 para os respectivos dias da semana. Caso o número esteja fora desse intervalo, a função retorna "Número inválido".

### Código:
```javascript
/**
 * Retorna o nome do dia da semana com base no número fornecido.
 * @param {number} numero - O número do dia (1 a 7).
 * @returns {string} - O nome do dia correspondente ou "Número inválido".
 */
function definirDiaDaSemana(num){
    switch(num){
        case 1: 
            return  "Domingo";
        case 2:
            return "Segunda";
        case 3:
            return "Terça";
        case 4: 
            return "Quarta";

        case 5:
            return "Quinta";
        case 6:
            return "Sexta";
        case 7:
            return "Sabado";
        default:
            return "Numero Não encontrado Tente Novamente Outro Numero"
    }
}
console.log(definirDiaDaSemana(3));
console.log(definirDiaDaSemana(7));
console.log(definirDiaDaSemana(8))
```
O switch é ideal para casos como esse, onde cada valor tem um resultado específico

##  3 Questão: Par ou Ímpar

### O que a questão pede?
Implemente a função `imparOuPar` que utiliza o operador ternário para retornar:
- `"Par"` se o número for par.
- `"Impar"` caso contrário.

### Como foi resolvida?
A função utiliza o **operador ternário** para verificar se o número fornecido é divisível por 2, retornando `"Par"` se for, ou `"Impar"` caso contrário.

### Código:
```javascript
/**
 * Verifica se um número é par ou ímpar.
 * @param {number} num - O número a ser verificado.
 * @returns {string} - Retorna "Par" ou "Impar".
 */
function imparOuPar(num) {
    return num % 2 === 0 ? "Par" : "Impar";
}
// Exemplos
console.log(imparOuPar(10)); // Par
console.log(imparOuPar(15)); // Impar
console.log(imparOuPar(22)); // Par
```

A função imparOuPar é fácil de entender! Ela recebe um número e verifica se é par ou ímpar usando uma regra simples: se o número for divisível por 2, é par; caso contrário, é ímpar.
 Se o número for divisível por 2 (resto 0), retorna 'Par'.
- Caso contrário, retorna 'Ímpar'.
**Exemplos**:
- 10 (resto 0) = Par
- 15 (resto 1) = Ímpar
- 22 (resto 0) = Par"

# 4  Exercício: Verificar Acesso ao Sistema

Esse repositório inclui a função podeAcessar, que verifica se um usuário pode acessar o sistema. Ela considera três condições:
- Idade mínima
- Status de administrador
- Conta não bloqueada

---

## **O que a função pede?**

A função `podeAcessar` recebe um objeto `usuario` com as propriedades:
- **`idade`** (número)
- **`isAdmin`** (booleano)
- **`isBlocked`** (booleano)

E retorna `true` se:
1. O usuário for maior de 18 anos **OU** for um administrador (`isAdmin` verdadeiro).
2. A conta não estiver bloqueada (`isBlocked` é falso).

Se qualquer uma dessas condições não for atendida, a função retorna `false`.

---

## **Como foi resolvida?**

A função foi resolvida utilizando operadores lógicos:
- **`||` (OR):** Para verificar se a idade é maior que 18 **OU** se o usuário é administrador.
- **`&&` (AND):** Para garantir que a conta não esteja bloqueada.
- A função retorna `true` se ambas as condições forem atendidas, ou `false` caso contrário.
---
## **Código**
```javascript
/**
 * Verifica se o usuário pode acessar o sistema com base na idade, status de administrador e se a conta está bloqueada.
 * @param {Object} usuario - O objeto representando o usuário.
 * @param {number} usuario.idade - A idade do usuário.
 * @param {boolean} usuario.isAdmin - Se o usuário é administrador.
 * @param {boolean} usuario.isBlocked - Se a conta do usuário está bloqueada.
 * @returns {boolean} - Retorna true se o usuário pode acessar, caso contrário false.
 */
function podeAcessar(usuario) {
    return (usuario.idade > 18 || usuario.isAdmin) && !usuario.isBlocked;
}
// Exemplos 
console.log(podeAcessar({ idade: 20, isAdmin: false, isBlocked: false })); // true
console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: true })); // false
```
## Questão 5: Calcular Desconto

### O que a questão pede?
Implemente uma **arrow function** chamada `calcularDesconto` que recebe dois argumentos:
1. O **preço original** de um produto (número).
2. A **porcentagem de desconto** (número).

A função deve retornar o preço com o desconto aplicado.

### Como foi resolvida?
A função foi resolvida utilizando a fórmula de desconto:
- **Preço com desconto = Preço original - (Preço original * (Porcentagem de desconto / 100))**.
A função subtrai o valor do desconto do preço original e retorna o resultado.

### Código:
```javascript
/**
 * Calcula o preço final de um produto com desconto aplicado.
 * @param {number} precoOriginal - O preço original do produto.
 * @param {number} porcentagemDesconto - A porcentagem de desconto.
 * @returns {number} - O preço com o desconto aplicado.
 */
const calcularDesconto = (precoOriginal, porcentagemDesconto) => {
    return precoOriginal - (precoOriginal * (porcentagemDesconto / 100));
};

// Exemplos
console.log(calcularDesconto(100, 10)); // 90
console.log(calcularDesconto(250, 20)); // 200
```








