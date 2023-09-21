const fs = require('fs');
const { PREFIX } = require('../../config');
const path = require('path');

const dataFolderPath = path.join(__dirname, '../../database');
const dataFilename = path.join(dataFolderPath, 'db.json');

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
    console.log('Dados atualizados com sucesso no banco.');
  } catch (error) {
    console.error('Erro ao escrever no banco:', error);
  }
}

module.exports = {
  name: 'key',
  description: 'gerar uma Steam key',
  commands: ['key'],
  usage: `${PREFIX}key`,
  handle: async ({ sendReply, sendSuccessReply, sendErrorReply}) => {
    // Lê os dados do arquivo
    const data = readDataFromFile(dataFilename);

    if (!data.keys || data.keys.length === 0) {
      return sendErrorReply('Não há keys no banco de dados.');
    }

    // Escolhe uma chave aleatória
    const randomIndex = Math.floor(Math.random() * data.keys.length);
    const randomKey = data.keys.splice(randomIndex, 1)[0];

    // Escreve os dados atualizados no arquivo
    writeDataToFile(dataFilename, data);

    sendSuccessReply(randomKey);
  },
};
