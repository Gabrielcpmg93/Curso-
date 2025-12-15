
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    console.error("Gemini API key is not set. Please set the API_KEY environment variable.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const askGemini = async (courseTitle: string, userQuestion: string): Promise<string> => {
    if (!API_KEY) {
        return "Erro: A chave da API do Gemini não está configurada. Por favor, configure a variável de ambiente API_KEY.";
    }

    try {
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

        if (response.text) {
            return response.text;
        } else {
             return "Não consegui gerar uma resposta. Tente novamente.";
        }
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return "Ocorreu um erro ao tentar se comunicar com a IA. Por favor, verifique o console para mais detalhes.";
    }
};
