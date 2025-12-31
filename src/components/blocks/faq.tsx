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
    title: "מתחילים",
    questions: [
      {
        question: "מה זה Mindcraft?",
        answer:
          "Mindcraft מתרגמת את התורה למבנה עבודה שבועי. במקום לקרוא את הסיפורים כסיפורים, אנחנו קוראים אותם כקוד — אלגוריתם של לחץ, בחירה, גבולות ובנייה מחדש. כל שבוע הופך לספרינט פנימי שמאפשר לך להחליף תגובתיות במבנה ולבנות תשתית שהחיים יכולים לעמוד עליה.",
      },
      {
        question: "האם זה דתי?",
        answer:
          "לא במובן המקובל. Mindcraft מחזירה את התורה למימד נוסף: כשיטה מעשית לבניית אדם. זו לא אמונה או פולחן, אלא מודל — כלי שמאפשר לכל אחד, מכל רקע, להשתמש בקוד העתיק כדי לבנות מערכת חיים מדויקת: ערכים ברורים, גבולות יציבים, החלטות איכותיות.",
      },
      {
        question: "איך זה עובד בפועל?",
        answer:
          "כל שבוע עוקב אחר רצף ברור: מודעות ← בירור ← החלטה ← פעולה ← בדיקה. אתה מזהה איפה אתה תקוע, איזה דפוס מנהל אותך, איזה גבול חסר, ואיזה צעד קטן יכול להתחיל תנועה. זה לא מוטיבציה רגעית — זו תשתית שמשנה את המבנה מתחת.",
      },
    ],
  },
  {
    title: "התהליך",
    questions: [
      {
        question: "מה המקור של השיטה?",
        answer:
          "התורה בנויה כרצף של מנגנונים חוזרים: לחץ שמפעיל תגובה, משבר שמכריח בירור, בנייה מחדש של סדר פנימי. Mindcraft מוציאה את המנגנון מהסיפור ומתרגמת אותו למודל עבודה — לא כתיאוריה אלא כתהליך שאפשר להריץ שבוע אחרי שבוע.",
      },
      {
        question: "למה לא סתם לקרוא את הפרשה?",
        answer:
          "כשקוראים את התורה כסיפורים, מקבלים השראה רגעית או ויכוח רעיוני. כשקוראים אותה כקוד, מקבלים מודל: רצף של כללים, גבולות, שלבים ותנאים שמגדירים איך מתקדמים. Mindcraft לא מחליפה קריאה — היא מוסיפה שכבה: תרגום לפעולה.",
      },
      {
        question: "איך זה קשור לחיים שלי?",
        answer:
          "האלגוריתם של התורה מדבר על איך זה עובד, לא רק על מה נכון. איך אדם עובר ממצב של הישרדות ותלות במערכות חיצוניות, למצב של בחירה, דיוק, ויצירת מערכת חיים שמשרתת אותו. Mindcraft מתרגמת את זה לכלים קונקרטיים: איפה אתה תקוע, איזה דפוס מנהל אותך, ומה הצעד הבא.",
      },
    ],
  },
  {
    title: "למי זה מיועד",
    questions: [
      {
        question: "האם זה רק למי שמכיר את התורה?",
        answer:
          "לא. Mindcraft מנסחת את המנגנון בשפה אוניברסלית. אתה לא צריך רקע — המערכת מתרגמת את הקוד העתיק למודל מעשי שכל אחד יכול להריץ. זה כלי לבניית אדם, לא מבחן ידע.",
      },
      {
        question: "איך זה לא סותר מסגרות דתיות קיימות?",
        answer:
          "Mindcraft לא מבטלת מסגרות ולא נלחמת בהן. היא פשוט מרחיבה את ההגדרה של התורה מעבר למסגור מצומצם. במהלך הדורות, התורה הפכה עבור חלקים מהאנשים בעיקר לשפה של זהות או פולחן. Mindcraft מחזירה אותה גם למימד של מנגנון פנימי — כלי שמאפשר לבנות תשתית חיים.",
      },
      {
        question: "מה אני אקבל בפועל?",
        answer:
          "מבנה עבודה שבועי שמאפשר לך להחליף תגובתיות במבנה. במקום להסתמך על מוטיבציה רגעית, אתה בונה תשתית: ערכים ברורים, גבולות יציבים, החלטות איכותיות, ומסלול התקדמות שאינו מאבד אותך תוך כדי תנועה.",
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
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl" dir="rtl" style={{ unicodeBidi: 'isolate' }}>
                יש שאלות?
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl" dir="rtl" style={{ unicodeBidi: 'isolate' }}>
                יש שאלות?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto" dir="rtl" style={{ unicodeBidi: 'isolate' }}>
              אם אתה לא מוצא את מה שאתה מחפש,{" "}
              <Link href="/contact" className="underline underline-offset-4">
                צור קשר
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
