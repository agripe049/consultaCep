import { useEffect } from "react";
import viaCep from "./viaCep";

function Teste() {

    useEffect(() => {
        viaCep("87250000")
    }, []);


    return (
        <div>Teste</div>
    )
}

export default Teste;