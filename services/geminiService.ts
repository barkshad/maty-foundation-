import { GoogleGenAI } from "@google/genai";
import { SITE_CONTENT_CONTEXT } from "../constants";

let ai: GoogleGenAI | null = null;

const getAI = () => {
  if (!ai) {
    // In a real app, this would be strictly server-side or via a proxy.
    // For this frontend demo, we assume the environment variable is injected.
    if (process.env.API_KEY) {
      ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
  }
  return ai;
};

export const chatWithMatiBot = async (userMessage: string): Promise<string> => {
  const client = getAI();
  if (!client) {
    return "I'm sorry, I'm currently offline (API Key missing). Please check the About page for more info!";
  }

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      // FIX: systemInstruction must be inside the config object.
      config: {
        systemInstruction: `You are a warm, empathetic, and helpful assistant for the "Mati Foundation".
        
        Your goal is to help visitors understand our mission, programs, and how to donate.
        
        Use the following context about the foundation to answer questions:
        ${JSON.stringify(SITE_CONTENT_CONTEXT)}
        
        Keep answers concise (under 100 words) unless asked for a story. Be encouraging and hopeful.`,
      }
    });

    return response.text || "I'm not sure how to answer that right now, but we'd love to hear from you via our contact form.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a little trouble connecting to the server. Please try again later.";
  }
};