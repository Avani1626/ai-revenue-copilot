export default function Home() {
  console.log("AI REVENUE COPILOT PAGE");
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="max-w-3xl text-center px-6">
        <p className="text-sm uppercase tracking-widest text-gray-400">
          AI Revenue Copilot
        </p>

        <h1 className="mt-4 text-5xl font-bold md:text-7xl">
          Predict customer churn before it happens.
        </h1>

        <p className="mt-6 text-lg text-gray-400">
          Identify at-risk customers, understand why they're leaving,
          and get AI-powered recommendations to retain them.
        </p>

        <button className="mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-black">
          Coming July 2026
        </button>
      </div>
    </main>
  );
}