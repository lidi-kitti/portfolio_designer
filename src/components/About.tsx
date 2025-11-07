import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Trophy, Layers, Heart } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Trophy,
      title: 'Хакатоны',
      description: 'Опыт участия в командных разработках',
    },
    {
      icon: Layers,
      title: 'Лендинги',
      description: 'Создание привлекательных посадочных страниц',
    },
    {
      icon: Heart,
      title: 'Творчество',
      description: 'Открытки и плакаты в свободное время',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Обо мне</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Где встречаются код и креативность
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="/069.png"
                alt="Programming workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl mb-4">Программист днём, дизайнер в душе</h3>
              <p className="text-muted-foreground mb-4">
                Моя основная деятельность — программирование, но дизайн — это то, 
                что наполняет мою жизнь красками. В свободное время я создаю визуальные 
                решения, которые радуют глаз и приносят пользу.
              </p>
              <p className="text-muted-foreground mb-4">
                У меня есть опыт участия в хакатонах, где я научилась работать в команде 
                и создавать продукты в сжатые сроки. Также я создаю лендинги, открытки 
                и плакаты — каждый проект для меня особенный.
              </p>
              <p className="text-muted-foreground">
                Я верю, что сочетание технических навыков и творческого мышления 
                помогает создавать по-настоящему уникальные решения.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-6">
              {highlights.map((item, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
