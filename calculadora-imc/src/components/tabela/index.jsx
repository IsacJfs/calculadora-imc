import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './tabela.css'

function Table({ resultadoIMC }) {
    let valorIMC = resultadoIMC
    console.log('teste', resultadoIMC)
    return (
        <>
            <div className='container d-flex justify-content-center'>
                <div className='col-lg-4 col-md-6'>
                    < div className='row justify-content-center mt-5' >
                        <h2 className='text-center' id='tituloTabela'>Tabela de Referência de IMC</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>IMC</th>
                                    <th scope='col'>Classificação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ backgroundColor: valorIMC > 0 && valorIMC < 18.5 ? '#F2D022' : 'transparent' }}>
                                    <td>Menos do que 18,5</td>
                                    <td>Abaixo do peso</td>
                                </tr>
                                <tr style={{ backgroundColor: valorIMC >= 18.5 && valorIMC < 25 ? '#01F508' : 'transparent' }}>
                                    <td>Entre 18,5 e 24,9</td>
                                    <td>Peso normal</td>
                                </tr>
                                <tr style={{ backgroundColor: valorIMC >= 25 && valorIMC < 30 ? '#F2D022' : 'transparent' }}>
                                    <td>Entre 25 e 29,9</td>
                                    <td>Sobrepeso</td>
                                </tr>
                                <tr style={{ backgroundColor: valorIMC >= 30 && valorIMC < 35 ? '#F29F05' : 'transparent' }}>
                                    <td>Entre 30 e 34,9</td>
                                    <td>Obesidade Grau I</td>
                                </tr>
                                <tr style={{ backgroundColor: valorIMC >= 35 && valorIMC < 40 ? '#F27405' : 'transparent' }}>
                                    <td>Entre 35 e 39,9</td>
                                    <td>Obesidade Grau II</td>
                                </tr>
                                <tr style={{ backgroundColor: valorIMC >= 40 ? '#BF3604' : 'transparent' }}>
                                    <td>Mais do que 40</td>
                                    <td>Obesidade Grau III</td>
                                </tr>
                            </tbody>
                        </table>
                    </div >
                </div>
            </div>
            <div className='container d-flex justify-content-center mt-5'>
                <div className='col-lg-4 col-md-6'>
                    <p className='text-center'>
                        O índice de massa corporal (IMC) é uma medida internacional usada para calcular se uma pessoa está no peso ideal. Desenvolvido pelo polímata Lambert Quételet no fim do século XIX, trata-se de um método fácil e rápido para a avaliação do nível de gordura de cada pessoa, sendo, por isso, um preditor internacional de obesidade adotado pela Organização Mundial da Saúde (OMS).
                    </p>
                </div>
            </div>
        </>
    )
}

export default Table