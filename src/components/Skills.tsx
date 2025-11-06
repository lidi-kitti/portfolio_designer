import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Code2, Figma, Palette, Layout, Layers, Sparkles } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      icon: Code2,
      title: 'Программирование',
      description: 'Frontend и Backend разработка',
      color: 'from-primary/20 to-primary/10',
    },
    {
      icon: Figma,
      title: 'Figma',
      description: 'Прототипирование и UI-UX дизайн',
      color: 'from-accent to-secondary',
    },
    {
      icon: Palette,
      title: 'Графический дизайн',
      description: 'Открытки, плакаты, иллюстрации',
      color: 'from-secondary to-accent',
    },
    {
      icon: Layout,
      title: 'Web Design',
      description: 'Лендинги и адаптивные интерфейсы',
      color: 'from-primary/10 to-accent',
    },
    {
      icon: Layers,
      title: 'Работа в команде',
      description: 'Опыт хакатонов и коллаборации',
      color: 'from-accent to-primary/10',
    },
    {
      icon: Sparkles,
      title: 'Креативность',
      description: 'Нестандартные решения и идеи',
      color: 'from-primary/20 to-secondary',
    },
  ];

  const techStack = {
    programming: ['React', 'Node.js', 'Python', 'Git', 'TypeScript', "FastAPI", "SQL", "Docker", "RabbitMQ", "PyCharm"],
    design: ['Figma', 'Adobe Illustrator', 'Photoshop', 'Canva', 'Sketch', 'Tilda'],
  };

  return (
    <section id="skills" className="py-24 bg-white/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Навыки</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Сочетание технических знаний и творческого подхода
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/20 group">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <skill.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="mb-2">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20 bg-gradient-to-br from-white to-primary/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3>Технологии</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {techStack.programming.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <span className="px-4 py-2 bg-white rounded-full border border-primary/20 text-sm hover:bg-primary/10 transition-colors">
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-white to-accent/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                  <h3>Дизайн-инструменты</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {techStack.design.map((tool, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <span className="px-4 py-2 bg-white rounded-full border border-primary/20 text-sm hover:bg-primary/10 transition-colors">
                        {tool}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
