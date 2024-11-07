//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "255756501819";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0pTdU9VeWRXbkx0S3lFMENvazRlb0M2L3hYUVQxTzNHQXg1dXd1SzVVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUp3cWZxMFlEQW5IaG9tWTFoSVBKQ2pJb3NWc0E0MWtLOWVCRkU4bExRVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTVNnYmxUTTZkTHc0WHcwRWZzbkJmUG1UY2tLYkIwMS9lOU1LeFQyRFdnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJINDRxMU5DdnNNcC9YZStGaG9TcjNFTG9MSFkrSXJSSkNaWTFFOXQrbFhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJNb0Q5TXNwSERkZTVhbXFxY3BtR3VWZ3dMQlFpakRCcUJGYUtqYTJ4VWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxGaHJrVTZXZjJzYnc3WjdHN2NwVlltV1RZQ2dFNEJuNkhNQmwrYlBNalE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUNVKzA3Nk5tUGFtUWZ2WFAwSFlqNk9PYUVKNzVFNVNGMjN1eE9wZ0Vtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3JFTVNUVGt5T0ZaNlBUbVV4VlFVM2N5TWc5Z1A0Vytkb080NlYraHFEbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpMdUU3amJ4WWRrdmhIY0R1NHFkbFFDTXE4LythWElBcWxqeFl6UklQVWxKdlp3L0hjTFIvZG9hV3ZGTDlHUEx5cE12SUVtREdpM0RrclNnRjNXTkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzQsImFkdlNlY3JldEtleSI6InVPMFFpbG96UStlL0orM3FqOVR3SmkrbHlPM21QRm1WK3h0UG9zVjZ4Wlk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IktKeEF3aVp4VHF1eWhGamRjdzMtQXciLCJwaG9uZUlkIjoiMTg0ZmYwNmYtYWQzOC00YzczLThmYTQtMWRjOTRmMTlkNjZjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlB6VEVFWGtUL09VNWU2M1N0YmYwMUM0NzBPdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPZ3BVSGV0MmVlVWJJVkVhWHpUSFlCMFBURGc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSEFMUjlMWjkiLCJtZSI6eyJpZCI6IjI1NTc1NjUwMTgxOToxOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNSUNLSUUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05MRi9LY0NFT0RPczdrR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IitMY0FQa1pUbndRZXBzSEFIVWNPSkhJU3hHSXhRQ1NVVU9kTTRhTWw0QWs9IiwiYWNjb3VudFNpZ25hdHVyZSI6InhlNVpZdmE0TEUzNDFyNXV5bmUwTHJRb3N4SVVMSUtyMWpsSC9FdW0rVDRvOWVaTXNnYnE4dTFrVXJ3em91VVJQeER0TDVoaUx1WVhST21XVHJhaUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHR2FGWDlOQWtiRDdhSkx5aldnZW9GcTJFamhFejlCNmhTLzBmeVpjZzY2T2d2aGE0anVNbDdXU3pBL0JIN2haa1FWcHVIclRFQ3VNT0xYSUZMWlhDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTc1NjUwMTgxOToxOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmaTNBRDVHVTU4RUhxYkJ3QjFIRGlSeUVzUmlNVUFrbEZEblRPR2pKZUFKIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwOTk2MDc4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU52NyJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
