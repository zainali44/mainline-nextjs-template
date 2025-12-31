import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "מודעות ← בירור",
    description: "איפה אתה תקוע, איזה דפוס מנהל אותך, איזה גבול חסר.",
    icon: CircleDot,
  },
  {
    title: "החלטה ← פעולה",
    description: "צעד קטן שמתחיל תנועה אמיתית, לא מוטיבציה רגעית.",
    icon: Blend,
  },
  {
    title: "בדיקה ← מבנה",
    description: "החלפת תגובתיות במבנה, בניית תשתית שהחיים עומדים עליה.",
    icon: Diamond,
  },
  {
    title: "רצף שבועי",
    description: "ספרינט פנימי שחוזר כל שבוע, מהפרשה למודל חיים.",
    icon: ChartNoAxesColumn,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
            התורה כמערכת הפעלה
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-2xl">
            לא סיפורים. אלגוריתם.
          </p>
          
          <p className="text-muted-foreground mt-4 text-base md:text-lg leading-relaxed">
            Mindcraft מתרגמת את התורה למבנה עבודה שבועי. הפרשה היא מפה, אבל מתחת למפה יש מנגנון — 
            רצף של כללים, גבולות ושלבים שמגדירים איך מתקדמים מתוך מצוקה, איך בונים יציבות, 
            ואיך לא מאבדים את עצמנו תוך כדי תנועה.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild size="lg">
              <a 
                href="https://play.google.com/store/apps/details?id=com.mindcraft.mindcarft"
                target="_blank"
                rel="noopener noreferrer"
              >
                להורדה של האפליקציה עבור משתמשי
              </a>
            </Button>
            <Button
              variant="outline"
              className="from-background gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
              size="lg"
            >
              <a
                href="/about"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                איך זה עובד
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pr-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 right-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
