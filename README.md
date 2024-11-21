# Langchain-Demo

This project demonstrates the integration of [LangChain](https://js.langchain.com) with popular Large Language Models (LLMs) like Claude and ChatGPT.

## Prerequisites

### 1. Install Dependencies
Before running the project, make sure to install the necessary packages:

```bash
npm install langchain @langchain/openai @langchain/anthropic
npm install z3-solver
```

### 2. Configure API Keys
Add a `.env` file in the root directory with your API keys:

```plaintext
OPENAI_API_KEY=your-openai-api-key
ANTHROPIC_API_KEY=your-anthropic-api-key
```

#### Get Your API Keys:
- **Claude**: [Generate API Key](https://console.anthropic.com/settings/keys)
- **ChatGPT**: [Generate API Key](https://platform.openai.com/settings/organization/api-keys)

## How to Run

Run the scripts to test Claude and ChatGPT integrations:

```bash
# For Claude integration
node claudellm.js

# For ChatGPT integration
node gptllm.js
```

## Resources

- [LangChain Documentation](https://js.langchain.com/docs/)
- [Anthropic API Documentation](https://docs.anthropic.com/)
- [OpenAI API Documentation](https://platform.openai.com/docs/)
