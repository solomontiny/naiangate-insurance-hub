import { createServerFn } from "@tanstack/react-start";

type ChatMessage = { role: "user" | "assistant" | "system"; content: string };

const SYSTEM_PROMPT = `You are Naingate Assistant, a friendly and professional virtual advisor for Naingate Insurance Brokers, a Nigerian insurance brokerage firm headquartered at 5a Adekunle Lawal Street, off Oba Adeyinka Oyekan Road, Ikoyi, Lagos, with offices in Ibadan and Abuja.

You help website visitors with:
- Information about insurance products: Motor, Property, Engineering, Marine, Aviation, Oil & Gas, Life, Health, Travel, and Liability insurance.
- Guidance on filing claims and what documents are needed.
- Sponsorship inquiries and partnership questions.
- Office locations, contact details, and general questions about Naingate.

Style:
- Warm, concise, and clear. Use short paragraphs and bullet points when useful.
- Never invent specific premium prices — instead, offer to connect the user with a human advisor and point them to the Contact page or to email info@naingate.com.
- If asked something outside insurance/Naingate, gently steer back.
- Always end complex answers by offering a next step (get a quote, file a claim, contact an advisor).`;

export const chatWithAssistant = createServerFn({ method: "POST" })
  .inputValidator((data: { messages: ChatMessage[] }) => data)
  .handler(async ({ data }) => {
    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...data.messages.slice(-20),
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return { reply: "I'm getting a lot of requests right now. Please try again in a moment." };
      }
      if (response.status === 402) {
        return { reply: "The assistant is temporarily unavailable. Please reach us at info@naingate.com." };
      }
      const text = await response.text();
      console.error("AI gateway error", response.status, text);
      return { reply: "Sorry, I ran into an issue. Please try again or contact us at info@naingate.com." };
    }

    const json = await response.json();
    const reply: string =
      json?.choices?.[0]?.message?.content ??
      "I'm not sure how to respond to that. Could you rephrase?";
    return { reply };
  });
