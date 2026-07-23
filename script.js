async function sendMessage(message) {
  try {
    const res = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }) 
    });

    const data = await res.json();
    return data.reply; 
  } catch (error) {
    console.error("Error:", error);
    return "Sorry, something went wrong!";
  }
}

async function testAI() {
  const reply = await sendMessage("Hello Gemini");
  alert(reply);
}
