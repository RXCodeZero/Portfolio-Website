import React from "react";

export default function Portfolio() {
  return (
    <main className="bg-gradient-to-br from-purple-300 via-blue-300 to-green-300 text-gray-900 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto py-12 px-6 sm:px-10">
        <section className="text-center border-b border-gray-300 pb-10">
        <div className="w-36 h-36 mx-auto mb-4 rounded-full p-1 bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-600 shadow-lg shadow-red-200">
          <div className="bg-white rounded-full p-1">
            <img
              src="https://github.com/RXCodeZero.png"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
        </div>
          <h1 className="text-6xl font-extrabold tracking-tight text-gray-800">ABHAY. V. B</h1>
          <p className="mt-4 text-xl text-gray-600">BTech Student | AI & Data Science Enthusiast | Problem Solver</p>
          <p className="mt-3 text-sm text-gray-500">
            <a className="hover:underline" href="mailto:abhay.baiju2004@gmail.com">abhay.baiju2004@gmail.com</a> • <a className="hover:underline" href="https://www.linkedin.com/in/abhay-v-b-950202282/" target="_blank">LinkedIn</a> • Kochi, Kerala
          </p>
        </section>
        <div className="space-y-10 mt-12">
          <section className="bg-white/30 backdrop-blur-md shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-black-700 border-b pb-2">Summary</h2>
            <p className="text-gray-700 leading-relaxed">
              B.Tech student in AI & Data Science with a passion for machine learning, data analytics, and problem-solving.
              Aspiring to build innovative AI-driven solutions for real-world challenges.
            </p>
          </section>
          <section className="bg-white/30 backdrop-blur-md shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-black-700 border-b pb-2">Projects</h2>
            <ul className="space-y-4">
              {[
                ["Movie Recommendation System", "Uses DBMS and Python to analyze user behavior and provide real-time movie suggestions using a Streamlit UI."],
                ["Air Quality Analysis", "Investigates the impact of open waste dumping on air pollution across Indian states, analyzing PM2.5, NO2, and SO2 levels."],
                ["SmartSight - Smart Glasses", "Affordable smart glasses for visually impaired individuals with TTS, object detection, face recognition, SOS, and a control app."],
                ["VSCode Website Clone", "A frontend-only clone of Visual Studio Code's official website using React and Tailwind CSS."],
                ["ZapPay - Payment App", "A fullstack payment application built with React for the frontend and Express.js for the backend."],
                ["Todo Application", "A fullstack task management app with user authentication, built using MERN stack (MongoDB, Express, React, Node.js)."],
                ["BlogApp", "A fullstack blogging platform allowing users to post, edit, and manage blogs, using MERN stack with Markdown support."]
              ].map(([title, desc]) => (
                <li key={title}>
                  <span className="font-semibold text-gray-900">{title}:</span> <span className="text-gray-700">{desc}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="bg-white/30 backdrop-blur-md shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-black-700 border-b pb-2">Education</h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-800">Muthoot Institute of Technology & Science</p>
                <p className="text-sm text-gray-600">BTech in Artificial Intelligence and Data Science (2022-2026) • CGPA: 6.71</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Greets Public School</p>
                <p className="text-sm text-gray-600">10th (2020): 89% • 12th (2022): 87%</p>
              </div>
            </div>
          </section>
          <section className="bg-white/30 backdrop-blur-md shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-black-700 border-b pb-2">Achievements & Certifications</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>NPTEL ELITE+SILVER: Python for Data Science (IIT-Madras)</li>
              <li>Google Cloud Course Badges & Certification</li>
              <li>HTML-Django Certification from ZeroPixels</li>
              <li>NPTEL ELITE: Data Analytics with Python (IIT-Roorkee)</li>
            </ul>
          </section>
          <section className="bg-white/30 backdrop-blur-md shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-black-700 border-b pb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Python", "JavaScript","Django", "HTML5", "CSS3", "Tailwind CSS", "GitHub", "Node.js",
                "Express.js", "React", "MongoDB", "PostgreSQL", "MySQL", "Cryptocurrency",
                "DBMS", "Fast learner", "Team player", "Hard working", "Motivated", "Dedicated"
              ].map(skill => (
                <span key={skill} className="bg-black-100 text-black-800 text-sm font-medium px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </section>
          <section className="bg-white/30 backdrop-blur-md shadow-md rounded-lg p-6 border-t border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-black-700">Contact</h2>
            <div className="text-gray-700 space-y-2">
              <p>📞 +91-7592053948</p>
              <p>📧 <a className="hover:underline text-black-600" href="mailto:abhay.baiju2004@gmail.com">abhay.baiju2004@gmail.com</a></p>
              <p>🌐 <a className="hover:underline text-black-600" href="https://www.linkedin.com/in/abhay-v-b-950202282/" target="_blank">LinkedIn</a></p>
              <p>📍 Velathuparambil, Ponnarimangalam, Mulavukad P.O., Kochi, Kerala</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
