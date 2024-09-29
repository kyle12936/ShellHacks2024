require('dotenv').config();
const express = require('express');
const routeRoutes = require('./routes/routeRoutes');

const app = express();
app.use(express.json());

// Use routes
app.use('/api', routeRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const axios = require('axios');

// const OPENAI_API_KEY = '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'; // Replace with your OpenAI API key

// async function testOpenAI() {
// const url = 'https://api.openai.com/v1/chat/completions';
// const data = {
// model: 'gpt-3.5-turbo',
// messages: [{ role: 'user', content: 'Hello, world!' }]
// };

// try {
// const response = await axios.post(url, data, {
// headers: {
// 'Authorization': `Bearer ${OPENAI_API_KEY}`,
// 'Content-Type': 'application/json'
// }
// });
// console.log('Response from OpenAI:', response.data);
// } catch (error) {
// console.error('Error response from OpenAI:', error.response.data);
// }
// }

// testOpenAI();