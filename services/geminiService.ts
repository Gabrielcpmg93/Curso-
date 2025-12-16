
import { GoogleGenAI } from "@google/genai";

export const askGemini = async (courseTitle: string, userQuestion: string): Promise<string> => {
    try {
        const API_KEY = process.env.API_KEY;
        
        // Let the SDK handle the missing API key, which will throw an error
        // that is caught by the catch block below. This avoids displaying a
        // specific error message about API keys to the user.
        const ai = new GoogleGenAI({ apiKey: API_KEY });

        const prompt = `
            Você é um instrutor especialista em manutenção de celulares. 
            Seu conhecimento é focado no tópico: "${courseTitle}".
            Responda à seguinte pergunta do aluno de forma clara, técnica e direta. 
            Se a pergunta não estiver relacionada ao tópico, explique educadamente que o foco é em "${courseTitle}".

            Pergunta do aluno: "${userQuestion}"
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        // Use optional chaining for safer access and provide a fallback.
        return response?.text || "Não consegui gerar uma resposta. Tente novamente.";
        
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return "Ocorreu um erro ao tentar se comunicar com a IA. Por favor, verifique o console para mais detalhes.";
    }
};
