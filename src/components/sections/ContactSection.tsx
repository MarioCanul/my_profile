"use client"
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Button } from "../ui/Button";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { useState } from "react";
import { Textarea } from "../ui/Textarea";

export function ContactSection() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
   })

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      // Aquí puedes agregar la lógica para enviar el formulario
      console.log("Formulario enviado:", formData)
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" })
   }

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      })
   }
   return (
      <section id="contact" className="py-20 bg-muted/30">
         <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
               <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contacto</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
               <div>
                  <h3 className="text-2xl font-semibold mb-6">¡Hablemos!</h3>
                  <p className="text-muted-foreground mb-8 text-lg">
                     Estoy siempre interesado en nuevas oportunidades y proyectos emocionantes. Si tienes una idea, un
                     proyecto en mente, o simplemente quieres saludar, no dudes en contactarme.
                  </p>

                  <div className="space-y-6">
                     <div className="flex items-center">
                        <Mail className="h-6 w-6 text-primary mr-4" />
                        <div>
                           <p className="font-medium">Email</p>
                           <p className="text-muted-foreground">Mario_can12@hotmail.com</p>
                        </div>
                     </div>

                     <div className="flex items-center">
                        <Phone className="h-6 w-6 text-primary mr-4" />
                        <div>
                           <p className="font-medium">Teléfono</p>
                           <p className="text-muted-foreground">9868612256</p>
                        </div>
                     </div>

                     <div className="flex items-center">
                        <MapPin className="h-6 w-6 text-primary mr-4" />
                        <div>
                           <p className="font-medium">Ubicación</p>
                           <p className="text-muted-foreground">Tizimin Yucatan, México</p>
                        </div>
                     </div>
                  </div>
               </div>
               <Card>
                  <CardHeader>
                     <CardTitle>Envíame un mensaje</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                           <div>
                              <Label htmlFor="name">Nombre</Label>
                              <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                           </div>
                           <div>
                              <Label htmlFor="email">Email</Label>
                              <Input
                                 id="email"
                                 name="email"
                                 type="email"
                                 value={formData.email}
                                 onChange={handleChange}
                                 required
                              />
                           </div>
                        </div>

                        <div>
                           <Label htmlFor="subject">Asunto</Label>
                           <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                        </div>

                        <div>
                           <Label htmlFor="message">Mensaje</Label>
                           <Textarea
                              id="message"
                              name="message"
                              rows={5}
                              value={formData.message}
                              onChange={handleChange}
                              required
                           />
                        </div>

                        <Button type="submit" className="w-full">
                           <Send className="h-4 w-4 mr-2" />
                           Enviar Mensaje
                        </Button>
                     </form>
                  </CardContent>
               </Card>
            </div>
         </div>
      </section>
   )
}