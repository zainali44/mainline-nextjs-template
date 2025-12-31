import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
      {/* Images Left - Text Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <ImageSection
          images={[
            { src: "/about/1.webp", alt: "Team collaboration" },
          ]}
          className="xl:-translate-x-10"
        />

        <TextSection
          title="מה Mindcraft עושה"
          paragraphs={[
            "התנ״ך הוא לא רק סיפורים. מתחת לסיפור יש אלגוריתם — תבנית חוזרת של לחץ ← בחירה ← גבול ← אחריות ← התחדשות. Mindcraft מפענח את התבנית הזו ומתרגם אותה לכלים ברורים יום-יומיים להחלטות, הרגלים, מערכות יחסים, כסף והנהגה.",
            "\"מצרים\" כאן היא לא מקום על המפה. זה החלק בחיים שרץ באוטומט: לחץ, פחד, רצון לרצות, חשיבה יתר, תגובתיות מתמדת. Mindcraft עוזר לך לזהות את התבניות האלה, לתת להן שם, ולתכנן מחדש איך אתה פועל — שבוע אחרי שבוע, צעד אחר צעד.",
            "אתה לא צורך תוכן. אתה מריץ תהליך.",
          ]}
          ctaButton={{
            href: "https://play.google.com/store/apps/details?id=com.mindcraft.mindcarft",
            text: "התחל את המחזור השבועי",
          }}
        />
      </div>

      {/* Text Left - Images Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <TextSection
          paragraphs={[
            "זו שיטה: מחזור שבועי מובנה שעוזר לך לצאת מ\"מצרים\" מנטלית (מצב הישרדות אוטומטי) ולבנות תשתית פנימית איתנה שאתה באמת יכול לחיות עליה.",
            "כל שבוע אתה מקבל סט קטן של משימות ממוקדות: שאלות לכתוב עליהן, מיקרו-החלטות לקבל, שיחות ליזום, גבולות לשרטט, והרגלים להתקין. כל משימה קשורה לשלב ספציפי בנרטיב המקראי — אבל כתובה בשפה של החיים המודרניים, לא בטרמינולוגיה דתית.",
            "המטרה היא תנועה: פחות תיאוריה, יותר פעולה כנה. לא \"מעיל יפה\" על אותן תבניות ישנות — תשתית שבאמת משנה את המבנה מתחת.",
          ]}
        />
        <ImageSection
          images={[
            { src: "/about/4.webp", alt: "Team collaboration" },
          ]}
          className="hidden lg:flex xl:translate-x-10"
        />
      </div>
    </section>
  );
};

export default About;

interface ImageSectionProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function ImageSection({ images, className }: ImageSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[2/1.5] overflow-hidden rounded-2xl"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

interface TextSectionProps {
  title?: string;
  paragraphs: string[];
  ctaButton?: {
    href: string;
    text: string;
  };
}

export function TextSection({
  title,
  paragraphs,
  ctaButton,
}: TextSectionProps) {
  return (
    <section className="flex-1 space-y-4 text-lg md:space-y-6">
      {title && <h2 className="text-foreground text-4xl">{title}</h2>}
      <div className="text-muted-foreground max-w-xl space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {ctaButton && (
        <div className="mt-8">
          {ctaButton.href.startsWith('http') ? (
            <a 
              href={ctaButton.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">{ctaButton.text}</Button>
            </a>
          ) : (
            <Link href={ctaButton.href}>
              <Button size="lg">{ctaButton.text}</Button>
            </Link>
          )}
        </div>
      )}
    </section>
  );
}
