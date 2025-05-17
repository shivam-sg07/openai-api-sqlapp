import openaiClient from "./api.js"

const generate = async (queryDescription)=>{
    const response = await openaiClient.createCompletion({
        model: "text-davinci-003",
        prompt: `Convert the following natural language description into a SQL Query: \n${queryDescription}.`,
        max_tokens: 100,
        temperature: 10
    })

    return response.data.choices(0).text
}

export default generate