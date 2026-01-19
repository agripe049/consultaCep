import { useEffect } from "react";
import viaCep from "./viaCep";
import ConsultaCep from "../components/ConsultaCep";

function Teste() {

    useEffect(() => {
        viaCep("87250000")
    }, []);


    return (
        <div>
            <h1>Consulta CEP</h1>
            <ConsultaCep />
        </div>
        
    )
}

export default Teste;