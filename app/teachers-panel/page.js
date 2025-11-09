'use client';
import { useEffect, useState } from "react";

export default function TeacherPanel() {
  const [messages, setMessages] = useState([]);

  useEffect(()=>{
    const saved = localStorage.getItem("teacher_chat");
    if(saved) setMessages(JSON.parse(saved));
  }, []);

  return (
    <div style={{maxWidth:"700px", margin:"0 auto"}}>
      <h2>Teacher Panel</h2>
      <p style={{color:"#aaa"}}>You are viewing student queries.</p>

      <div style={{
        background:"#141418", padding:"15px", borderRadius:"12px",
        display:"flex", flexDirection:"column", gap:"10px"
      }}>
        {messages.map((m,i)=>(
          <p key={i}>
            <b>{m.by === "student" ? "Student" : "You"}:</b> {m.text}
          </p>
        ))}
      </div>
    </div>
  );
  }
