import Link from "next/link";

import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  return (
    <section
      className={cn(
        "bg-background/70 absolute left-1/2 z-50 w-[min(90%,700px)] -translate-x-1/2 rounded-4xl border backdrop-blur-md transition-all duration-300",
        "top-5 lg:top-12",
      )}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="text-xl font-bold tracking-tight">Mindcraft</span>
        </Link>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2.5">
          <a 
            href="https://play.google.com/store/apps/details?id=com.mindcraft.mindcarft"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <span className="relative z-10">כניסה</span>
            </Button>
          </a>
          <a
            href="https://twitter.com/mindcarft"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="size-4" />
            <span className="sr-only">רשתות חברתיות</span>
          </a>
        </div>
      </div>
    </section>
  );
};
