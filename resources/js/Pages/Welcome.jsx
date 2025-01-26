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
import { useSeoMetaTags } from '@/Composables/useSeoMetaTags';
import WebLayout from '@/Layouts/WebLayout';
import { Icon } from '@iconify/react';
import { Link } from '@inertiajs/react';

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

export default function Welcome({ canLogin, canRegister, seo }) {
  useSeoMetaTags(seo);

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
                  icon="logos:vue"
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

        {/* Features Grid */}
        <section id="features" className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-4xl">Features ✨</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Everything you need to ship faster to production without any hassle.
          </p>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeaturesCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-2">
            <Button asChild>
              <a href="https://docs.larasonic.com" target="_blank" rel="noopener noreferrer">
                <Icon icon="lucide:book-open" className="size-4" aria-hidden="true" />
                Documentation
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href={`${githubUrl}/discussions/categories/roadmap`} target="_blank" rel="noopener noreferrer">
                <Icon icon="lucide:construction" className="size-4" aria-hidden="true" />
                Roadmap
              </a>
            </Button>
          </div>
        </section>

        <section id="pricing" className="border-t">
          <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-center text-2xl font-bold tracking-tight sm:text-4xl">Proudly Open Source 🤑</h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
                Larasonic is and will always be open source. No hidden fees, no premium features.
              </p>
            </div>

            <PricingCard
              className="mx-auto mt-16"
              features={pricingFeatures}
              price={0}
              plan="What's included ?"
              billingPeriod="Free Forever"
            >
              <Button asChild>
                <Link href={route('dashboard')}>Get Started</Link>
              </Button>
            </PricingCard>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t">
          <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-center text-2xl font-bold tracking-tight sm:text-4xl">FAQ</h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
                Frequently asked questions about Larasonic.
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item) => (
                  <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger className="text-left">{item.title}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
    </WebLayout>
  );
}
