import { useState } from "react";
import viaCep from "../services/viaCep";

function ConsultaCep() {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState(null)
    const [erro, setErro] = useState("")

    async function buscarCep() {
        if(!cep) return
        setErro("");
        setEndereco(null);

        if (cep.length !== 8) {
            setErro("Digite um CEP válido com 8 números")
            return
        }

        const resultado = await viaCep(cep)

        if (!resultado) {
            setErro("CEP não encontrado")
            return
        }
        setEndereco(resultado)
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Digite o CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                onBlur={buscarCep} />

            {erro && <p style={{ color: "red" }}>{erro}</p>}

            {endereco && (
                <div>
                    <p><strong>Rua:</strong> {endereco.logradouro}</p>
                    <p><strong>Bairro:</strong> {endereco.bairro}</p>
                    <p><strong>Cidade:</strong> {endereco.localidade}</p>
                    <p><strong>Estado:</strong> {endereco.estado}</p>
                </div>
            )}
        </div>
    )
}

export default ConsultaCep;