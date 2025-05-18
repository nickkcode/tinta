import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import systemPrompt from "./systemPrompt.js";

dotenv.config();

const gemini_api_key = process.env.NEXT_PUBLIC_GOOGLE_GENAI_API_KEY;

const ai = new GoogleGenAI({
  apiKey: gemini_api_key,
});

const geminiConfig = {
  temperature: 0.9,
  topP: 1,
  topK: 1,
  maxOutputTokens: 4096,
  systemInstruction: systemPrompt,
};

const generatePalette = async (userPrompt) => {
  try {
    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      config: geminiConfig,
      contents: userPrompt,
    });

    const response = result.candidates[0].content.parts[0].text;

    return response;
  } catch (error) {
    return { error };
  }
};

export default generatePalette;
