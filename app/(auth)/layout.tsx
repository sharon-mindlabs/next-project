export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="authentication-page">{children}</div>;
}
