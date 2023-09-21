const { BOT_NAME, PREFIX } = require("../config");

exports.waitMessage = "Carregando dados...";

exports.menuMessage = () => {
  const date = new Date();

  return `╭━━⪩ 𝔹𝔼𝕄 𝕍𝕀ℕ𝔻𝕆! ⪨━━
▢
▢ • ${BOT_NAME}
▢ • Data: ${date.toLocaleDateString("pt-br")}
▢ • Hora: ${date.toLocaleTimeString("pt-br")}
▢ • Prefixo: ${PREFIX}
▢
╰━━─「🪐」─━━

╭━━⪩ 𝕄𝔼ℕ𝕌 ⪨━━
▢
▢ • ${PREFIX}cep
▢ • ${PREFIX}gpt
▢ • ${PREFIX}ping
▢ • ${PREFIX}sticker
▢ • ${PREFIX}key
▢
╰━━─「🚀」─━━

╭━━⪩ 𝕃𝕀ℕ𝕂𝕤 ⪨━━
▢
▢ • ⣿⣿⣿⣿𝒅𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓 𝒋𝒖𝒏𝒊𝒐𝒓 𝒘𝒑𝒑 𝒄𝒉𝒂𝒏𝒏𝒆𝒍⣿⣿⣿⣿
▢ • https://www.whatsapp.com/channel/0029Va4908y9xVJZkNibM93o
                                                                                                   
`

;
};
