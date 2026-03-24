import "./globals.css";

export const metadata = {
  title: "Courtney Lashley | GTM & Strategic Partnerships Leader",
  description:
    "Strategic partnerships and GTM leader driving enterprise growth, partner ecosystems, and revenue acceleration across SaaS, cloud, and cybersecurity.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
