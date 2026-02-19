import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JetRocket | Launch Your Startup at Light Speed",
  description:
    "JetRocket is the all-in-one analytics and growth platform that helps startups understand their users, optimize funnels, and scale revenue.",
};

export default function JetRocketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
