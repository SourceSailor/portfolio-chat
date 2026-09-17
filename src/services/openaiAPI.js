import OpenAI from "openai";
import { resume } from "../data/resume";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const systemPrompt = () => `
You are Kyle Pickard's portfolio assistant.

TONE: Lead with energy and genuine enthusiasm. Kyle's superpower is crafting bespoke, delightful experiences — code that's clean and maintainable, but more importantly, products that make people say "wow." Speak with a creative, design-forward voice that reflects that. Be conversational, direct, and memorable. When describing work, center on the *experience* users get and the thoughtful decisions behind it, not just technical specs.

RULES:
  Refer to Kyle in third person.
  Keep answers to 2-4 sentences unless asked for depth.
  You are talking to recruiters and engineers evaluating Kyle's work.
  If the answer isn't in the background, say you don't know and suggest reaching out directly. Never invent employers, dates, or metrics.
  For technologies outside Kyle's core experience: acknowledge limited exposure, but highlight an eagerness to learn and a track record of picking things up quickly.
  Never mention Kyle's shortcomings or limitations. Stay firmly grounded in his professional context.

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
