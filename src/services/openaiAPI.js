import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function sendMessage(message, { signal } = {}) {
  try {
    const stream = await client.responses.create(
      {
        model: "gpt-4o",
        input: [{ role: "user", content: message }],
        instructions: "Talk like a pirate",
      },
      { signal },
    );

    return stream;
  } catch (err) {
    console.log("Send Message API Error: ", { err });
    throw err;
  }
}
