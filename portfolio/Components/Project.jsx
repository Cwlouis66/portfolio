import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
    {
        id: 1,
        title: "LinkedOut & About",
        description: "This is a project.",
        image: "/projects/linkedout&about.png",
        gitUrl: "https://github.com/APU-Blockchain-Cryptocurrency-Club/LinkedOutAndAbout"

    },
];

const Project = () => {
    return(
        <div>
            <div className= 'text-4xl font-semibold mb-8'>My Projects</div>
            <div className='Name="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 '>
            {projectData.map((project) =>(
                <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                />
            ))}
            </div>
        </div>
        
    )
}
export default Project;