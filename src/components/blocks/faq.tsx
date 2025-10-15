import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Getting Started",
    questions: [
      {
        question: "What is Mind Carft?",
        answer:
          "Mind Carft is your personal growth companion designed to strengthen your mind and elevate your well-being every day. Powered by AI, it delivers carefully crafted exercises and insightful content based on Thelium's proven methods to enhance focus, clarity, emotional balance, and resilience.",
      },
      {
        question: "How does Mind Carft work?",
        answer:
          "Mind Carft uses advanced AI to personalize your experience. Each day, you'll receive exercises tailored to your journey and progress. The app learns from your interactions and adapts to provide the most effective practices for your personal growth.",
      },
      {
        question: "What are Thelium methods?",
        answer:
          "Thelium methods are proven psychological techniques and frameworks that form the foundation of Mind Carft's exercises. These evidence-based practices have been refined over years to deliver real, measurable improvements in mental strength and emotional well-being.",
      },
    ],
  },
  {
    title: "Your Journey",
    questions: [
      {
        question: "How much time do I need to commit each day?",
        answer:
          "Mind Carft is designed to fit into your daily routine. Most exercises take between 5-15 minutes. Consistency matters more than duration—even a few minutes daily can create meaningful change over time.",
      },
      {
        question: "How long before I see results?",
        answer:
          "Many users report feeling more focused and balanced within the first week. However, lasting transformation typically develops over 3-4 weeks of consistent practice as new neural pathways form and habits strengthen.",
      },
      {
        question: "Can I track my progress?",
        answer:
          "Yes! Mind Carft includes comprehensive progress tracking that shows your growth in focus, clarity, emotional balance, and resilience. Premium members get access to detailed analytics and insights.",
      },
    ],
  },
  {
    title: "Pricing & Plans",
    questions: [
      {
        question: "Is there a free version?",
        answer:
          "Yes! Our free plan includes daily personalized exercises, basic AI recommendations, progress tracking, and community access. You can upgrade anytime to unlock advanced features and unlimited content.",
      },
      {
        question: "What's included in Premium?",
        answer:
          "Premium includes advanced AI personalization, unlimited exercise library, detailed analytics & insights, priority support, and offline access. It's designed for those committed to deep, sustained personal growth.",
      },
      {
        question: "Can I cancel my subscription anytime?",
        answer:
          "Absolutely. You can cancel your subscription at any time with no penalties. Your premium access will continue until the end of your current billing period.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              If you can't find what you're looking for,{" "}
              <Link href="/contact" className="underline underline-offset-4">
                get in touch
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
