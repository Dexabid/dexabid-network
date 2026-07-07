const features = [
  "AI Trading Agents",
  "Prediction Markets",
  "Strategy Builder",
  "Risk Management",
  "Continuous Learning",
  "Solana Native"
];

export default function Features() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Core Features
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature}
            className="border rounded-xl p-6"
          >
            {feature}
          </div>
        ))}
      </div>
    </section>
  );
}
