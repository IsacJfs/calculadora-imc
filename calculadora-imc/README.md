# Calculadora de IMC com React e Vite

## Descrição

Este projeto é uma aplicação web simples para calcular o Índice de Massa Corporal (IMC). Ele foi desenvolvido utilizando React + Vite, e também faz uso da biblioteca Bootstrap para estilização.

## Estrutura do Projeto

O projeto é composto por três arquivos principais:

1. `App.jsx` - Este é o componente raiz da aplicação que gerencia o estado global do IMC.
2. `imc/index.jsx` - Este é o componente que contém a lógica e a interface do usuário para calcular o IMC.
3. `tabela/index.jsx` - Este componente exibe uma tabela de referência de IMC e destaca a classificação do usuário com base no IMC calculado.

## Como Executar o Projeto

1. Certifique-se de que você tem Node.js e npm instalados em seu sistema.
2. Clone este repositório.
3. Navegue até o diretório do projeto e execute `npm install` para instalar as dependências.
4. Execute `npm run dev` para iniciar o servidor de desenvolvimento.
5. Abra seu navegador e acesse o endereço indicado no prompt.

## Detalhes do Código

### App.jsx

Este arquivo é o ponto de entrada da aplicação. Ele gerencia o estado global do IMC usando o hook `useState` do React.

```jsx
import { useState } from "react";
import IMC from "./components/imc";
import Table from "./components/tabela";

function App() {
  const [resultadoIMC, setResultadoIMC] = useState(null);

  return (
    <>
      <IMC setResultadoIMC={setResultadoIMC} />
      <Table resultadoIMC={resultadoIMC} />
    </>
  );
}

export default App;
```

### imc/index.jsx

Este componente contém a lógica para calcular o IMC. Ele recebe `setResultadoIMC` como uma prop para atualizar o estado global do IMC.

```jsx
// ... (código omitido para brevidade)
function IMC({ setResultadoIMC }) {
  // ... (código omitido para brevidade)
  const calcularIMC = () => {
    // ... (código omitido para brevidade)
    setResultadoIMC(imcArredondado);
    return imcArredondado;
  };
  // ... (código omitido para brevidade)
}
export default IMC;
```
### Arredondamento do IMC

Um aspecto notável do código é a operação de arredondamento realizada durante o cálculo do IMC. O IMC é calculado como o peso dividido pelo quadrado da altura (em metros). No entanto, o valor resultante pode ser um número de ponto flutuante com muitas casas decimais. Para tornar o resultado mais legível e prático, o código arredonda o IMC para duas casas decimais.

A operação de arredondamento é feita no componente `imc/index.jsx` dentro da função `calcularIMC`:

```jsx
const calcularIMC = () => {
  const alturaMt = altura / 100; // Convertendo a altura para metros
  const imc = peso / (alturaMt * alturaMt); // Calculando o IMC
  let imcArredondado = Math.round(imc * Math.pow(10, 2)) / Math.pow(10, 2); // Arredondando o IMC para duas casas decimais
  setResultadoIMC(imcArredondado);
  return imcArredondado; // Retornando o valor arredondado do IMC
};
```

Neste trecho, a função `Math.round()` é usada para arredondar o número, e `Math.pow(10, 2)` é usado para especificar o número de casas decimais desejadas (neste caso, duas). O resultado arredondado é então atualizado no estado global através da função `setResultadoIMC`.

Este detalhe garante que o IMC apresentado ao usuário seja tanto preciso quanto fácil de entender, melhorando assim a experiência do usuário.

### tabela/index.jsx

Este componente exibe uma tabela de referência de IMC. Ele recebe `resultadoIMC` como uma prop e destaca a classificação do usuário com base nesse valor.

```jsx
// ... (código omitido para brevidade)
function Table({ resultadoIMC }) {
  // ... (código omitido para brevidade)
}
export default Table;
```

## Compartilhamento de Estado entre Componentes

O estado do IMC é gerenciado no componente `App` e é passado para os componentes `IMC` e `Table` através de props. Isso permite que ambos os componentes acessem e modifiquem o estado global do IMC, facilitando o compartilhamento de dados entre eles.
