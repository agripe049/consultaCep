import { useEffect } from "react";
import viaCep from "./viaCep";
import ConsultaCep from "../components/ConsultaCep";

function Teste() {

    useEffect(() => {
        viaCep("30130010")
    }, []); 


    return (
        <div>
            <ConsultaCep />
        </div>
        
    )
}

export default Teste;