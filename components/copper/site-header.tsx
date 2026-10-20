import Link from "next/link";
import { Logo } from "@/components/copper/logo";
import { ModeToggle } from "@/components/copper/mode-toggle";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#products", label: "Products" },
  { href: "#plus", label: "Copper Plus" },
  { href: "#privacy", label: "Privacy" },
];

export function SiteHeader() {
  return (
    <header
      data-testid="site-header"
      className="bg-background sticky top-0 z-50 border-b"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" aria-label="Copper State Labs home">
          <Logo className="w-44" />
        </Link>
        <div className="flex items-center gap-1">
          <nav aria-label="Main" className="hidden items-center gap-1 sm:flex">
            {NAV_LINKS.map((link) => (
              <Button key={link.href} asChild variant="ghost">
                <a href={link.href}>{link.label}</a>
              </Button>
            ))}
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
