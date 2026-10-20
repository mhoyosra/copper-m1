import Image from "next/image";
import { SiteFooter } from "@/components/copper/site-footer";
import { SiteHeader } from "@/components/copper/site-header";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/copper/catalog";

export default function Home() {
  const products = getProducts();
  const home = products.find((p) => p.id === "copper-home");
  const notes = products.find((p) => p.id === "copper-notes");

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section id="top" data-testid="hero" className="bg-secondary">
          <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
            <div className="flex flex-col items-start gap-6">
              <h1 className="text-4xl font-bold md:text-5xl">
                Meet Copper, the assistant that thinks with you
              </h1>
              <p className="text-muted-foreground text-xl">
                From raw ideas to refined answers.
              </p>
              <Button asChild size="lg" className="h-11 px-6 text-base">
                <a href="#products">See products</a>
              </Button>
            </div>
            <div className="flex items-end justify-center">
              {home && (
                <Image
                  src={home.cutout}
                  alt={`${home.name} ${home.type} in ${home.colors[1]}`}
                  width={1254}
                  height={1254}
                  priority
                  className="h-auto w-3/5"
                />
              )}
              {notes && (
                <Image
                  src={notes.cutout}
                  alt={`${notes.name} ${notes.type} in ${notes.colors[0]}`}
                  width={1254}
                  height={1254}
                  priority
                  className="-ml-6 h-auto w-2/5"
                />
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
