import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="mero-estate app"
          description="Mero-estate is a feature-rich real estate web application designed to simplify property search, buying, and selling processes."
          githubLink="https://github.com/ashishsigdel1/mern-estate-app"
          demoWebLink="https://mero-estate.onrender.com/"
        />
        <ProjectCard
          src="/CardImage.png"
          title="IdeaForge-Prompts-sharing-APP"
          description="IdeaForge is an open-source AI prompting tool for modern world to discover, create and share creative prompts."
          githubLink="https://github.com/ashishsigdel1/IdeaForge-Prompts-sharing-APP"
          demoWebLink="https://ideaforge-ashish-sigdels-projects.vercel.app/"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Embark on a cosmic journey with our Space Themed Website, where the universe unfolds in pixels. Explore mesmerizing celestial visuals, delve into astronomical wonders, and stay updated on the latest cosmic discoveries. From breathtaking images of distant galaxies to intriguing space facts, our website is your portal to the cosmos, inviting you to discover the wonders of the final frontier."
          githubLink="www.google.com"
          demoWebLink="www.google.com"
        />
      </div>
    </div>
  );
};

export default Projects;
