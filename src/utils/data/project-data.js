export const projectsData = [
  {
    id: 1,
    name: "Customer Support AI Agent",
    description:
      "I developed a sophisticated customer support chatbot system using Chainlit and the OpenAI Agent SDK. I designed and implemented a multi-agent workflow that intelligently routes customer queries to specialized support areas, including billing, complaint handling, plan and package information, connection troubleshooting, and general inquiries. The system leverages Gemini AI for advanced natural language processing, delivering accurate and human-like responses. I built an interactive, user-friendly chat interface using Chainlit, ensuring smooth and intuitive user experiences for an internet service provider's customers.",
    tools: ["OpenAI Agent SDK", "Chainlit", "Python", "Gemini API"],
    role: "Agentic AI Engineer",
    code: "",
    demo: "",
  },
  {
    id: 2,
    name: "Simple QnA Chatbot",
    description:
      "I built a Simple QnA Chatbot using the OpenAI Agent SDK. I designed and implemented a lightweight conversational agent that answers general user questions with accurate and relevant responses. The chatbot demonstrates core LLM capabilities, 	including context handling, prompt engineering, and tracing spans for monitoring interactions. It showcases how to build a straightforward question-answering system that can be easily extended with custom tools or integrated into larger multi-agent workflows.",
    tools: ["OpenAI Agent SDK", "Python", "Chainlit", "Gemini API"],
    role: "Agentic AI Engineer",
    code: "",
    demo: "",
  },
  {
    id: 3,
    name: "Travel Assistant",
    description:
      "I built an AI-powered travel planning system using the OpenAI Agent SDK. I developed a multi-agent workflow that includes a Main Travel Agent coordinating three specialized sub-agents: Destination Agent, Itinerary Agent, and 	Budget Agent. The Main Travel Agent handles user input and manages the workflow between agents to deliver a complete travel plan. The Destination Agent recommends destinations based on user interests, the Itinerary Agent generates a day-by-day plan with activities and timings, and the Budget Agent estimates total costs, ensuring the trip fits the user's budget. The system combines advanced LLM reasoning, external travel data, and custom logic to provide users with personalized travel recommendations, detailed itineraries, and cost-saving suggestions.",
    tools: [
      "OpenAI Agent SDK",
      "Python",
      "Google Maps API",
      "Amadeus API",
      "Chainlit",
      "Gemini API",
    ],
    code: "",
    role: "Agentic AI Engineer",
    demo: "",
  },
  {
    id: 4,
    name: "Weather Agent",
    description:
      "I developed an AI-powered Weather Agent using the OpenAI Agent SDK. I designed and implemented an intelligent agent that provides users with real-time weather updates and forecasts. The agent integrates external weather APIs to fetch current conditions and forecasts, while leveraging LLM capabilities for natural language responses. It handles user queries, interprets location data, and delivers clear, conversational weather information. The system showcases API tool calling, context management, and span tracing within the OpenAI Agent SDK, providing accurate and user-friendly weather insights.",
    tools: [
      "OpenAI Agent SDK",
      "Python",
      "Weather API",
      "Gemini API",
      "Chainlit",
    ],
    code: "",
    demo: "",
    role: "Agentic AI Engineer",
  },
   {
    id: 5,
    name: 'Translator Agent System',
    description: "I developed an AI-powered Translator Agent using the OpenAI Agent SDK. The system includes an Orchestrator Agent that manages three specialized translation agents: French, Spanish, and Urdu. The Orchestrator Agent handles user input, dynamically hands off requests to the appropriate language agent, and ensures accurate translation flows. The system demonstrates advanced agent handoffs, context management, and multi-agent orchestration within the OpenAI Agent SDK.",
    tools: ['OpenAI Agent SDK', 'Python' , 'Gemini API' , 'Chainlit'],
    role: 'Agentic AI Engineer',
    code: '',
    demo: '',
},
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },
