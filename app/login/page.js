'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student");

  const login = () => {
    localStorage.setItem("placify_user_role", role);
    localStorage.setItem("placify_user_email", email);
    
    if(role === "student"){
      router.push("/dashboard");
    } else {
      router.push("/teachers-panel");
    }
  }

  return (
    <div style={{maxWidth:"400px", margin:"0 auto", marginTop:"50px", display:"grid", gap:"15px"}}>
      <h2 style={{textAlign:"center"}}>Login</h2>

      <input 
        placeholder="Email"
        value={email}
        onChange={e=>setEmail(e.target.value)}
        style={{padding:"12px", borderRadius:"8px", border:"none"}}
      />

      <select 
        value={role}
        onChange={e=>setRole(e.target.value)}
        style={{padding:"12px", borderRadius:"8px", border:"none"}}
      >
        <option value="student">Student</option>
        <option value="faculty">Faculty</option>
      </select>

      <button 
        onClick={login}
        style={{padding:"12px", borderRadius:"8px", border:"none", background:"#22d3ee", fontWeight:"bold"}}
      >
        Login
      </button>
    </div>
  );
}
