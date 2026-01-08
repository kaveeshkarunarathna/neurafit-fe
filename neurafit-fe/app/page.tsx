export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-20 text-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            AI-Powered Fitness Platform
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Personalize your workouts, nutrition, and recovery with NeuraFiT
          </h1>
          <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
            Generate adaptive workout plans, build perfectly balanced meal preps, and get
            real-time movement feedback—all from one intelligent dashboard tuned to your
            goals and lifestyle.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button className="rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-500">
            Start free assessment
          </button>
          <button className="rounded-full border border-zinc-200 px-8 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-900">
            Explore platform features
          </button>
        </div>
      </section>

      <section className="border-t border-zinc-100 bg-zinc-50">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 py-16 sm:grid-cols-2">
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-zinc-900">Dynamic Training</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Auto-adjusting workout plans that adapt to every rep, recovery signal, and progress update.
            </p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-zinc-900">Precision Nutrition</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Custom meal guidance built from your macros, biometrics, and taste preferences.
            </p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-zinc-900">Pose Coaching</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Real-time movement analysis to keep every rep safe, efficient, and effective.
            </p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-zinc-900">Progress Intelligence</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Clear analytics, habit tracking, and actionable insights to keep you on track.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
