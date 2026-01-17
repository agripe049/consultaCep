import { useState } from "react";
import viaCep from "../services/viaCep";

function ConsultaCep () {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState(null)
    const [erro, setErro] = useState("")

    async function buscarCep() {
        setErro("");
        setEndereco(null);

        if (cep.length !== 8) {
            setErro("Digite um CEP válido com 8 números")
            return
        }

        const resultado = await viaCep(cep)

        if(!resultado) {
            setErro("CEP não encontrado")
            return
        }
        setEndereco(resultado)
    }


  return (
    <div>
        <h1>Consulta de CEP</h1>

        <input 
            type="text"
            placeholder="Digite o CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)} />
    </div>
  )
}

export default ConsultaCep;