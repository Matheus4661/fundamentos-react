import './App.css'
import React from "react";

import Primeiro from './componentes/basicos/Primeiro';
import ComParametro from './componentes/basicos/Comparametro';
import Aleatorio from './componentes/basicos/Aleatorio';
import Fragmento from "./componentes/basicos/fragmento";
import Card from './componentes/layout/Card';

export default () =>(
        <div className="App">
            <h1>Fundamentos React</h1>
            
            <div className="Cards">
                <Card titulo="Aleatório" color="#080">
                <Aleatorio min={1} max= {50} />
                </Card>
                <Card titulo="Fragmento">
                    <Fragmento/>
                </Card>
                <Card titulo="Com Parâmetro">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Pedro"nota={9.3} 
                    />
                </Card>
                <Card titulo="#1">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    );
