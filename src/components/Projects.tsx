import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ExternalLink, Trophy, Layout, Palette, FileText } from 'lucide-react';

export function Projects() {
  const projects = {
    hackathons: [
      {
        title: 'VTB API Hackathon 2025',
        description: 'Командная разработка веб-приложения',
        image: '/photo_hackathon.png',
        link: 'https://www.figma.com/design/2z6hnvyrnjTYC3sC7L0y25/%D0%9E%D1%80%D0%BA%D0%B5%D1%81%D1%82%D1%80-ux-ui?node-id=0-1&m=dev&t=eTr9FAQLMiH2IvGN-1',
        tags: ['React', 'Node.js', 'Design', 'Figma', 'UI/UX', 'Animation'],
      },
    ],
    landings: [
      {
        title: 'Лендинг стартапа',
        description: 'Современный одностраничник с анимациями',
        image: '/photo_landing.png',
        link: 'https://www.figma.com/design/dE7XtLqgcDbVozIWqBy5pJ/%D0%9B%D1%8D%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3-TAC-for-wb?node-id=0-1&m=dev&t=Lnzlvwvx9nVjqg8x-1',
        tags: ['Landing', 'Web Design', 'Responsive', 'Figma', 'UI/UX', 'Animation', 'Tilda'],
      },
      
    ],
    creative: [
      {
        title: 'Открытки и плакаты',
        description: 'Набор авторских  открыток и плакатов',
        image: '/055.png',
        tags: ['Illustrator', 'Print', 'Greeting Cards', 'Behance', 'Figma', 'Design'],
        link: 'https://www.behance.net/cd97ae43',
      },
    ],
  };

  const categories = [
    { id: 'all', label: 'Все работы', icon: Layout },
    { id: 'hackathons', label: 'Хакатоны', icon: Trophy },
    { id: 'landings', label: 'Лендинги', icon: FileText },
    { id: 'creative', label: 'Творчество', icon: Palette },
  ];

  const allProjects = [
    ...projects.hackathons,
    ...projects.landings,
    ...projects.creative,
  ];

  const renderProjects = (projectList: typeof allProjects) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectList.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/20 cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </a>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white/50 to-accent/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Мои работы</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            От хакатонов до творческих проектов — всё, что создано с любовью
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 bg-white/50 p-1">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <category.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="mt-0">
              {renderProjects(allProjects)}
            </TabsContent>

            <TabsContent value="hackathons" className="mt-0">
              {renderProjects(projects.hackathons)}
            </TabsContent>

            <TabsContent value="landings" className="mt-0">
              {renderProjects(projects.landings)}
            </TabsContent>

            <TabsContent value="creative" className="mt-0">
              {renderProjects(projects.creative)}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
