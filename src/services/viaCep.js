async function viaCep(cep) {

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json()
        console.log(data)

        if (data.erro) {
            throw new Error('CEP não encontrado')
        } 

        return data
    } catch (error) {
        console.error(error.message)
        return null
    }
}


export default viaCep;