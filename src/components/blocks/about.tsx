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
          title="התורה כאלגוריתם"
          paragraphs={[
            "התורה איננה רק טקסט של אמונה או מוסר, אלא תשתית אלגוריתמית. מערכת הפעלה עתיקה שממפה את חוקי הנפש, את דפוסי ההתנהגות ואת הדרך שבה בני אדם יוצרים מציאות לאורך זמן.",
            "האלגוריתם של התורה לא מדבר רק על 'מה נכון' אלא על 'איך זה עובד'. הוא מתאר תהליכים חוזרים: לחץ שמפעיל תגובה אוטומטית, משבר שמכריח בירור, ואז בנייה מחדש של סדר פנימי.",
            "זו הנדסת תודעה והתנהגות: איך אדם עובר ממצב של הישרדות ותלות במערכות חיצוניות, למצב של בחירה, דיוק, ויצירת מערכת חיים שמשרתת אותו.",
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
            "Mindcraft מוציאה מהפרשה את המנגנון ומנסחת אותו כמודל חיים פרקטי: איפה אנחנו תקועים, איזה דפוס מנהל אותנו, איזה גבול חסר, איזה ערך לא מוגדר, ואיזה צעד קטן יכול להתחיל תנועה אמיתית.",
            "זהו תהליך שמבוסס על רצף ברור: מודעות ← בירור ← החלטה ← פעולה ← בדיקה. כל שבוע הופך למעין 'ספרינט' פנימי שמאפשר לנו להחליף תגובתיות במבנה, ולבנות תשתית שהחיים יכולים לעמוד עליה.",
            "Mindcraft לא מבטלת מסגרות קיימות. היא פשוט מחזירה את התורה למימד נוסף: כשיטה מעשית לבניית אדם. כלי שמאפשר לכל אחד, מכל רקע, להשתמש בקוד העתיק כדי לבנות מערכת חיים מדויקת.",
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
