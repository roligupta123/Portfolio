import { ArrowRight,ExternalLink,Github } from 'lucide-react'

const projects = [
    {
        id:1,
        title:"Music App",
        description:"A modern music streaming web app where users can browse songs a smooth and responsive listening experience.",
        image:"projects/music_app.png",
        tags:["javascripts",'react','tailwind css'],
        demoUrl:"https://roligupta-music-app.netlify.app/",
        githubUrl:"https://github.com/roligupta123/Music-app"
    },
    {
        id:2,
        title:"Food Delivery",
        description:"A responsive food delivery website that allows users to explore menus clean and interactive ordering interface.",
        image:"projects/food_delivery.png",
        tags:["javascripts",'react','tailwind css'],
        demoUrl:"https://food-delivery-website-roli.netlify.app/",
        githubUrl:"https://github.com/roligupta123/food-delivery"
    },
    {
        id:3,
        title:"AI Chat Box",
        description:"An AI-powered chat application that allows users to interact with an intelligent chatbot and get instant responses in real time.",
        image:"projects/ai_chat.png",
        tags:["javascripts",'react','tailwind css'],
        demoUrl:"https://smart-with-ai-bot.netlify.app/",
        githubUrl:"https://github.com/roligupta123/AI-ChatBox"
    },
     {
        id:4,
        title:"E-Commerce Website",
        description:"A modern e-commerce website built with Python and Django, featuring a responsive design and seamless shopping experience.",
        image:"projects/e-commerce.png",
        tags:["Python",'Django','CSS'],
        demoUrl:"https://radhikagupta.pythonanywhere.com/",
        githubUrl:"https://github.com/roligupta123/E-Commerce-Website"
    },
    {
        id:5,
        title:"Book Library",
        description:"A modern book library website built with Python and Django, featuring a responsive design and seamless browsing experience.",
        image:"projects/book-library.png",
        tags:["Python",'Django','CSS'],
        demoUrl:"https://guptaroli123.pythonanywhere.com/",
        githubUrl:"https://github.com/roligupta123/Book-Library"
    },
    {
        id:6,
        title:"Animated Portfolio",
        description:"A modern animated portfolio website built with React and Tailwind CSS, featuring a responsive design and seamless browsing experience.",
        image:"projects/animated-portfolio.png",
        tags:["javascripts",'react','tailwind css'],
        demoUrl:"https://rolianimatedportfolio.netlify.app/",
        githubUrl:"https://github.com/roligupta123/animated-portfolio"
    }
    

]

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            These projects highlight my experience in developing modern web applications using React, JavaScript, and Tailwind CSS with a focus on performance and clean design.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key)=> (
                    <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                        <div className='h-48 overflow-hidden'>
                            <img src={project.image} alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale/110"/>
                        </div>

                        <div className="p-6">
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {
                                    project.tags.map((tag)=>(
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary">
                                            {tag}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                        
                        <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                        <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
                        
                        <div className="flex justify-between items-center">
                            <div className='flex space-x-3'>
                                <a href={project.demoUrl} target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <ExternalLink size={20}/>
                                </a>
                                <a href={project.githubUrl} target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <Github size={20}/>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank"
                href='https://github.com/roligupta123'>
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default ProjectSection