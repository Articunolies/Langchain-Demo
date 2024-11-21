import { ChatAnthropic } from "@langchain/anthropic";
import { config } from "dotenv";
import { init } from "z3-solver";

config(); // Load the .env file

const { Context } = await init();
const { Solver, Int, And, Or, Distinct } = new Context("main");

// Initialize Claude model
const model = new ChatAnthropic({
    model: "claude-3-5-sonnet-20240620",
    temperature: 0,
    anthropicApiKey: process.env.ANTHROPIC_API_KEY,
});

// Initialize Z3 solver
const solver = new Solver();

async function interpretAndSolve(userInput) {
    try {
        // Step 1: Use Claude to interpret the input
        const prompt = `
        The user has provided the following input: "${userInput}".
        Convert this input into a Z3-solver-friendly format.
        Use Z3's syntax for constraints. Provide clear output.
        Example:
        - Input: "x is greater than 5"
        - Output: x > 5
        `;

        const response = await model.invoke(prompt);
        console.log("Claude Response:", response);

        // Step 2: Parse and apply constraints
        const constraintScript = response; // Assume the response is valid Z3 constraints
        const parsedConstraints = eval(constraintScript); // Use eval cautiously (consider sandboxing)

        solver.add(parsedConstraints);

        // Step 3: Solve and return results
        if (solver.check() === "sat") {
            const model = solver.model();
            console.log("Solution found:", model.toString());
            return model.toString();
        } else {
            console.log("No solution could be found.");
            return "No solution could be found.";
        }
    } catch (error) {
        console.error("Error interpreting or solving:", error);
        return "An error occurred while processing your input.";
    }
}

// Example Usage
(async () => {
    const userInput = "x is greater than 5 and y is less than 10";
    const result = await interpretAndSolve(userInput);
    console.log("Final Result:", result);
})();
