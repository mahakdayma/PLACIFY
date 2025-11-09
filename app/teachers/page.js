'use client';
import { useState, useEffect } from "react";

export default function Teachers() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("teacher_chat");
    if (saved) setMessages(JSON.parse(saved));
  }, []);

  const send = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { by: "student", text: input },
      { by: "teacher", text: "Thank you, I will reply soon." }
    ];

    setMessages(newMessages);
    localStorage.setItem("teacher_chat", JSON.stringify(newMessages));
    setInput("");
  };

  return (
    <div style={{maxWidth:"700px", margin:"0 auto", display:"flex", flexDirection:"column", gap:"15px"}}>
      <h2>Teacher Guidance</h2>

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
        {messages.map((m, i)=>(
          <div key={i}
            style={{
              alignSelf: m.by === "student" ? "flex-end" : "flex-start",
              background: m.by === "student" ? "#22d3ee" : "#3b3d42",
              padding:"10px 14px",
              borderRadius:"12px",
              maxWidth:"75%",
              color:"#000"
            }}>
            <b>{m.by === "student" ? "You" : "Teacher"}:</b> {m.text}
          </div>
        ))}
      </div>

      <div style={{display:"flex", gap:"10px"}}>
        <input 
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          placeholder="Ask your teacher..."
          style={{flex:1, padding:"12px", borderRadius:"8px", border:"none", outline:"none"}}
        />
        <button onClick={send} style={{
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
