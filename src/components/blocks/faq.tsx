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
          "Mindcraft הופך את הפרשה השבועית למערכת הפעלה מעשית לחיים המודרניים. זה לא דרשה דתית או מבחן אמונה — זו שיטה מובנית שעוזרת לך לעבור ממצב הישרדות אוטומטי (\"מצרים\") לבניית תשתית פנימית איתנה שאתה באמת יכול לחיות עליה.",
      },
      {
        question: "האם זה דתי? האם אני צריך להיות דתי כדי להשתמש בזה?",
        answer:
          "לא. Mindcraft משתמש בתנ״ך כמסגרת מבנית — אלגוריתם של לחץ ← בחירה ← גבול ← אחריות ← התחדשות. כל משימה כתובה בשפה של החיים המודרניים, לא בטרמינולוגיה דתית. אתה בונה תשתית פנימית, לא מתרגל דת.",
      },
      {
        question: "במה זה שונה מאפליקציות שיפור עצמי אחרות?",
        answer:
          "רוב האפליקציות נותנות לך השראה או מוטיבציה שדועכת מהר. Mindcraft נותן לך מבנה. אתה לא צורך תוכן — אתה מריץ תהליך שבועי. כל מחזור עוזר לך להחליף תבניות תגובתיות בארכיטקטורה יציבה: ערכים ברורים יותר, גבולות חזקים יותר, החלטות טובות יותר.",
      },
    ],
  },
  {
    title: "המחזור השבועי",
    questions: [
      {
        question: "כמה זמן כל שבוע דורש?",
        answer:
          "כל שבוע כולל סט קטן של משימות ממוקדות — לא שעות של תוכן. תבלה זמן על הרהור כנה, מיקרו-החלטות, שיחות וקביעת גבולות. המטרה היא פעולה קונקרטית, לא צריכה. חשוב על זה כעל ספרינט עיצוב פנימי שחוזר על עצמו מדי שבוע.",
      },
      {
        question: "מה אם אני מפספס שבוע?",
        answer:
          "אתה ממשיך מהמקום שבו אתה נמצא. הפרשיות השבועיות עוקבות אחר מחזור, וכל אחת בונה על תבניות מהנרטיב המקראי. לפספס שבוע לא שובר כלום — פשוט תתחיל עם הפרשה הנוכחית. המבנה מתוכנן לפגוש אותך איפה שאתה נמצא.",
      },
      {
        question: "איך אני יודע אם זה עובד?",
        answer:
          "אתה תשים לב לתנועה, לא רק להבנה. האם אתה משרטט גבולות שלא יכולת קודם? מקבל החלטות ברורות יותר? מגיב פחות ובוחר יותר? שלב הסקירה בכל שבוע עוזר לך לסגור בבהירות ולעקוב אחרי מה שבאמת משתנה במבנה שלך — לא רק ברגשות שלך.",
      },
    ],
  },
  {
    title: "שאלות מעשיות",
    questions: [
      {
        question: "איך נראה שבוע טיפוסי?",
        answer:
          "אתה מתחיל בזיהוי היכן אתה תקוע או מגיב אוטומטית. אז אתה עובר דרך מודעות ← הרהור ← החלטה ← פעולה ← סקירה. כל שלב כולל משימות ספציפיות: שאלות לכתוב עליהן, גבולות לשרטט, שיחות ליזום, הרגלים להתקין. בסוף, אתה בנית משהו — לא רק למדת משהו.",
      },
      {
        question: "איך נראות המשימות?",
        answer:
          "קונקרטיות וספציפיות. לא 'תחשוב על הכרת תודה' — יותר כמו 'זהה שיחה אחת שנמנעת ממנה וכתוב את המשפט הפותח'. כל משימה קשורה לפרשה המקראית השבועית אבל מתורגמת לחיים המודרניים. המטרה היא תנועה: פחות תיאוריה, יותר פעולה כנה.",
      },
      {
        question: "האם אני יכול להשתמש בזה לצד טיפול או תרגולים אחרים?",
        answer:
          "כן. Mindcraft היא מבנה, לא תחליף לטיפול. משתמשים רבים מוצאים שהיא משלימה את התרגולים הקיימים שלהם על ידי מתן קצב שבועי ומסגרת מעשית ליישום מה שהם לומדים במקום אחר.",
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
