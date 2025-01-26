// import FeaturesCard from '@/Components/FeaturesCard';
// import PricingCard from '@/Components/PricingCard';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/Components/shadcn/ui/accordion';
import { Badge } from '@/Components/shadcn/ui/badge';
import { Button } from '@/Components/shadcn/ui/button';
import WebLayout from '@/Layouts/WebLayout';
import { Icon } from '@iconify/react';

const features = [
  {
    icon: '🚀',
    title: '10x Dev Experience',
    description: 'Ship faster with opinionated Laravel Pint, maximum PHPStan level, and Rector for enhanced code quality and developer productivity.',
  },
  {
    icon: '🐳',
    title: 'Production Docker Ready',
    description: 'Optimized Docker images with Laravel Octane and Sail for lightning-fast development and deployment.',
  },
  {
    icon: '🔑',
    title: 'Advanced Authentication',
    description: 'Complete authentication system with social login, and role-based access control.',
  },
  {
    icon: '💳',
    title: 'Payment Ready',
    description: 'Integrated Laravel Cashier for subscription billing and payment processing so you can focus on building your product.',
  },
  {
    icon: '🌐',
    title: 'API Ready',
    description: 'RESTful API endpoints with Laravel Sanctum authentication and comprehensive documentation.',
  },
  {
    icon: '🎨',
    title: 'Customizable UI',
    description: 'Built with shadcn/ui components, making UI customization a breeze. Easily modify themes, styles, and components to match your brand.',
  },
  {
    icon: '🧠',
    title: 'AI Integration Ready',
    description: 'Pre-configured LLM integrations for OpenAI, Anthropic, and more. Build AI-powered features into your app with minimal setup.',
  },
  {
    icon: '📊',
    title: 'FilamentPHP Admin',
    description: 'Beautiful admin panel powered by FilamentPHP with CRUD operations, charts, and detailed analytics.',
  },
  {
    icon: '✨',
    title: 'Evolving Features',
    description: 'This is just the beginning. Regular updates bring new features, integrations, and improvements to supercharge your development.',
  },
];

const pricingFeatures = [
  'Production-ready Docker setup',
  'Advanced authentication system',
  'AI Integrations',
  'Payment integration ready',
  'API endpoints with Sanctum',
  'Comprehensive documentation',
];

const sponsorLinks = {
  github: 'https://github.com/sponsors/pushpak1300',
  x: 'https://x.com/pushpak1300',
};

const faqItems = [
  {
    value: 'item-1',
    title: 'Is Larasonic really free?',
    content: 'Yes! Larasonic is completely free and open source under the MIT license. You can use it for personal or commercial projects without any restrictions. Feel free to star the repo for showing your intrest.',
  },
  {
    value: 'item-2',
    title: 'How can I contribute?',
    content: 'You can contribute by submitting pull requests, reporting bugs, suggesting features, or helping with documentation. Every contribution is valuable!',
  },
  {
    value: 'item-3',
    title: 'Why should I sponsor?',
    content: "Sponsoring helps ensure the project's long-term sustainability. Your support enables continued maintenance, new features, and improvements that benefit the entire community.",
  },
];

const githubUrl = 'https://github.com/pushpak1300/larasonic';

export default function Welcome({ canLogin, canRegister }) {
  return (
    <WebLayout canLogin={canLogin} canRegister={canRegister}>
      <main>
        <section className="relative overflow-hidden border-b bg-background py-20 sm:py-32">
          <div className="container mx-auto px-4 text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex justify-center">
              <Badge variant="outline" className="rounded-full border bg-primary/10 px-4 py-1 text-xs sm:text-sm">
                ✨ Using PHP 8.3+, Laravel 11, Inertia 2.0 and Tailwind CSS 4+
              </Badge>
            </div>

            <div className="mx-auto max-w-4xl">
              <h1
                className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                style={{ contain: 'layout paint' }}
              >
                <span className="block text-foreground">Modern Laravel</span>
                <span className="mt-2 block bg-linear-to-r from-red-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  SaaS Starter Kit
                </span>
              </h1>
            </div>

            <p
              className="mx-auto mt-6 max-w-2xl text-center text-base text-muted-foreground sm:text-lg md:text-xl"
              style={{ contain: 'layout paint' }}
              fetchpriority="high"
            >
              Ship faster production-ready applications 10x faster with starter kit powered by Laravel Jetstream, Inertia V2,
              and Shadcn/ui.
            </p>

            <div className="mt-10 flex items-center justify-center gap-4 flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="https://larasonic.com/dashboard" target="_blank" rel="noreferrer">
                  View Demo
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <a href={githubUrl} target="_blank" rel="noreferrer">
                  <Icon icon="lucide:github" className="size-4" aria-hidden="true" />
                  Github
                </a>
              </Button>
            </div>

            <div className="mt-16 sm:mt-24">
              <p className="text-sm text-muted-foreground">Trusted by developers worldwide</p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
                <Icon
                  icon="logos:laravel"
                  className="size-8 opacity-75 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                />
                <Icon
                  icon="logos:react"
                  className="size-8 opacity-75 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                />
                <Icon
                  icon="simple-icons:inertia"
                  className="size-8 opacity-75 grayscale transition-all hover:opacity-100 hover:grayscale-0 text-purple-500"
                />
                <Icon
                  icon="logos:tailwindcss-icon"
                  className="size-8 opacity-75 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                />
              </div>
            </div>
          </div>

          <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]" />
        </section>


      </main>
    </WebLayout>
  );
}
