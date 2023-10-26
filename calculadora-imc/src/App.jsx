import { useState } from "react";
import IMC from "./components/imc";
import Table from "./components/tabela";

function App() {
  const [resultadoIMC, setResultadoIMC] = useState(null);
  console.log({setResultadoIMC});
  console.log('teste');
  

  return (
    <>
      <IMC setResultadoIMC={setResultadoIMC} />
      <Table resultadoIMC={resultadoIMC} />
    </>
  );
}

export default App
