function Projects(){
    return (
    // <div className="flex flex-col items-center justify-center my-40">
    // <h1 id="Projects" className="text-3xl font-bold mb-6">Projects</h1>
    // <a href="https://github.com/RyanEbanks/scent-imental"> Scent-imental </a>
    // <a href="https://github.com/Thvt1guy/group-project-1-picky-eater"> Picky Eater </a>
    // <a href="https://github.com/Thvt1guy/employee-tracker"> Employee Tracker </a>
    // <a href="https://github.com/Thvt1guy/e-commerce-back-end"> E-commerce Backend </a>
    // </div>

<div className="flex flex-col items-center justify-center my-40 shadow py-5">
  <h1 id="Projects" className="text-3xl font-bold mb-6">Projects</h1>
  <a href="https://github.com/RyanEbanks/scent-imental" className="project-link" target="_blank" rel="noopener noreferrer">
    Scent-imental
    <span className="description-box">Scent-imental is a social media web app that allows the user to share, like, and comment on scents.</span>
  </a>
  <a href="https://github.com/Thvt1guy/group-project-1-picky-eater" className="project-link" target="_blank" rel="noopener noreferrer">
    Picky Eater
    <span className="description-box">Picky Eater is a web application that allows you to enter a zipcode to quickly show you restaurants in the area.</span>
  </a>
  <a href="https://github.com/Thvt1guy/employee-tracker" className="project-link" target="_blank" rel="noopener noreferrer">
    Employee Tracker
    <span className="description-box">Employee Tracker is an example of a functioning Employee database.</span>
  </a>
  <a href="https://github.com/Thvt1guy/e-commerce-back-end" className="project-link" target="_blank" rel="noopener noreferrer">
    E-commerce Backend
    <span className="description-box">E-commerce Backend is a backend application that has full functionality of a standard online E-commerce website.</span>
  </a>
</div>


    );
}

export default Projects;