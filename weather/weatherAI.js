// Weather responses based on user input
const weatherResponses = {
    "current weather": "It's sunny and 25°C outside. Great day to step out!",
    "will it rain today": "There's a slight chance of rain around 4 PM. Keep an umbrella handy!",
    "temperature tomorrow": "Tomorrow will be cooler, around 22°C. Perfect for outdoor plans!",
    "weather in oroquieta": "Oroquieta is sunny and bright today! A perfect beach day.",
    "rain this week": "Rain is expected on Friday, so plan accordingly!",
    "temperature at night": "Tonight, the temperature will drop to 18°C. You might need a jacket!"
  };
  
  // Function to load chat log from localStorage
  function loadChatLog() {
    const savedChatLog = localStorage.getItem("chatLog");
    if (savedChatLog) {
      const chatLog = document.getElementById("chatLog");
      chatLog.innerHTML = savedChatLog;
      chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the latest message
    }
  }
  
  // Function to save chat log to localStorage
  function saveChatLog() {
    const chatLog = document.getElementById("chatLog");
    localStorage.setItem("chatLog", chatLog.innerHTML);
  }
  
  // Function to add messages to the chat log
  function addMessageToLog(message, isUser) {
    const chatLog = document.getElementById("chatLog");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(isUser ? "user-message" : "bot-message");
    messageDiv.textContent = message;
    chatLog.appendChild(messageDiv);
    chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll to the latest message
    saveChatLog(); // Save the updated chat log
  }
  
  // Function to handle user questions
  function askAI() {
    const questionInput = document.getElementById("questionInput");
    const userQuestion = questionInput.value.trim();
  
    if (userQuestion === "") return; // Ignore empty questions
  
    addMessageToLog(userQuestion, true); // Display user's question
    questionInput.value = ""; // Clear input field
  
    // Find a matching bot response
    const botResponse = getWeatherResponse(userQuestion.toLowerCase());
    setTimeout(() => addMessageToLog(botResponse, false), 500); // Simulate typing delay
  }
  
  // Function to get the bot's weather response
  function getWeatherResponse(message) {
    for (const key in weatherResponses) {
      if (message.includes(key)) {
        return weatherResponses[key];
      }
    }
    return "I'm not sure about that. Can you ask something else about the weather?";
  }
  
  document.addEventListener("DOMContentLoaded", loadChatLog);

  function resetChatLog() {
    localStorage.clear(); // Clears all data from localStorage
    const chatLog = document.getElementById("chatLog");
    chatLog.innerHTML = ""; // Clears the chat log visually
  }
  
  