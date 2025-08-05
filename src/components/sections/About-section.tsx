import { Code, Palette, Zap } from "lucide-react";
import { Card, CardContent } from "../ui/Card";

export function AboutSection() {
   return (
      <section id="about" className="py-20 bg-muted/30">
         <div className="container mx-auto px-4">
            <div className="max-w-4x1 mx-auto">
               <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Acerca de Mi
               </h2>
               <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                     <p className="text-lg text-muted-foreground mb-6">
                        Soy un desarrollador apasionado con más de X años de experiencia creando aplicaciones web modernas y
                        soluciones digitales innovadoras. Me especializo en tecnologías como React, Node.js y bases de datos
                        modernas.
                     </p>
                     <p className="text-lg text-muted-foreground mb-6">
                        Mi enfoque se centra en escribir código limpio, crear interfaces intuitivas y resolver problemas
                        complejos de manera eficiente. Siempre estoy aprendiendo nuevas tecnologías y mejorando mis habilidades.
                     </p>
                     <p className="text-lg text-muted-foreground">
                        Cuando no estoy programando, disfruto de [tus hobbies/intereses], contribuir a proyectos de código
                        abierto y compartir conocimientos con la comunidad.
                     </p>
                  </div>
                  <div>
                     <img
                        src="/placeholder.svg?height=400&width=400"
                        alt="Espacio de trabajo"
                        className="rounded-lg shadow-lg"
                     />
                  </div>
               </div>
               <div className="grid md:grid-cols-3 gap-8">
                  <Card>
                     <CardContent className="p-6 text-center">
                        <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Desarrollo</h3>
                        <p className="text-muted-foreground">Código limpio y eficiente con las mejores prácticas</p>
                     </CardContent>
                  </Card>

                  <Card>
                     <CardContent className="p-6 text-center">
                        <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Diseño</h3>
                        <p className="text-muted-foreground">Interfaces intuitivas y experiencias de usuario excepcionales</p>
                     </CardContent>
                  </Card>

                  <Card>
                     <CardContent className="p-6 text-center">
                        <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Performance</h3>
                        <p className="text-muted-foreground">Aplicaciones rápidas y optimizadas para todos los dispositivos</p>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </div>
      </section>
   )
}