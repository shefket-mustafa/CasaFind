
type LegalLayoutProps = {
    title: string;
    updated?: string; // e.g., "August 19, 2025"
    children: React.ReactNode;
  };

  export default function LegalLayout({ title, updated, children }: LegalLayoutProps) {
    return (
      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 py-10">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">{title}</h1>
            {updated && (
              <p className="text-sm text-gray-500 mt-1">
                Last updated: {updated}
              </p>
            )}
          </header>
          <div className="prose prose-sm sm:prose base:text-gray-800 max-w-none">
            {children}
          </div>
        </section>
      </main>
    );
  }