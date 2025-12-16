
import { GoogleGenAI, HarmCategory, HarmBlockThreshold } from "@google/genai";

export const askGemini = async (courseTitle: string, userQuestion: string): Promise<string> => {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

        const prompt = `
            Você é um instrutor especialista em manutenção de celulares. 
            Seu conhecimento é focado no tópico: "${courseTitle}".
            Responda à seguinte pergunta do aluno de forma clara, técnica e direta, usando formatação como listas se ajudar a clareza. 
            Se a pergunta não estiver relacionada ao tópico, explique educadamente que o foco é em "${courseTitle}".

            Pergunta do aluno: "${userQuestion}"
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            // Add safety settings to prevent blocking responses and causing generic communication errors.
            safetySettings: [
                {
                    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                    threshold: HarmBlockThreshold.BLOCK_NONE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                    threshold: HarmBlockThreshold.BLOCK_NONE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                    threshold: HarmBlockThreshold.BLOCK_NONE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                    threshold: HarmBlockThreshold.BLOCK_NONE,
                },
            ],
        });

        return response?.text || "Não consegui gerar uma resposta. Tente novamente.";
        
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return "Ocorreu um erro ao tentar se comunicar com a IA. Por favor, verifique o console para mais detalhes.";
    }
};
