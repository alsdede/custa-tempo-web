import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custa Tempo",
  description: "Descubra quanto tempo você precisa trabalhar para comprar qualquer coisa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
