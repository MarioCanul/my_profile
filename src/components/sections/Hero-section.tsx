import { Button } from "../ui/Button";
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function HeroSection() {
   return (
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
         <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
               <div className="mb-8">
                  <img src="/placeholder.svg?height=200&width=200"
                     className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary/20"
                     alt="Hero Image" />
               </div>
               <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Hola soy <span className="text-primary"> Mario Canul</span>
               </h1>
               <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Desarrollador web apasionado por crear experiencias digitales excepcionales
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button size="lg" className="text-lg px-8">
                     <Mail className="mr-2 h-5 w-5" />
                     Contáctame
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                     <Download className="mr-2 h-5 w-5" />
                     Descargar CV
                  </Button>
               </div>
               <div className="flex justify-center space-x-6">
                  <Button variant="ghost" size="icon" className="h-12 w-12">
                     <Github className="mr-2 h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-12 w-12">
                     <Linkedin className="mr-2 h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-12 w-12">
                     <Mail className="h-6 w-6" />
                  </Button>
               </div>
            </div>
         </div>
      </section>
   );
}