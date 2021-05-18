const { Client, Collection } = require("discord.js");
const client = (global.client = new Client());
const settings = require("./src/configs/settings.json");
client.commands = new Collection();
client.aliases = new Collection();
client.invites = new Collection();
client.cooldown = new Map();
client.ranks = [
  { role: "844139872436092952", coin: 100 },
  { role: "844139872436092953", coin: 250 },
  { role: "844139872436092954", coin: 500 },
  { role: "844139872436092955", coin: 1000 },

  { role: "844139872444612629", coin: 1500 },
  { role: "844139872444612630", coin: 2000 },
  { role: "844139872444612631", coin: 2500 },
  { role: "844139872444612632", coin: 3000 },

  { role: "844139872452214819", coin: 4000 },
  { role: "844139872452214820", coin: 4750 },
  { role: "844139872452214821", coin: 5500 },
  { role: "844139872452214822", coin: 6250 },

  { role: "844139872473579521", coin: 7000 },
  { role: "844139872473579522", coin: 8000 },
  { role: "844139872473579523", coin: 9000 },
  { role: "844139872473579524", coin: 10000 },
  { role: "844139872473579525", coin: 15000 },

  { role: "844139872481837079", coin: 17500 },
  { role: "844139872481837080", coin: 20000 },
  { role: "844139872481837082", coin: 22500 },
  { role: "844139872481837083", coin: 25000 }
  ];
require("./src/handlers/commandHandler");
require("./src/handlers/eventHandler");
require("./src/handlers/mongoHandler");
require("./src/handlers/functionHandler")(client);

client
  .login(settings.token)
  .then(() => console.log("[BOT] Bot connected!"))
  .catch(() => console.log("[BOT] Bot can't connected!"));
