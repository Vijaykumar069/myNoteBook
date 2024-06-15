import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/notecontext'
import profileimg from '../img/Developer.jpg'
export const About = () => {
  // const a=useContext(noteContext)
  const containerStyle = {
    backgroundColor: '#f0f0f0', // Set your desired background color
    fontFamily: 'Arial, sans-serif', // Set your desired font-family
    padding: '20px', // Add padding for spacing
  };
  return (
    <div className="container mt-5">
      <h2>About Us</h2>
      <div className="container" style={containerStyle}>
      <h1 className="mt-5 mb-4">Your Ultimate To-Do List Companion - Streamline Your Productivity!</h1>
      <p>
        Welcome to the ultimate online to-do list website designed to help you conquer your tasks and boost your productivity.
        Whether you're a student, a professional, or just someone looking to get organized, our feature-packed to-do list platform has you covered.
        With a sleek and intuitive interface, we make it effortless for you to plan, organize, and manage your daily tasks and long-term goals.
        Say goodbye to chaos and hello to productivity with our powerful suite of features.
      </p>

      <h2 className="mt-4">Key Functions:</h2>

      <ul>
        <li>
          <strong>Task Creation and Management:</strong>
          <ul>
            <li>Easily create and customize tasks with titles, descriptions, due dates, and priority levels.</li>
            <li>Categorize tasks with tags and labels for efficient organization.</li>
            <li>Set recurring tasks for daily, weekly, or monthly responsibilities.</li>
          </ul>
        </li>
        {/* Add more list items for each key function */}
      </ul>

      <p>
        Whether you're managing your work tasks, planning your daily routine, or working towards your life goals, our to-do list website is your go-to tool for a more organized and productive life.
        Join us today and experience the difference of a well-structured task management system. Say hello to a more efficient you!
      </p>
    </div>
      <h3>Meet the Developer</h3>
      <div className="card mb-3" style={{ maxWidth: '200%' }}>
        <div className="row g-0" >
          <div className="col" style={{width:"10%"}}>
            <img
              src={profileimg}
              style={{border:"1px solid black",height:"100%"}}
              alt="Developer"
              className="img-fluid"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Mohammad Nafis Raza</h5>
              <p className="card-text">
              Hello connections, I'm currently pursuing Bachelors degree in Mechanical Engineering at IIT(ISM), Dhanbad. I'm good in Competitive Programming and DSA and active on various coding platforms like Codeforces, GFG, LeetCode and Atcoder. I am currently rated specialist on Codeforces. Also, I am a good in frontend development and currently learning ReactJS. I worked as a frontend developer at SAIRC and currently interning at WorkEase as a Frontend Developer. Also I work as a volunteer at Kartavya, a student run NGO of IIT(ISM) Dhanbad.
              </p>
              <p className="card-text">
                <small className="text-muted">Contact: mohammad.nafis.raza.28@gmail.com</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

