import React from "react";

import Link from "next/link";

import { Facebook, Linkedin, Twitter } from "lucide-react";

import { ContactForm } from "@/components/blocks/contact-form";
import { DashedLine } from "@/components/dashed-line";

const contactInfo = [
  {
    title: "Support",
    content: (
      <p className="text-muted-foreground mt-3">
        We're here to help
        <br />
        support@mindcarft.com
      </p>
    ),
  },
  {
    title: "Email us",
    content: (
      <div className="mt-3">
        <div>
          <p className="">General inquiries</p>
          <Link
            href="mailto:hello@mindcarft.com"
            className="text-muted-foreground hover:text-foreground"
          >
            hello@mindcarft.com
          </Link>
        </div>
        <div className="mt-1">
          <p className="">Press</p>
          <Link
            href="mailto:press@mindcarft.com"
            className="text-muted-foreground hover:text-foreground"
          >
            press@mindcarft.com
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: "Follow us",
    content: (
      <div className="mt-3 flex gap-6 lg:gap-10">
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          <Facebook className="size-5" />
        </Link>
        <Link
          href="https://x.com/mindcarft"
          className="text-muted-foreground hover:text-foreground"
        >
          <Twitter className="size-5" />
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          <Linkedin className="size-5" />
        </Link>
      </div>
    ),
  },
];

export default function Contact() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-2xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Get in touch
        </h1>
        <p className="text-muted-foreground mt-4 text-center leading-snug font-medium lg:mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          {contactInfo.map((info, index) => (
            <div key={index}>
              <h2 className="font-medium">{info.title}</h2>
              {info.content}
            </div>
          ))}
        </div>

        <DashedLine className="my-12" />

        {/* Inquiry Form */}
        <div className="mx-auto">
          <h2 className="mb-4 text-lg font-semibold">Inquiries</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
