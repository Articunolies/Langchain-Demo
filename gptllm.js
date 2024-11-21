import { ChatOpenAI } from "@langchain/openai";
import { config } from "dotenv";

config(); // Load the .env file

const model = new ChatOpenAI({
    model: "gpt-3.5-turbo",
    // model: "gpt-4",
    openAIApiKey: process.env.OPENAI_API_KEY, // Use OpenAI API Key
});

const response = await model.invoke("Hello");
        console.log("Response:", response);
// (async () => {
//     try {
        
//     } catch (error) {
//         console.error("Error invoking model:", error);
//     }
// })();

console.log("API Key:", process.env.OPENAI_API_KEY);
