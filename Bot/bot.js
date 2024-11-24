const { Telegraf } = require("telegraf");
const TOKEN = "7963867337:AAFmtuVQC3PZ4mpFs1XLX-eFFvV5XalB894";
const bot = new Telegraf(TOKEN);

const web_link = "https://relaxed-raindrop-cafc8f.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome to Roamgh Services! 🌟\n\nWe offer professional business consulting and growth solutions. How can we help you today?", {
    reply_markup: {
      keyboard: [
        [{ text: "View Our Services", web_app: { url: web_link } }],
        [{ text: "Contact Support" }]
      ],
    },
  })
);

bot.command('newlead', async (ctx) => {
  try {
    // Extract lead information from command
    const leadData = {
      full_name: ctx.message.text.split(' ')[1],
      email: ctx.message.text.split(' ')[2],
      phone: ctx.message.text.split(' ')[3] || null,
      company: ctx.message.text.split(' ')[4] || null,
      interest_level: 'medium',
      source: 'telegram',
      notes: 'Lead created via Telegram bot'
    };

    const result = await db.createLead(leadData);
    ctx.reply(`New lead created: ${leadData.full_name}`);
  } catch (error) {
    ctx.reply('Error creating lead. Please try again.');
    console.error(error);
  }
});

bot.command('updatelead', async (ctx) => {
  try {
    const [leadId, status] = ctx.message.text.split(' ').slice(1);
    const result = await db.updateLeadStatus(leadId, status);
    ctx.reply(`Lead status updated to: ${status}`);
  } catch (error) {
    ctx.reply('Error updating lead status. Please try again.');
    console.error(error);
  }
});

bot.command('addinteraction', async (ctx) => {
  try {
    const [leadId, type, ...detailsArray] = ctx.message.text.split(' ').slice(1);
    const details = detailsArray.join(' ');
    const result = await db.addLeadInteraction(leadId, type, details);
    ctx.reply('Interaction added successfully');
  } catch (error) {
    ctx.reply('Error adding interaction. Please try again.');
    console.error(error);
  }
});

bot.command('leadhelp', (ctx) => {
  const helpText = `
Lead Management Commands:
/newlead <name> <email> <phone> <company> - Create a new lead
/updatelead <leadId> <status> - Update lead status
/addinteraction <leadId> <type> <details> - Add new interaction with lead
  `;
  ctx.reply(helpText);
});

bot.launch();
