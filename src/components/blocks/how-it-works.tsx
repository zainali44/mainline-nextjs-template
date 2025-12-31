import { ChevronRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { DashedLine } from "@/components/dashed-line";

const steps = [
  {
    number: "01",
    title: "Awareness",
    description: "Locate the pressure points: where you're reacting, avoiding, or losing yourself.",
  },
  {
    number: "02",
    title: "Reflection",
    description: "Understand the patterns. Name what's running your system automatically.",
  },
  {
    number: "03",
    title: "Decision",
    description: "Choose one area to rebuild. Not forcing motivation, but installing structure.",
  },
  {
    number: "04",
    title: "Action",
    description: "Take concrete steps. Conversations, boundaries, micro-decisions that move.",
  },
  {
    number: "05",
    title: "Review",
    description: "Close the week with clarity, not guilt. Then rebuild forward.",
  },
];

const tasks = [
  {
    title: "Questions to write about",
    description: "Honest reflection prompts tied to the weekly portion",
  },
  {
    title: "Micro-decisions to take",
    description: "Small, concrete choices that build momentum",
  },
  {
    title: "Conversations to initiate",
    description: "Dialogue starters for relationships and boundaries",
  },
  {
    title: "Boundaries to draw",
    description: "Clear lines to hold and stop energy leaks",
  },
  {
    title: "Habits to install",
    description: "Structural changes, not motivational Band-Aids",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-28 lg:py-32">
      <div className="container">
        {/* Header */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            THE WEEKLY CYCLE
          </span>
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-4 lg:mt-24">
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl">
            How it works
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Each week follows a clear flow that repeats like an internal design sprint. 
            You're not consuming content. You're running a process.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {steps.map((step, i) => (
            <Card key={i} className="border-muted relative overflow-hidden">
              <CardContent className="p-6">
                <div className="text-muted-foreground/30 mb-2 font-mono text-5xl font-bold">
                  {step.number}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
              {i < steps.length - 1 && (
                <div className="absolute -right-2 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
                  <ChevronRight className="text-muted-foreground size-6" />
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Tasks Section */}
        <div className="mx-auto mt-20 max-w-4xl lg:mt-32">
          <div className="mb-12 space-y-4">
            <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl">
              Tasks — the core engine
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every week you receive a small set of focused tasks. Each task is tied to 
              a specific step in the biblical narrative — but written in the language of 
              modern life, not religious terminology.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
            {tasks.map((task, i) => (
              <Card key={i} className="border-muted">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted flex size-10 shrink-0 items-center justify-center rounded-lg font-mono text-sm font-bold">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">{task.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {task.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/50 mt-8 rounded-2xl p-8 lg:p-12">
            <p className="text-muted-foreground text-center text-lg leading-relaxed">
              The goal is <span className="text-foreground font-semibold">movement</span>: less theory, more honest action. 
              Not "a nice coat" on top of the same old patterns — a foundation that actually changes the structure underneath.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

