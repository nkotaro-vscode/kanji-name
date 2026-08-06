import { NameForm } from "@/components/NameForm";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-crimson/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a962' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 py-16 md:py-24">
        {/* Header */}
        <header className="text-center mb-16 max-w-xl">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            漢字 Name
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-paper mb-4 tracking-tight">
            Discover Your
            <span className="block text-gold mt-1">Japanese Character</span>
          </h1>
          <p className="text-paper-muted text-lg font-light leading-relaxed">
            Enter your Western name and receive beautiful kanji crafted with
            meaning — a personal emblem rooted in Japanese aesthetics.
          </p>
        </header>

        <NameForm />

        {/* Footer */}
        <footer className="mt-24 text-center text-paper-muted/50 text-sm">
          <p>Crafted with reverence for the art of kanji</p>
        </footer>
      </div>
    </main>
  );
}
