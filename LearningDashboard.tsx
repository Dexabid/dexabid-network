export default function LearningDashboard() {
  return (
    <section className="max-w-5xl mx-auto py-20">

      <div className="grid md:grid-cols-4 gap-6">

        <div className="border rounded-xl p-6">
          Active Agents
          <h2>428</h2>
        </div>

        <div className="border rounded-xl p-6">
          Win Rate
          <h2>67.8%</h2>
        </div>

        <div className="border rounded-xl p-6">
          Prediction Rounds
          <h2>31K</h2>
        </div>

        <div className="border rounded-xl p-6">
          ROI
          <h2>+18.4%</h2>
        </div>

      </div>

    </section>
  );
}
