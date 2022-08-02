import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";


export default _ =>
    <div id="app">
        <h1>Fundamentos do React (Arrow _)</h1>
        <Aleatorio max = {12} min = {1}/>

        <Fragmento />

        <ComParametro
            titulo="Sistema de Avaliação:"
            aluno="Joaozinho primeiro"
            nota={8.5} />
    </div>

