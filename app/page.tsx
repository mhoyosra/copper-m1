import Image from "next/image";
import { SiteFooter } from "@/components/copper/site-footer";
import { SiteHeader } from "@/components/copper/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatUsd, getProducts } from "@/lib/copper/catalog";

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
        <section
          id="products"
          data-testid="products"
          className="scroll-mt-16 py-16 md:py-24"
        >
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="mb-10 text-3xl font-bold md:text-4xl">
              Meet the Copper family
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {products.map((product) => (
                <Card
                  key={product.id}
                  data-testid="product-card"
                  data-product={product.id}
                >
                  <div className="bg-secondary flex justify-center p-6">
                    <Image
                      src={product.cutout}
                      alt={`${product.name} ${product.type}`}
                      width={1254}
                      height={1254}
                      className="h-auto w-3/5"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                      {product.name}
                    </CardTitle>
                    <p className="text-muted-foreground">{product.type}</p>
                    <p className="text-primary text-2xl font-bold">
                      {formatUsd(product.priceUsd)}
                    </p>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <ul className="flex flex-col gap-3">
                      {product.features.map((feature) => (
                        <li key={feature.name}>
                          <span className="font-semibold">{feature.name}.</span>{" "}
                          <span className="text-muted-foreground">
                            {feature.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color) => (
                        <Badge key={color} variant="secondary">
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
