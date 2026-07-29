// app/(main)/layout.tsx
import Header from "../components/ui/header";
import Footer from "../components/ui/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
