'use client';
import { useState } from 'react';

export default function AIChat() {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hello! I'm your Placify AI helper. How can I help?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", text: input }]);
    const userInput = input;
    setInput("");

    // Temporary AI reply (later we connect to OpenAI)
    setTimeout(() => {
      setMessages(m => [...m, { role: "assistant", text: "Great question! We'll answer this soon with real AI." }]);
    }, 700);
  };

  return (
    <div style={{maxWidth:"700px", margin:"0 auto", display:"flex", flexDirection:"column", gap:"15px"}}>
      <h2>AI Chatbot</h2>

      <div style={{
        background:"#141418", 
        padding:"15px", 
        borderRadius:"12px",
        height:"400px", 
        overflowY:"auto",
        display:"flex",
        flexDirection:"column",
        gap:"10px"
      }}>
        {messages.map((m,i)=>(
          <div key={i} 
            style={{
              alignSelf: m.role === "user" ? "flex-end" : "flex-start",
              background: m.role === "user" ? "#22d3ee" : "#3b3d42",
              color:"#000",
              padding:"10px 14px",
              borderRadius:"12px",
              maxWidth:"75%"
            }}>
            {m.text}
          </div>
        ))}
      </div>

      <div style={{display:"flex", gap:"10px"}}>
        <input 
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          placeholder="Ask something..."
          style={{flex:1, padding:"12px", borderRadius:"8px", border:"none", outline:"none"}}
        />
        <button onClick={sendMessage} style={{
          padding:"12px 18px",
          background:"#22d3ee",
          border:"none",
          borderRadius:"8px",
          fontWeight:"bold"
        }}>Send</button>
      </div>
    </div>
  );
}
