import styles from "./ProjectsStyles.module.css";
import brainwave from "../../assets/brainwave.png";
import admindashboard from "../../assets/admindashboard.png";
import ecommerce from "../../assets/ecommerce.png";
import fitLift from "../../assets/gym.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={brainwave}
          link="https://brain-wave-azure.vercel.app/"
          h3="Brainwave"
          p="React | Javascript | HTML | CSS"
        />
        <ProjectCard
          src={admindashboard}
          link="https://admin-dashboard-template-project.vercel.app/"
          h3="Admin Dashboard Panel"
          p="React | Javascript | HTML | Material UI "
        />
        <ProjectCard
          src={ecommerce}
          link="https://ecommerce-shop-e32y.onrender.com/"
          h3="Ecommerce FullStack App "
          p="React|Javascript|Bootstrap|Node.js|Express.js|MongoDB"
        />
        <ProjectCard
          src={fitLift}
          link="https://gymwebsite-six.vercel.app/"
          h3="FitLift - Fitness App"
          p="React.js |Javascript |HTML |CSS |Material UI| "
        />
      </div>
    </section>
  );
}

export default Projects;
