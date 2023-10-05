# API para consulta de CEP

# Índice

- [Título e Imagem de capa](#Título-e-Imagem-de-capa)
- [Badges](#badges)
- [Índice](#índice)
- [Descrição do Projeto](#descrição-do-projeto)
- [Status do Projeto](#status-do-Projeto)
- [Funcionalidades e Demonstração da Aplicação](#funcionalidades-e-demonstração-da-aplicação)
- [Acesso ao Projeto](#acesso-ao-projeto)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Pessoas Contribuidoras](#pessoas-contribuidoras)
- [Pessoas Desenvolvedoras do Projeto](#pessoas-desenvolvedoras)
- [Licença](#licença)
- [Conclusão](#conclusão)

# descrição do projeto

Uma api para consultar cep, onde tem uma única rota responsável por retornar o detalhamento do cep.

# 📁 Acesso ao projeto

Você pode [acessar o código fonte do projeto](#badges) ou [baixá-lo](#badges)

# 🛠️ Abrir e rodar o projeto

Após baixar o projeto, você pode abrir com o VSCode. Para isso, na tela inicial clique em:

- Arquivo, depois em abrir pasta.
- Procure o local onde o projeto está e o selecione (Caso o projeto seja baixado via zip, é necessário extraí-lo antes de procurá-lo)
- Por fim clique em OK
- Após o projeto carregar no VSCode, rode o comando `npm install`
- Após finalizar a instalação dos pacotes, rode o comando `npm run dev` para a execução do projeto;

## Rotas

`localhost://3000:enderecos/:cep`

### Parâmetros

`:cep -> deve ser enviado o cep desejável`

### Respostas

- Caso o que for informado no parâmetro cep não tiver a quantidade certa de um cep (8 dígitos) irá retornar o status 400 e a seguinte mensagem: `{
	"mensagem": "Request failed with status code 400"
}`

- Caso o cep informado não exista irá retornar o status 404 e a seguinte mensagem:
  `{
	"mensagem": "Cep inválido"
}`

- Dando tudo certo, a rota retorna o status 200 e um objeto como esse:

```
{
  "cep": "03220-300",
  "logradouro": "Avenida do Oratório",
  "complemento": "de 5000 ao fim - lado par",
  "bairro": "Jardim Ângela (Zona Leste)",
  "localidade": "São Paulo",
  "uf": "SP",
  "ibge": "3550308",
  "gia": "1004",
  "ddd": "11",
  "siafi": "7107"
}
```

- Além de retornar um objeto com o detalhamento do cep,
  esse detalhamento é salvo no arquivo `enderecos.json`, **caso esse cep já não tenha sido consultado antes (ou seja, não terá repetição ao salvar no arquivo json)**

### Exemplos

# ✅ Técnicas e tecnologias utilizadas

- Node.js
- express
- utils-playground
