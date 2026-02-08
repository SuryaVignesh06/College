
import { Hero } from "@/components/hero";
import { LatestPosts } from "@/components/latest-posts";
import { Organization } from "@/components/organization";
import { Recruiters } from "@/components/recruiters";
import { FeaturedLinks } from "@/components/featured-links";
import { KeyFigures } from "@/components/key-figures";
import { Community } from "@/components/community";

import { NewsletterCTA } from "@/components/newsletter-cta";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <LatestPosts />
      <Organization />
      <Recruiters />
      <FeaturedLinks />
      <KeyFigures />
      <Community />
      <NewsletterCTA />
    </div>
  );
}
