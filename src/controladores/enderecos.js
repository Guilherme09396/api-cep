const { buscarEndereco } = require("utils-playground");
const fs = require("fs/promises")

const getEndereco = async (req, res) => {
    const { cep } = req.params;
    const pathFile = "./src/enderecos.json";

    try {
        const endereco = await buscarEndereco(cep);
        if (endereco.erro) return res.status(404).json({ mensagem: "Cep inválido" })

        let enderecosSalvos = await fs.readFile(pathFile);
        enderecosSalvos = JSON.parse(enderecosSalvos)

        const cepAntesHifen = cep.slice(0, -3);
        const cepDepoisHifen = cep.slice(-3);
        let enderecoExiste = enderecosSalvos.find(value => value.cep === `${cepAntesHifen}-${cepDepoisHifen}`)
        if (!enderecoExiste) {
            enderecosSalvos.push(endereco);
            enderecosSalvos = JSON.stringify(enderecosSalvos);
            await fs.writeFile(pathFile, enderecosSalvos);
        }

        return res.json(endereco)

    } catch (error) {
        return res.status(400).json({ mensagem: error.message })
    }

}

module.exports = {
    getEndereco
};