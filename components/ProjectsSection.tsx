import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Blog App",
    description:
      "This is some what a clone of medium.com where user can sign-in and upload blogs which other users can read. In future, I'll be upgrading this project to use Rich Text Editor like quill for better user experience.",
    image: "/blog-app.png",
    github: "hhttps://github.com/vaibhavbhardwaj201/vaibhav-agency",
    link: "#",
  },
  {
    name: "Full-stack Personal portfolio next app",
    description: "This is my personal-portfolio web app with realtime database to update and add experiences through admin pannel. And All the data will be fetch from MongoDB",
    image: "/portfolio.png",
    github: "https://github.com/vaibhavbhardwaj201/personal-portfolio",
    link: "/",
  },
  {
    name: "Infinite Scroll image gallery react app",
    description: "This is an infinite scroll image gallery which is fetching images from an API and it has a search feature as well to search for the particular images you want.",
    image: "/image-gallery.png",
    github: "https://github.com/vaibhavbhardwaj201/vinted-homework",
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
                    {/* <Link href={project.link}> */}
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                    {/* </Link> */}
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
                      {/* <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link> */}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}

      </div>

      <div className="py-10 px-5">
        <p>*Repository of portfolio app is private as of now and I am adding blog feature so that I can upload blog as well. After this I will deploy it.</p>
        <p>More interesting projects are coming too :)</p>
      </div>
    </section>
  )
}

export default ProjectsSection
