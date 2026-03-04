type PageContainerProps = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <main className="container mx-auto px-4 md:px-6 lg:px-10">{children}</main>
  );
}
