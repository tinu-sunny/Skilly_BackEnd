const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.chat = async (req, res) => {
  try {
    const { message } = req.body;
    console.log(message);
    

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: message }
      ],
    });
console.log(response);

    res.status(200).json({
      reply: response.choices[0].message.content,
    });
    

  } catch (error) {
    console.error(error);
    res.status(500).json({
      reply: "AI response failedd",
    });
  }
};
