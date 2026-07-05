import Hero from "../components/Hero";
import ArticleCard from "../components/ArticleCard";
import ResourceCard from "../components/ResourceCard";
import TeamCard from "../components/TeamCard";

export default function Home() {
  const articles = [
    {
      id: "1",
      title: "Understanding React Hooks",
      description: "Learn how useState and useEffect work in real applications.",
      author: "Jane Doe",
    },
    {
      id: "2",
      title: "State Management with Redux Toolkit",
      description: "A simple guide to managing global state efficiently.",
      author: "John Smith",
    },
    {
      id: "3",
      title: "Building Responsive Layouts with Tailwind",
      description: "How to create modern UIs quickly using utility classes.",
      author: "Alex Johnson",
    },
  ];

  const resources = [
    {
      id: "1",
      title: "React Docs",
      type: "Docs",
      link: "https://react.dev",
    },
    {
      id: "2",
      title: "Redux Toolkit",
      type: "Docs",
      link: "https://redux-toolkit.js.org",
    },
    {
      id: "3",
      title: "Tailwind Cheatsheet",
      type: "Cheatsheet",
      link: "https://tailwindcss.com",
    },
  ];

  const team = [
    {
      id: "1",
      name: "Emma Wilson",
      role: "Frontend Developer",
      bio: "Specializes in React and UI development.",
    },
    {
      id: "2",
      name: "Liam Brown",
      role: "Backend Developer",
      bio: "Builds APIs and scalable backend systems.",
    },
    {
      id: "3",
      name: "Sophia Lee",
      role: "UI/UX Designer",
      bio: "Designs clean and modern user interfaces.",
    },
  ];

  return (
    <div className="space-y-24">

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-4">About DevHub</h2>
        <p className="opacity-80 leading-relaxed">
          DevHub is a community platform where developers can learn,
          share articles, explore resources, and connect with others.
          It is built to encourage growth through collaboration and knowledge sharing.
        </p>
      </section>

      {/* ARTICLES */}
      <section className="px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </section>

      {/* RESOURCES */}
      <section className="bg-base-200 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Useful Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((res) => (
              <ResourceCard key={res.id} {...res} />
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Meet the Team
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member) => (
            <TeamCard key={member.id} {...member} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary/10 to-base-200 py-20 text-center rounded-xl mx-6">
        <h2 className="text-3xl font-bold mb-4">
          Start Learning Today
        </h2>

        <p className="mb-6 opacity-80">
          Join the community and begin exploring developer knowledge.
        </p>

        <button className="btn btn-primary btn-wide">
          Get Started
        </button>
      </section>

    </div>
  );
}