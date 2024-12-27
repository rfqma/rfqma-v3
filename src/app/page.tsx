import { Avatar } from '@nextui-org/avatar';
import { Chip } from '@nextui-org/chip';
import { MapPin, ChevronDown } from 'lucide-react';
import { Github, Linkedin, Instagram, Youtube, Mails } from 'lucide-react';
import { CgPexels } from 'react-icons/cg';
import { Link } from '@nextui-org/link';
import { Linner, LinnerTime } from 'linner';
import IconCloud from '@/components/magicui/icon-cloud';
import BlurIn from '@/components/magicui/blur-in';
import TypingAnimation from '@/components/magicui/typing-animation';
import { CoolMode } from '@/components/magicui/cool-mode';
import { Snippet } from '@nextui-org/snippet';

interface TimeProps {
  title: string;
  description: string;
  date: {
    from: string;
    to: string;
  };
  iconVariant:
    | 'PlusIcon'
    | 'CheckedIcon'
    | 'BlankIcon'
    | 'CalendarIcon'
    | 'XIcon';
}

export default function Home() {
  const socials = [
    {
      name: 'info@rfqma.xyz',
      path: 'https://mail.google.com/mail/?view=cm&fs=1&to=info@rfqma.xyz',
      target: '_blank',
      disabled: false,
      icon: Mails,
    },
    {
      name: 'rifqimaulanax@gmail.com',
      path: 'https://mail.google.com/mail/?view=cm&fs=1&to=rifqimaulanax@gmail.com',
      target: '_blank',
      disabled: false,
      icon: Mails,
    },
    {
      name: 'GitHub',
      path: 'https://github.com/rfqma',
      target: '_blank',
      disabled: false,
      icon: Github,
    },
    {
      name: 'LinkedIn',
      path: 'https://www.linkedin.com/in/rfqma',
      target: '_blank',
      disabled: false,
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      path: 'https://instagram.com/maruarchive',
      target: '_blank',
      disabled: false,
      icon: Instagram,
    },
    {
      name: 'Pexels',
      path: 'https://www.pexels.com/@rifqi-maulana-286675026/',
      target: '_blank',
      disabled: false,
      icon: CgPexels,
    },
    {
      name: 'YouTube',
      path: 'https://www.youtube.com/@maruarchive',
      target: '_blank',
      disabled: false,
      icon: Youtube,
    },
  ];

  const times: TimeProps[] = [
    {
      title: 'PT. Pertamina EP Cepu',
      description: 'Software Engineer',
      date: {
        from: 'jun 2024',
        to: 'nov 2024',
      },
      iconVariant: 'CheckedIcon',
    },
    {
      title: 'Oetama Solutions',
      description: 'Software Engineer',
      date: {
        from: 'mar 2024',
        to: 'present',
      },
      iconVariant: 'PlusIcon',
    },
    {
      title: 'PT. Angkasa Pura I, Yogyakarta International Airport',
      description: 'Airport Quality Management Intern Staff',
      date: {
        from: 'jul 2023',
        to: 'sep 2023',
      },
      iconVariant: 'CheckedIcon',
    },
    {
      title: 'Techave.dev',
      description: 'Front End Developer',
      date: {
        from: 'apr 2023',
        to: 'may 2023',
      },
      iconVariant: 'CheckedIcon',
    },
    {
      title: 'Mora Studio',
      description: 'Videographer',
      date: {
        from: 'dec 2020',
        to: 'nov 2021',
      },
      iconVariant: 'CheckedIcon',
    },
  ];

  const slugs = [
    'typescript',
    'javascript',
    'dart',
    'react',
    'flutter',
    'android',
    'html5',
    'css3',
    'nodedotjs',
    'express',
    'nextdotjs',
    'prisma',
    // 'amazonaws',
    'googlecloud',
    'mongodb',
    'postgresql',
    'firebase',
    'nginx',
    'vercel',
    'docker',
    'git',
    'github',
    'gitlab',
    'visualstudiocode',
    'androidstudio',
    'figma',
    'tailwindcss',
    'adobepremierepro',
    'nextui',
    'nextcloud',
    'hono',
    'contabo',
    'ubuntu',
    'php',
    'phpmyadmin',
    'laravel',
    'supabase',
    'mysql',
    'cloudflare',
    'cloudinary',
    'cplusplus',
    'python',
    'adobeaftereffects',
    'davinciresolve',
    'adobelightroomclassic',
  ];

  return (
    <main className="flex z-50 min-h-screen flex-col items-center py-24 px-10">
      <div className="flex flex-col max-w-2xl w-full">
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-between sm:items-center">
          <CoolMode>
            <Avatar
              src="/images/rifqimaulana-headshot.png"
              className="z-20 w-28 h-28 text-large flex sm:hidden cursor-pointer"
              isBordered
              radius="full"
              color="success"
            />
          </CoolMode>

          <div className="flex flex-col">
            <BlurIn
              word="Rifqi Maulana"
              className="text-4xl sm:text-6xl font-bold text-black dark:text-white"
            />

            <TypingAnimation
              className="text-base font-normal text-start"
              text="CS Student / Fullstack Developer / Photographer / Videographer"
              duration={50}
            />

            <div className="flex flex-col mt-2 gap-2">
              <Chip
                startContent={<MapPin size={18} />}
                variant="flat"
                color="success"
                size="sm"
              >
                Yogyakarta, Indonesia
              </Chip>
              <Link href="#socials">
                <Chip
                  variant="dot"
                  color="success"
                  size="sm"
                  endContent={<ChevronDown size={12} color="gray" />}
                >
                  available for new projects
                </Chip>
              </Link>
            </div>
          </div>
          <CoolMode>
            <Avatar
              src="/images/rifqimaulana-headshot.png"
              className="w-28 h-28 text-large hidden sm:flex cursor-pointer"
              isBordered
              radius="full"
              color="success"
            />
          </CoolMode>
        </div>

        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mt-8">who am i?</h2>
          <p className="mt-4">
            I&#39;m an undergraduate Computer Science student based in
            Yogyakarta, Indonesia, where I excel in problem-solving, critical
            thinking, and adaptability in navigating new environments and
            processes. Alongside my studies, I freelance in web and mobile
            development, applying my skills and creativity to create innovative
            solutions.
          </p>
          <p className="mt-2">
            In addition to my tech work, I have a passion for photography and
            videography, which I pursue as a hobby and a way to generate income.
            This creative outlet enhances my ability to tell compelling stories
            through digital media. I am dedicated to delivering high-quality
            content that resonates with audiences while focusing on my core
            expertise in computer science.
          </p>
        </div>

        <div className="flex flex-col" id="socials">
          <h2 className="text-2xl font-bold mt-8">
            still &apos;who am i?&apos; but cli-based
          </h2>
          <Link href="https://www.npmjs.com/package/card-flex" target="_blank">
            <Chip
              variant="flat"
              color="secondary"
              size="sm"
              className="mb-1 mt-2"
            >
              card-flex by @depapp
            </Chip>
          </Link>
          <Snippet size="sm" variant="flat" color="default">
            npx rfqma
          </Snippet>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-8">
            interested in working with me?
          </h2>
          <span>reach me through my socials</span>
          {socials.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              target={item.target}
              className="flex items-center gap-2 mt-4"
              color="secondary"
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-8">experiences</h2>
          <span>quick summary of my most recent experiences</span>
          <Linner className="mt-4">
            {times.map((time) => (
              <LinnerTime key={time.title} variant="default" {...time} />
            ))}
          </Linner>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-8">skills</h2>
          {/* <span>tools or technologies i usually use</span> */}
          <span>tools or technologies i&#39;ve been working with</span>
          <div className="relative flex h-full w-full max-w-4xl items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    </main>
  );
}
