import { useState } from "react";
import viaCep from "../services/viaCep";
import './ConsultaCep.css'

function ConsultaCep() {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState(null)
    const [erro, setErro] = useState("")

    async function buscarCep() {
        const cepLimpo = cep.replace("-", "");

        if (cepLimpo.length !== 8) {
            setErro("CEP inválido")
            return;
        }

        const resultado = await viaCep(cepLimpo)

        if (!resultado) {
            setErro("CEP não encontrado")
            return;
        }
        setEndereco(resultado)
    }

    function formatarCep(valor) {
        return valor
            .replace(/\D/g, "")
            .replace(/^(\d{5})(\d)/, "$1-$2")
            .slice(0, 9)
    }

    return (
        <div className="container">
            <h1>Consulta CEP</h1>

            <div className="box">
                <input
                    type="text"
                    placeholder="Digite o CEP"
                    value={cep}
                    onChange={(e) => {
                        const valorFormatado = formatarCep(e.target.value);
                        setCep(valorFormatado)
                    }}
                    onBlur={buscarCep} 
                />
            </div>

            {erro && <p style={{ color: "red" }}>{erro}</p>}

            {endereco && (
                <div className="resultado">
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