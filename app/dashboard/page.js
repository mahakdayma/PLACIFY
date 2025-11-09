'use client';

import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

export default function Dashboard() {

  const resumeSkills = [
    { skill: 'DSA', level: 70 },
    { skill: 'JavaScript', level: 85 },
    { skill: 'DBMS', level: 65 },
    { skill: 'OS', level: 60 },
    { skill: 'Communication', level: 75 }
  ];

  const tasks = [
    { title: 'Solve 20 LeetCode Questions', done: true },
    { title: 'Make Resume', done: true },
    { title: 'Portfolio Website', done: false },
    { title: 'Mock Interview', done: false }
  ];

  const barData = {
    labels: resumeSkills.map(s => s.skill),
    datasets: [
      {
        label: 'Skill Level (%)',
        data: resumeSkills.map(s => s.level),
        backgroundColor: '#4ade80'
      }
    ]
  };

  const doneCount = tasks.filter(t => t.done).length;
  const pendingCount = tasks.length - doneCount;

  const doughnutData = {
    labels: ['Completed', 'Pending'],
    datasets: [
      {
        data: [doneCount, pendingCount],
        backgroundColor: ['#22d3ee', '#a1a1aa']
      }
    ]
  };

  return (
    <div style={{display:"grid", gap:"20px"}}>
      <h1>Dashboard</h1>

      <div style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
        <div style={{flex:"1", minWidth:"300px", background:"#141418", padding:"20px", borderRadius:"12px"}}>
          <h3>Skill Strength (from Resume)</h3>
          <Bar data={barData} />
        </div>

        <div style={{flex:"1", minWidth:"300px", background:"#141418", padding:"20px", borderRadius:"12px"}}>
          <h3>Task Progress</h3>
          <Doughnut data={doughnutData} />
        </div>
      </div>

      <div style={{background:"#141418", padding:"20px", borderRadius:"12px"}}>
        <h3>Tasks</h3>
        {tasks.map((t,i)=>(
          <p key={i}>
            ✅ {t.title} — <b>{t.done ? "Done" : "Pending"}</b>
          </p>
        ))}
      </div>

    </div>
  );
        }
