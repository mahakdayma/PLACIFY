'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header(){
  const [open, setOpen] = useState(false);

  return (
    <header style={{background:"#111", padding:"12px 20px"}}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", maxWidth:"1100px", margin:"0 auto"}}>
        
        {/* Logo */}
        <Link href="/" style={{fontWeight:"bold", fontSize:"20px"}}>
          Placify <span style={{fontSize:"12px", color:"#7d7d7d"}}>Path to Placement</span>
        </Link>

        {/* Desktop Menu */}
        <nav style={{display:"flex", gap:"16px"}} className="desktop-menu">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/chat">AI Chatbot</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/teachers">Teachers Guidance</Link>
          <Link href="/support">Support</Link>
        </nav>

        {/* Mobile Button */}
        <button onClick={()=>setOpen(!open)} style={{fontSize:"22px"}}>☰</button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav style={{padding:"10px 20px", display:"grid", gap:"10px"}}>
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/chat">AI Chatbot</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/teachers">Teachers Guidance</Link>
          <Link href="/support">Support</Link>
        </nav>
      )}
    </header>
  );
      }
