import { ChatAnthropic } from "@langchain/anthropic";
import { config } from "dotenv";

config(); // Load the .env file

const model = new ChatAnthropic({
    model: "claude-3-5-sonnet-20240620",
    temperature: 0,
    anthropicApiKey: process.env.ANTHROPIC_API_KEY,
});

(async () => {
    try {
        const response = await model.invoke("Hello");
        console.log(response);
    } catch (error) {
        console.error("Error invoking model:", error);
    }
})();
