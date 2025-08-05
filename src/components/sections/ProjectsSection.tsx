import { ExternalLink, Github } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

export function ProjectsSection() {
   const projects = [
      // {
      //    title: "E-commerce Platform",
      //    description:
      //       "Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración. Construida con React, Node.js y Stripe.",
      //    image: "/placeholder.svg?height=300&width=400",
      //    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      //    github: "#",
      //    demo: "#",
      // },
      // {
      //    title: "Task Management App",
      //    description:
      //       "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real, notificaciones push y sincronización en la nube.",
      //    image: "/placeholder.svg?height=300&width=400",
      //    technologies: ["Next.js", "TypeScript", "Supabase", "Socket.io"],
      //    github: "#",
      //    demo: "#",
      // },
      // {
      //    title: "Weather Dashboard",
      //    description:
      //       "Dashboard meteorológico interactivo con mapas, gráficos y pronósticos detallados. Integra múltiples APIs meteorológicas para datos precisos.",
      //    image: "/placeholder.svg?height=300&width=400",
      //    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Sass"],
      //    github: "#",
      //    demo: "#",
      // },
      // {
      //    title: "Social Media Analytics",
      //    description:
      //       "Herramienta de análisis para redes sociales que proporciona insights detallados sobre engagement, alcance y demografía de audiencia.",
      //    image: "/placeholder.svg?height=300&width=400",
      //    technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      //    github: "#",
      //    demo: "#",
      // },
      // {
      //    title: "Recipe Finder App",
      //    description:
      //       "Aplicación móvil para encontrar recetas basadas en ingredientes disponibles, con funciones de favoritos y lista de compras.",
      //    image: "/placeholder.svg?height=300&width=400",
      //    technologies: ["React Native", "Firebase", "Expo", "Recipe API"],
      //    github: "#",
      //    demo: "#",
      // },
      {
         title: "Portfolio Website",
         description:
            "Sitio web de portafolio personal con diseño responsivo, animaciones suaves y optimización SEO. El mismo sitio que estás viendo ahora.",
         image: "/placeholder.svg?height=300&width=400",
         technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX"],
         github: "#",
         demo: "#",
      },
   ]
   return (
      <section id="projects" className="py-20 bg-muted/30">
         <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
               <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Proyectos Destacados</h2>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {
                     projects.length > 0 ?
                        projects.map((project, index) => (
                           <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                              <div className="aspect-video overflow-hidden">
                                 <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                 />
                              </div>
                              <CardHeader>
                                 <CardTitle className="text-xl">{project.title}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                 <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                                 <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                       <Badge key={techIndex} variant="secondary" className="text-xs">
                                          {tech}
                                       </Badge>
                                    ))}
                                 </div>

                                 <div className="flex gap-2">
                                    <Button variant="outline" size="sm" asChild>
                                       <a href={project.github} target="_blank" rel="noopener noreferrer">
                                          <Github className="h-4 w-4 mr-2" />
                                          Código
                                       </a>
                                    </Button>
                                    <Button size="sm" asChild>
                                       <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                          <ExternalLink className="h-4 w-4 mr-2" />
                                          Demo
                                       </a>
                                    </Button>
                                 </div>
                              </CardContent>
                           </Card>
                        )) : (
                           <div className="col-span-2 text-center">
                              <p className="text-muted-foreground">No hay proyectos disponibles.</p>
                           </div>
                        )}
               </div>
            </div>
         </div>
      </section>
   );
}