import { DashedLine } from "@/components/dashed-line";

const stats = [
  {
    value: "100K+",
    label: "Active users",
  },
  {
    value: "2M+",
    label: "Exercises completed",
  },
  {
    value: "95%",
    label: "User satisfaction",
  },
  {
    value: "50+",
    label: "Countries worldwide",
  },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Empowering personal growth worldwide
          </h1>

          <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
            Mind Carft is bringing mental wellness to life with AI and Thelium's wisdom.
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
            At Mind Carft, we are dedicated to making personal growth accessible,
            effective, and sustainable for everyone. Our mission is to provide you
            with scientifically-backed exercises and AI-powered personalization that
            truly transforms your mental well-being. We believe that mental strength
            is cultivated through consistent, mindful practice.
            <br />
            <br />
            We're growth-obsessed — investing in research and technology to deliver
            practices that create real, lasting change. Your transformation is our
            purpose. Every exercise, every insight, every feature is designed to
            help you unlock your full potential and live with greater clarity,
            focus, and emotional balance.
          </p>
        </div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="font-display text-4xl tracking-wide md:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
