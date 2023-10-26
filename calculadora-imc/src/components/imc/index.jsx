import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function IMC({ setResultadoIMC }) {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  
  const handlePesoChange = (e) => setPeso(e.target.value);
  const handleAlturaChange = (e) => setAltura(e.target.value);
  
  const calcularIMC = () => {
    const alturaMt = altura / 100;
    const imc = peso / (alturaMt * alturaMt);
    let imcArredondado = Math.round(imc * Math.pow(10, 2)) / Math.pow(10, 2);
    setResultadoIMC(imcArredondado);
    return imcArredondado;
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className='col-lg-4 col-md-6 mt-5'>
        <h1 className='text-center'>Calculadora de IMC</h1>
        <form className='row justify-content-center'>
          <div className='row g-1'>
            <label className='form-label'>Peso (kg): </label>
            <input className='form-control' required type="number" id="peso" value={peso} onChange={handlePesoChange} />
          </div>
          <div className='row g-1'>
            <label className='form-label'>Altura (cm): </label>
            <input className='form-control' required type="number" id="altura" value={altura} onChange={handleAlturaChange} />
          </div>
          <div className='row mt-4 mb-5 justify-content-center'>
            <button className='btn btn-primary col-6' type='button' onClick={() => calcularIMC()}>Calcular</button>
          </div>
        </form>
        <div className='row justify-content-center'>
          <div className='col'>
            <h2 className='text-center d2'>Resultado</h2>
            <p className='text-center h2'>= {calcularIMC() > 0 && calcularIMC()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IMC
