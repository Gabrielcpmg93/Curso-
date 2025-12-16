
import { GoogleGenAI } from "@google/genai";

export const askGemini = async (courseTitle: string, userQuestion: string): Promise<string> => {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

        const prompt = `
            Você é um instrutor especialista em manutenção de celulares. 
            Seu conhecimento é focado no tópico: "${courseTitle}".
            Responda à seguinte pergunta do aluno de forma clara, técnica e direta. 
            Se a pergunta não estiver relacionada ao tópico, explique educadamente que o foco é em "${courseTitle}".

            Pergunta do aluno: "${userQuestion}"
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            // Reverted to the simpler string format for 'contents' to ensure maximum compatibility
            // and resolve the communication error.
            contents: prompt,
        });

        // Use optional chaining for safer access and provide a fallback.
        return response?.text || "Não consegui gerar uma resposta. Tente novamente.";
        
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return "Ocorreu um erro ao tentar se comunicar com a IA. Por favor, verifique o console para mais detalhes.";
    }
};
