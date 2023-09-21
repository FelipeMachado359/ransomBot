const fs = require('fs');
const { PREFIX } = require('../../config');
const path = require('path');

const dataFolderPath = path.join(__dirname, '../../database');
const dataFilename = path.join(dataFolderPath, 'db.json');

if (!fs.existsSync(dataFolderPath)) {
  fs.mkdirSync(dataFolderPath);
}

function readDataFromFile(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error);
    return {};
  }
}

function writeDataToFile(filename, data) {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filename, jsonData);
    console.log('Chaves escritas com sucesso no banco.');
  } catch (error) {
    console.error('Erro ao escrever no banco:', error);
  }
}

module.exports = {
  name: 'newKey',
  description: 'Cadastrar keys no banco de dados',
  commands: ['newKey'],
  usage: `${PREFIX}newKey <string1,string2,...>`,
  handle: async ({ sendReply, args, sendSuccessReply, sendErrorReply }) => {
    if (args.length !== 1) {
      return sendReply('Por favor, forneça uma única string contendo as chaves separadas por vírgulas.');
    }

    const keysToAdd = args[0].split(',');

    if (keysToAdd.length === 0) {
      return sendReply('A string de chaves está vazia.');
    }

    const data = readDataFromFile(dataFilename);

    try {
      data.keys = data.keys || [];
      data.keys.push(...keysToAdd);

      writeDataToFile(dataFilename, data);

      sendSuccessReply(`${keysToAdd.length} Chaves cadastradas com sucesso.`);
    } catch (error) {
      console.error(error);
      sendErrorReply('Ocorreu um erro ao cadastrar no banco de dados.');
    }
  },
};
