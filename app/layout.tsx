import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlightLog Viz — Turn Pilot Logbook Data Into Shareable Flight Visualizations",
  description: "Convert your pilot logbook exports into interactive maps, charts, and social media content. Built for commercial and private pilots.",
  openGraph: {
    title: "FlightLog Viz — Turn Pilot Logbook Data Into Shareable Flight Visualizations",
    description: "Convert your pilot logbook exports into interactive maps, charts, and social media content.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="06ef8274-1139-42c9-ae17-0a5e6eb0cedb"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
