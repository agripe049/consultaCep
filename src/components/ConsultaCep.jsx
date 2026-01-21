import { useState } from "react";
import viaCep from "../services/viaCep";
import './ConsultaCep.css'

function ConsultaCep() {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState(null)
    const [erro, setErro] = useState("")

    async function buscarCep(valorCep) {
        setErro('');
        setEndereco(null);

        const resultado = await viaCep(valorCep)

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

    function handleChange(e) {
        const valorFormatado = formatarCep(e.target.value);
        setCep(valorFormatado);

        const cepLimpo = valorFormatado.replace('-', '');

        if (cepLimpo.length === 8) {
            buscarCep(cepLimpo)
        }
    }

    return (
        <div className="container">
            <h1>Consulta CEP</h1>

            <div className="box">
                <input
                    type="text"
                    placeholder="Digite o CEP"
                    value={cep}
                    onChange={handleChange}
                />
            </div>

            {erro && <p style={{ color: "red" }}>{erro}</p>}

            {endereco && (
                <div className="resultado">
                    <p><strong>CEP:</strong> {endereco.cep}</p>
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