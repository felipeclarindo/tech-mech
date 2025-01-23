🌍 [Leia em Português](README.pt-BR.md)

# Tech Mech

Este é um projeto web de uma oficina virtual fictícia que procura melhorar a experiência do cliente com o seu veículo, melhorando o tempo despendido e trazendo uma redução no tempo perdido. O site é uma extensão do Porto e foi criado usando `Java` para o desenvolvimento do api e para o Front-end foi utilizado `Next.js` e `TypeScript`. Projeto integrado com um `Assistente Virtual` (Criado pela IBM) capaz de realizar pré-diagnósticos, pré-orçamentos e agendamentos.

## Funcionalidades

- Páginas de Login e Registro de Usuário
- Página inicial que apresenta os serviços da Oficina.
- Página "Sobre nós" que detalha a equipa e a história da oficina.
- Assistente Virtual para auxiliar no diagnóstico e agendamento.
  Páginas adicionais, como uma área de participante e uma página de erro personalizada.

## Tecnologias utilizadas

- `Next.js` - Framework de React
- `TypeScript` - Superset de JavaSCript
- `IBM Watson Assistant` - Integração do Assistente Virtual
- `Tailwind` - Estilização
- `FontAwesome` - Ícones
- `Git` - Controle de Versão
- `Java`- Desenvolvimento da API.
- `Maven` - Ferramenta de automação de build e gerenciamento de dependências para a api.

## Requisitos para instalação

Certifique-se de ter o `Java Development Kit`, `node`, `npm` instalado em sua máquina para executar o projeto.

## Passos para instalação e para execução da API

1. Clone o repositório da api:

```bash
git clone https://github.com/felipeclarindo/tech-mech-api.git
```

2. Entre no diretório:

```bash
cd tech-mech-api
```

3. Configure suas credenciais do banco de dados oracle em `src/main/java/resources/application.properties`.

4. Execute no seu banco de dados oracle o sql localizado em `sql/table/clients.sql`.

5. Execute o arquivo `Main.java`

## Passos para instalação e execução do Front-end

4. Clone o repositório:

```bash
git clone https://github.com/felipeclarindo/tech-mech.git
```

5. Enter the directorate:

```bash
cd tech-mech
```

6. Instale as dependências:

```bash
npm install
```

7. Execute o projeto (Verifique se a api já esteja sendo executada):

```bash
npm run dev
```

8. Click no link disponibilizado pelo terminal, normalmente:

- `http://localhost:3000`

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Autores

- [Victor Augusto](https://github.com/victoraugustogfavaro)
- [Felipe Clarindo](https://github.com/felipeclarindo)
- [Jennie Suzuki](https://github.com/jenniesuzuki)

## Licença

Este projeto está licenciado sob a [GNU Affero License](https://www.gnu.org/licenses/agpl-3.0.html).
