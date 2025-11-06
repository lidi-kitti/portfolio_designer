import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Linkedin, Github, Palette } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/lida.presnukhina@mail.ru', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Новое сообщение от ${formData.name}`,
        })
      });

      if (response.ok) {
        toast.success('Спасибо за сообщение! Я обязательно отвечу.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Ошибка отправки');
      }
    } catch (error) {
      toast.error('Произошла ошибка при отправке. Попробуйте позже.');
      console.error('Ошибка отправки формы:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'https://e.mail.ru/compose/?to=lida.presnukhina@mail.ru',
      color: 'hover:bg-primary/10',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/lidi-kitti',
      color: 'hover:bg-primary/10',
    },
    {
      icon: Palette,
      label: 'Behance',
      href: 'https://www.behance.net/cd97ae43/projects',
      color: 'hover:bg-primary/10',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-accent/30 to-white/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Свяжитесь со мной</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Давайте создадим что-то прекрасное вместе!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-6">Отправить сообщение</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Ваше сообщение"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={5}
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Отправка...' : 'Отправить'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-4">Где меня найти</h3>
                <p className="text-muted-foreground mb-6">
                  Открыта для интересных проектов и сотрудничества. 
                </p>
                <div className="space-y-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all ${link.color} border border-primary/10`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <link.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-2">О проектах</h3>
                <p className="text-muted-foreground">
                  Готова помочь с дизайном лендингов, созданием визуальных материалов 
                  или участием в хакатонах. Люблю работать над проектами, 
                  где важна эстетика и внимание к деталям.
                  Также открыта для сотрудничества в качестве программиста.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
