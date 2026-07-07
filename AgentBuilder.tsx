export default function AgentBuilder() {
  return (
    <section className="max-w-6xl mx-auto py-16">
      <h2 className="text-3xl font-bold">
        AI Agent Builder
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="border rounded-xl p-6">
          Conservative Strategy
        </div>

        <div className="border rounded-xl p-6">
          Balanced Strategy
        </div>

        <div className="border rounded-xl p-6">
          Aggressive Strategy
        </div>

      </div>
    </section>
  );
}
