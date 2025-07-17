import axios from "axios";

export async function getTaskSuggestions(pastTasks) {
  const messages = [
    {
      role: "user",
      content: `Here is my task history: ${pastTasks
        .map((t) => t.text)
        .join(", ")}. Suggest new tasks I should do.`,
    },
  ];

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
    }
  );

  return response.data.choices[0].message.content;
}
