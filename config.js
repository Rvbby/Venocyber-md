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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEhwSlRTZEtycXJiNUdkL0tKTWxManRHeUNJT3QvaTF6ZGFuNlRIRUtYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNERCbm05VitOUERTQi9LTS82QWprNk1mRjd2K2F4Vmg0SUV5SXd2bStpYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTW4rRElXaHNVUXVGM0Q0dXdZTEtmNTNIQjViOHVVMkNjNFgvcWpVa0ZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJibURZZ1NjRVVadUt4S0J6NmJRTUpIS3BpanNwWW5oR3c1NTRUSkNSMmowPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1KM1FOSDBmNzYzV2sxQU52a0RMSVo5alBZZmtuTmQ2U0NhYjdIcGZFMEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ind2eFpzblg1MG5CK1hEZjFJdFB1Q0d3Y0RWazQydjBBdk1DOFNMU3dVQTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEhNd0l6cDlqcUJnMUpRVFpUR2dNSi9yRWthOEtVL1ZpMG1OSW4xZW1HWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2FuSHBZYkNjNTY4MDlJNStWYTcyWnhpQ0E5R2taMENNU1haYVJzZDJWOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImF4cXkvTHZxNTMzQkVjbGdJektIRG1VRzNWZ2FtbzRZS2grVkNvaTdaWFZDYldLVDFMdHFGRnBVWWl2MDZXcTNpYmFUWXR3bW9HNzh5cTBMUlRwNER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODcsImFkdlNlY3JldEtleSI6ImRhTUYvaWVkQ1R2WUVydmh1RXh5K0tMZGVPSlA1NVEvZWlnWGl2Qk4yYXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik1XenFyWnZmVHl1WkhHeWYwUUpTX2ciLCJwaG9uZUlkIjoiOTE4ZTU4NmEtYWU3ZC00MDYzLWE3YzItYjVmYjQzMmJjYjE0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilc3eHZjTWFvcjZrR3lQakZqTU1iVlBSdXpjVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTDgvdmwrdHJXa3dkaUNaamdPQk52RXRlNW89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWFhZOFlLVzIiLCJtZSI6eyJpZCI6IjI1NTc1NjUwMTgxOToyMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNSUNLSUUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05QRi9LY0NFS0RGdUxrR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IitMY0FQa1pUbndRZXBzSEFIVWNPSkhJU3hHSXhRQ1NVVU9kTTRhTWw0QWs9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjlRL2xwOCs4NG01VUg1VGtWU1ltVXBXTEo0enNtQ3gzY2szeVBOWUZ2WEpMYzhzVEk4SGVtaTBqOGpYUGFkZi9xM0M5NVJuNk9vUERxL3Y0SWxNc0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJCQzNyQ2xodkZsaDF2WW54a1JzdWZFcmdRTmx2NkhoUHk2ZTVUamVqczdVUVQzK242UjlDQ1piN0ZhUnlUaHRaT1B4bGZrQTgwNDRnMlJCQ0ZzTlNCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTc1NjUwMTgxOToyMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmaTNBRDVHVTU4RUhxYkJ3QjFIRGlSeUVzUmlNVUFrbEZEblRPR2pKZUFKIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxMDc2NzgyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU52NyJ9"
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
