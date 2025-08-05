import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Badge } from "../ui/Badge";

export function ExperienceSection() {
   const experiences = [
      {
         title: "Desarrollador front end ",
         company: "Revenatium",
         location: "Remoto, Cancun, México",
         period: "2021 - Presente",
         description:
            "Creación  de características para un Booking-engine,  proyectos relacionados con la administración hotelera y herramientas para su manejo ",
         technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      },
      {
         title: "Desarrollador de software ",
         company: "INE",
         location: "Remoto, Ciudad de México",
         period: "2021 - 2021",
         description:
            "Creación  de un sistema de gestión de recursos humanos para el Instituto Nacional Electoral, mejorando la eficiencia en la administración del personal.",
         technologies: ["Java", "JSP", "Servlet", "Hibernate", "MySQL"],
      },
      {
         title: "Desarrollador web ",
         company: "Intor",
         location: "Presencial/Remoto, Mérida, Yucatán, México",
         period: "2020 - 2021",
         description:
            "Creación  de un sistema de gestión de recursos humanos para el Instituto Nacional Electoral, mejorando la eficiencia en la administración del personal.",
         technologies: ["JavaScript", "PHP", "React.js", "Laravel", "MySQL", "Node.js"],
      },
   ]
   return (
      <section id="experience" className="py-20 bg-muted/30">
         <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
               <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experiencia Laboral</h2>

               <div className="space-y-8">
                  {experiences.map((exp, index) => (
                     <Card key={index} className="relative">
                        <CardHeader>
                           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                              <div>
                                 <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                                 <h3 className="text-lg font-semibold text-primary">{exp.company}</h3>
                              </div>
                              <div className="flex flex-col md:items-end gap-2">
                                 <div className="flex items-center text-muted-foreground">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    <span className="text-sm">{exp.period}</span>
                                 </div>
                                 <div className="flex items-center text-muted-foreground">
                                    <MapPin className="h-4 w-4 mr-2" />
                                    <span className="text-sm">{exp.location}</span>
                                 </div>
                              </div>
                           </div>
                        </CardHeader>
                        <CardContent>
                           <p className="text-muted-foreground mb-4">{exp.description}</p>
                           <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, techIndex) => (
                                 <Badge key={techIndex} variant="outline">
                                    {tech}
                                 </Badge>
                              ))}
                           </div>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}