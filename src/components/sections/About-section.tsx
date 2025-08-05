import { Code, Palette, Zap } from "lucide-react";
import { Card, CardContent } from "../ui/Card";
import { useTranslations } from "next-intl";

export function AboutSection() {
   const t = useTranslations('about');
   return (
      <section id="about" className="py-20 bg-muted/30">
         <div className="container mx-auto px-4">
            <div className="max-w-4x1 mx-auto">
               <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  {t('title')}
               </h2>
               <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                     <p className="text-lg text-muted-foreground mb-6">
                        {t('description', {
                           years: '4'
                        })}
                     </p>
                     <p className="text-lg text-muted-foreground mb-6">
                        {t('description2')}
                     </p>
                     <p className="text-lg text-muted-foreground">
                        {t('description3')}
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
                        <h3 className="text-xl font-semibold mb-2">{t('tag1')}</h3>
                        <p className="text-muted-foreground">{t('tag1Description')}</p>
                     </CardContent>
                  </Card>

                  <Card>
                     <CardContent className="p-6 text-center">
                        <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{t('tag2')}</h3>
                        <p className="text-muted-foreground">{t('tag2Description')}</p>
                     </CardContent>
                  </Card>

                  <Card>
                     <CardContent className="p-6 text-center">
                        <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{t('tag3')}</h3>
                        <p className="text-muted-foreground">{t('tag3Description')}</p>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </div>
      </section>
   )
}