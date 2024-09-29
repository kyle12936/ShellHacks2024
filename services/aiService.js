const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getAIPreferences(userPreferences) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a helpful travel planning assistant.' },
        { role: 'user', content: `Provide suggested attractions for someone interested in: ${userPreferences}.` },
      ],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error with AI generation:', error);
    throw new Error('AI generation failed.');
  }
}

export { getAIPreferences };



// require('dotenv').config();
// const { OpenAIApi, Configuration } = require('openai');

// // Create a configuration instance
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// // Create an instance of OpenAIApi with the configuration
// const openai = new OpenAIApi(configuration);

// // Function to use OpenAI API
// async function getAIPreferences(userPreferences) {
//   try {
//     const response = await openai.createChatCompletion({
//       model: 'gpt-3.5-turbo', // or 'gpt-4' if available
//       messages: [
//         { role: 'system', content: 'You are a helpful travel planning assistant.' },
//         { role: 'user', content: `Provide suggested attractions for someone interested in: ${userPreferences}.` },
//       ],
//     });

//     return response.data.choices[0].message.content;
//   } catch (error) {
//     console.error('Error with AI generation:', error.response ? error.response.data : error.message);
//     throw new Error('AI generation failed.');
//   }
// }

// module.exports = { getAIPreferences };
