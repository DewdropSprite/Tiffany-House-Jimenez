import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="resumebackground-container">
      <div className="resume-container" id="resume">
        <div className="resume-content">
          <h2>Resume</h2>
          <h3>Skills</h3>
          <p>Language: JavaScript | Python | C#</p>
          <p>
            Frontend: HTML | CSS | React.js | Redux | Material UI | Figma |
            Chrome Developer Tool
          </p>
          <p>Backend: Express</p>
          <p>Database: PostgreSQL | Postico | SQL | DBDesigner</p>
          <p>Other: Node.js | Postman | Git | Scrum</p>

          <h3>Experience</h3>
          <h5>Software Development Student</h5>
          <p>Prime Digital Academy October 2023 - March 2024</p>
          <li>
            Apprenticeship like instruction and guidance from a senior web
            developer. Learned PERN full-stack through lecture, assignments,
            group projects, and a real client project.
          </li>

          <h5>Aviation Maintenance Administrationman</h5>
          <p>US Navy Feb 2012 – June 2022</p>
          <li>
            Led diverse teams in managing advanced data systems for precise
            aircraft maintenance records.
          </li>
          <li>
            Developed streamlined procedures for maintenance tracking, and
            optimizing processes.
          </li>
          <li>
            Collaborated with cross-functional teams to troubleshoot technical
            issues.
          </li>
          <li>
            Oversaw inventory systems, optimizing procurement and maintaining
            optimal stock levels.
          </li>
          <li>Trained and mentored junior personnel.</li>

          <h3>Education</h3>
          <h5>Full Stack Software Engineering Certification</h5>
          <p>Prime Digital Academy , Minneapolis, MN March 2024</p>

          <h5>Bachelor of Science (BS) Management Information Systems</h5>
          <p>(Expected Completion: December 2024)</p>
          <p>University of Maryland, Global Campus June 2019 - August 2023</p>
          <ul>15 Credits remaining towards degree completion.</ul>
          <ul>Relevant Coursework:</ul>
          <p>
            Organizational IT | Management Systems | IT Ethics | Cybersecurity
            Leadership | Infrastructure Concepts | Enterprise Architecture |
            Data Analytics | Telecommunications | Project Management | Systems
            Design
          </p>

          <h5>Project Management Undergraduate Certification</h5>
          <p>University of Maryland, Global Campus December 2020</p>

          <h5>Scrum Master Certification</h5>
          <p>Scrum Alliance, May 2019</p>

          <h5>Associate in Arts (AA), Supervision and Management</h5>
          <p>Coastline Community College , Fountain Valley, CA May 2018</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
