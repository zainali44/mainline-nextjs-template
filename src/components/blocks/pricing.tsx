"use client";

import { useState } from "react";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "חינם",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    description: "התחל לקרוא את הקוד",
    features: [
      "גישה למחזור השבועי",
      "המנגנון הבסיסי מכל פרשה",
      "כלי זיהוי דפוסים",
      "מסגרת הרצף: מודעות → פעולה → בדיקה",
    ],
  },
  {
    name: "פרמיום",
    monthlyPrice: "$12",
    yearlyPrice: "$9",
    features: [
      "כל התכונות החינמיות ו...",
      "52 פרשיות כמודל עבודה מלא",
      "כלים מתקדמים לבניית גבולות",
      "ניתוח עמוק של תבניות אישיות",
      "תמיכה עדיפות",
      "גישה אופליין",
    ],
  },
  {
    name: "לכל החיים",
    monthlyPrice: "$299",
    yearlyPrice: "$299",
    features: [
      "כל תכונות הפרמיום",
      "תשלום חד-פעמי",
      "גישה לכל עדכון עתידי",
      "גישה מוקדמת לכלים חדשים",
      "ייעוץ אישי 1:1 לבניית מבנה",
    ],
  },
];

export const Pricing = ({ className }: { className?: string }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 flex flex-col items-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl text-center" dir="rtl" style={{ unicodeBidi: 'isolate' }}>
            מקוד עתיק למערכת חיים
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance text-center" dir="rtl" style={{ unicodeBidi: 'isolate' }}>
            התחל עם המחזור השבועי בחינם. שדרג כדי לקבל גישה מלאה למנגנון: 
            52 פרשיות כמודל עבודה, כלים לזיהוי תבניות, ומסגרת לבניית תשתית שלא מתמוטטת.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-3 lg:mt-20">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`${
                plan.name === "Premium"
                  ? "outline-primary origin-top outline-4"
                  : ""
              }`}
            >
              <CardContent className="flex flex-col gap-7 px-6 py-5">
                <div className="space-y-2">
                  <h3 className="text-foreground font-semibold">{plan.name}</h3>
                  <div className="space-y-1">
                    <div className="text-muted-foreground text-lg font-medium">
                      {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}{" "}
                      {plan.name !== "Free" && (
                        <span className="text-muted-foreground">
                          per user/
                          {isAnnual ? "year" : "month"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {plan.name !== "חינם" ? (
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={isAnnual}
                      onCheckedChange={() => setIsAnnual(!isAnnual)}
                      aria-label="Toggle annual billing"
                    />
                    <span className="text-sm font-medium">חיוב שנתי</span>
                  </div>
                ) : (
                  <span className="text-muted-foreground text-sm">
                    {plan.description}
                  </span>
                )}

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-1.5"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-fit"
                  variant={plan.name === "פרמיום" ? "default" : "outline"}
                >
                  {plan.name === "לכל החיים" ? "קבל גישה לכל החיים" : "התחל"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
