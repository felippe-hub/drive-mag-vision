import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SalesDrive · Proposta MAG Seguros" },
      { name: "description", content: "Sistema escalável de captação de corretores MAG — segmentação, LPs por cluster, SEO e parcerias institucionais." },
      { name: "author", content: "SalesDrive" },
      { property: "og:title", content: "SalesDrive · Proposta MAG Seguros" },
      { property: "og:description", content: "Sistema escalável de captação de corretores MAG — segmentação, LPs por cluster, SEO e parcerias institucionais." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "SalesDrive · Proposta MAG Seguros" },
      { name: "twitter:description", content: "Sistema escalável de captação de corretores MAG — segmentação, LPs por cluster, SEO e parcerias institucionais." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a2b52471-b0d7-41bd-a2ff-4b64a280790d/id-preview-f3cf01b3--9ada16a3-28cc-44f2-903a-72df250155d4.lovable.app-1777384990096.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a2b52471-b0d7-41bd-a2ff-4b64a280790d/id-preview-f3cf01b3--9ada16a3-28cc-44f2-903a-72df250155d4.lovable.app-1777384990096.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
