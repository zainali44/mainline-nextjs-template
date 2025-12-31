import { DashedLine } from "@/components/dashed-line";

const stats = [
  {
    value: "52",
    label: "פרשיות שבועיות",
  },
  {
    value: "5",
    label: "שלבים במחזור",
  },
  {
    value: "7",
    label: "ימים לבנייה מחדש",
  },
  {
    value: "∞",
    label: "שבועות לחיזוק",
  },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            מחזור שבועי מובנה לשינוי אמיתי
          </h1>

          <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
            מ"מצרים" מנטלית לתשתית פנימית.
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
            Mindcraft לא עוזר לך לברוח מהמציאות. הוא עוזר לך לתכנן אותה מחדש מבפנים.
            כל שבוע עוקב אחר זרימה ברורה שחוזרת על עצמה כמו ספרינט עיצוב פנימי:
            מודעות ← הרהור ← החלטה ← פעולה ← סקירה.
            <br />
            <br />
            אתה מתחיל באיתור נקודות הלחץ: איפה אתה מגיב, נמנע, מפצה יתר על המידה, 
            או מאבד את עצמך. אז אתה בוחר תחום אחד לבנות מחדש — לא על ידי כפיית מוטיבציה, 
            אלא על ידי התקנת גבול ונקיטת פעולה קונקרטית. בסוף השבוע, 
            אתה לא רק "מבין" משהו — אתה בנית משהו.
          </p>
        </div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pr-10`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 right-0 max-lg:hidden"
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
