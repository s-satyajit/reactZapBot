const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()


const configuration = new Configuration({
  apiKey: process.env.CHAT_GPT_KEY,
});
const openai = new OpenAIApi(configuration);




 exports.response = async (prompt) =>{
  return await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0.28,
        stop: ["You:"],
      })
    }