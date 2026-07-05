export default function Hero() {
  return (
    <section className="hero bg-gradient-to-br from-base-200 to-base-300 rounded-xl">
      <div className="hero-content text-center py-24">

        <div className="max-w-3xl">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Welcome to DevHub
          </h1>

          <p className="py-6 text-lg opacity-80">
            A community built for developers to learn, share knowledge,
            and grow together through articles, resources, and discussions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary btn-wide">
              Explore Articles
            </button>

            <button className="btn btn-outline btn-wide">
              Join Community
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}