import { Badge } from "../ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Progress } from "../ui/Progress";

export function SkillsSection() {
   const skillCategories = [
      {
         title: "Frontend",
         skills: [
            { name: "React", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "TypeScript", level: 80 },
            { name: "Tailwind CSS", level: 85 },
            { name: "HTML/CSS", level: 95 },
         ],
      },
      {
         title: "Backend",
         skills: [
            { name: "Node.js", level: 80 },
            { name: "Express", level: 80 },
            { name: "PostgreSQL", level: 70 },
            { name: "MongoDB", level: 60 },
         ],
      },
      {
         title: "Herramientas",
         skills: [
            { name: "Git", level: 90 },
            { name: "AWS", level: 55 },
            { name: "VS Code", level: 95 },
         ],
      },
   ]
   const technologies = [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Tailwind CSS",
      "Git",
      "AWS",
      "Vercel",
      "Figma",
      "Photoshop",
   ]
   return (
      <section id="skills" className="py-20">
         <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
               <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Mis Habilidades
               </h2>
               <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {skillCategories.map((category, index) => (
                     <Card key={index}>
                        <CardHeader>
                           <CardTitle className="text-xl">{category.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                           {category.skills.map((skill, skillIndex) => (
                              <div key={skillIndex}>
                                 <div className="flex justify-between mb-2">
                                    <span className="text-sm font-medium">{skill.name}</span>
                                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                 </div>
                                 <Progress value={skill.level} className="h-2" />
                              </div>
                           ))}
                        </CardContent>
                     </Card>
                  ))}
               </div>
               <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-8">Tecnologías</h3>
                  <div className="flex flex-wrap justify-center gap-3">
                     {technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                           {tech}
                        </Badge>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}