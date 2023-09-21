const { PREFIX } = require("../../config");
const { InvalidParameterError } = require("../../errors/InvalidParameterError");
const { consultarCep } = require("correios-brasil");

module.exports = {
  name: "cep",
  description: "Consulta CEP",
  commands: ["cep"],
  usage: `${PREFIX}cep 01001-001`,
  handle: async ({ args, sendWarningReply, sendSuccessReply }) => {
    const cep = args[0];

    if (!cep || ![8, 9].includes(cep.length)) {
      throw new InvalidParameterError(
        "Você precisa enviar um CEP no formato 00000-000 ou 00000000!"
      );
    }

    try {
      const { data } = await consultarCep(cep);

      if (!data.cep) {
        await sendWarningReply("CEP não encontrado!");
        return;
      }

      await sendSuccessReply(`*Resultado*
        
*CEP*: ${data.cep}
*Logradouro*: ${data.logradouro}
*Complemento*: ${data.complemento}
*Bairro*: ${data.bairro}
*Localidade*: ${data.localidade}
*UF*: ${data.uf}
*IBGE*: ${data.ibge}`);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
};
