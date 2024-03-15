import React, { useState } from "react";
import "./Projects.css";

function Projects() {
  // State to handle modal visibility
  const [modalVisible, setModalVisible] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div className="projectsbackground-container">
    <div className="projects-container" id="projects">
    <div className="projects-content">
      <h2>My Projects</h2>
      <h5>Pawesomely Purrfect</h5>
      <img
        id="pawesomelypurrfect"
        src="./public/Pawesomely Purrfect.jpeg"
        alt="Pawesomely Purrfect"
      />

<h5>Can Do Canines</h5>
      <img
        id="Can Do Canines"
        src="./public/Can_Do_Canines.jpeg"
        alt="Can Do Canines"
      />
      <div>

      {/* Open the modal */}
      <button id="pawesomelypurrfectmodal" onClick={toggleModal}>
        More Information
      </button>

      {/* The Modal */}
      <div id="myModal" className={`modal ${modalVisible ? 'modal-visible' : ''}`}>
        {/* Modal Content */}
        <div className="modal-content">
          <span className="close" onClick={toggleModal}>
            &times;
          </span>
          <p>
            I designed and developed an application that allows cat owners to
            log in to a centralized location to view important medical
            information and pertinent historical information for their cats.
          </p>
          <p>Technologies Used:</p>
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>PostgreSQL</li>
            <li>MUI</li>
            <li>Multer</li>
            <li>Luxon</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    </div>
    </div> 
  );
}

export default Projects;
