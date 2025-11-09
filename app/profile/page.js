'use client';
import { useState, useEffect } from "react";

export default function Profile() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    year: "",
    resume: ""
  });

  useEffect(() => {
    const saved = localStorage.getItem("placify_profile");
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  const save = () => {
    localStorage.setItem("placify_profile", JSON.stringify(data));
    alert("Profile Saved ✅");
  };

  return (
    <div style={{maxWidth:"700px", margin:"0 auto", display:"grid", gap:"15px"}}>
      <h2>Profile</h2>

      <input className="input" placeholder="Full Name" value={data.name}
        onChange={e=>setData({...data, name:e.target.value})}/>

      <input className="input" placeholder="Email" value={data.email}
        onChange={e=>setData({...data, email:e.target.value})}/>

      <input className="input" placeholder="Phone Number" value={data.phone}
        onChange={e=>setData({...data, phone:e.target.value})}/>

      <input className="input" placeholder="Education (e.g., B.Tech CSE)" value={data.education}
        onChange={e=>setData({...data, education:e.target.value})}/>

      <select className="input" value={data.year}
        onChange={e=>setData({...data, year:e.target.value})}>
        <option value="">Select Year</option>
        <option>1st</option>
        <option>2nd</option>
        <option>3rd</option>
        <option>4th</option>
      </select>

      <input className="input" placeholder="Resume Link (Google Drive)" value={data.resume}
        onChange={e=>setData({...data, resume:e.target.value})}/>

      <button 
        style={{padding:"12px", borderRadius:"8px", border:"none", background:"#22d3ee", fontWeight:"bold"}}
        onClick={save}>
        Save Profile
      </button>
    </div>
  );
          }
