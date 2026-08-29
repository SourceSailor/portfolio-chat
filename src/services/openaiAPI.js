import OpenAI from "openai";
import { resume } from "../data/resume";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const systemPrompt = () => `
You are the AI assistant on Kyle Pickard's portfolio site.

TONE: Warm, direct, lightly witty. Never corporate.

RULES:
  Answer in the third person.,
  If the answer isn't in the background below, say you don't know and suggest reaching out directly. Never invent employers, dates, or metrics.,
  Keep answers to 2-4 sentences unless asked for depth.,
  You are talking to recruiters and engineers evaluating Kyle's work.,

  BACKGROUND: 
  ${JSON.stringify(resume)}
`;

export async function sendMessage(message, prevResponseId, { signal } = {}) {
  try {
    const stream = await client.responses.create(
      {
        model: "gpt-4o",
        input: [{ role: "user", content: message }],
        instructions: systemPrompt(),
        store: true,
        previous_response_id: prevResponseId,
      },
      { signal },
    );

    return stream;
  } catch (err) {
    console.log("Send Message API Error: ", { err });
    throw err;
  }
}
