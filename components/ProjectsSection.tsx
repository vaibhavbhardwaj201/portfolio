import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Movie App",
    description:
      "This is an App which gets data from TMDB api and shows all the movies and series which you can filter and search. Right now I'm working on this project and it will be live after completion.",
    image: "/movie-app.webp",
    github: "https://github.com/vaibhavbhardwaj201",
    link: "#",
  },
  {
    name: "Ecommerce App",
    description: "In this app, I'll add all ecommerce functionality that you can find on any app like add to cart, search product, checkout etc.",
    image: "/ecommerce.avif",
    github: "https://github.com/vaibhavbhardwaj201",
    link: "/",
  },
  {
    name: "Blog site",
    description: "This is going to be my own Blogging site, where I'll share my thoughts, experiences, travel blogs, etc.",
    image: "/blog.jpeg",
    github: "https://github.com/vaibhavbhardwaj201",
    link: "/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>

      <div className="py-10 px-5">
        <p>*All these projects are not completed yet. I&apos;ll add these projects as soon as they will finish.</p>  
      </div>
    </section>
  )
}

export default ProjectsSection
