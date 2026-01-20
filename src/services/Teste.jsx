import { useEffect } from "react";
import viaCep from "./viaCep";
import ConsultaCep from "../components/ConsultaCep";

function Teste() {

    useEffect(() => {
        viaCep("87250000")
    }, []);


    return (
        <div>
            <ConsultaCep />
        </div>
        
    )
}

export default Teste;