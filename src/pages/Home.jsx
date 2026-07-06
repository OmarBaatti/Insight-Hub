import Hero from "../components/Hero";
import DiscussionCard from "../components/DiscussionCard";
import ResourceCard from "../components/ResourceCard";
import StaffCard from "../components/StaffCard";

function StarDivider() {
  return (
    <div className="flex items-center justify-center gap-4" aria-hidden="true">
      <span style={{ width: "80px", height: "1px", background: "var(--rule)" }} />
      <svg width="16" height="16" viewBox="0 0 100 100" fill="none" stroke="var(--gold)" strokeWidth="6">
        <rect x="15" y="15" width="70" height="70" />
        <rect x="15" y="15" width="70" height="70" transform="rotate(45 50 50)" />
      </svg>
      <span style={{ width: "80px", height: "1px", background: "var(--rule)" }} />
    </div>
  );
}

export default function Home() {
  const discussions = [
    {
      id: "1",
      title: "Finding sincerity in daily prayer",
      description:
        "A discussion on maintaining khushu' and presence of heart during salah, especially in busy seasons of life.",
      author: "Bilal Ahmad",
      category: "Worship",
      replies: 24,
    },
    {
      id: "2",
      title: "Balancing work and worship",
      description:
        "How do you structure your day to stay consistent with prayer and remembrance while working full-time?",
      author: "Yusuf Rahman",
      category: "Lifestyle",
      replies: 17,
    },
    {
      id: "3",
      title: "Raising children with strong faith",
      description:
        "Practical advice from parents on teaching Qur'an, character, and love for the deen from a young age.",
      author: "Maryam Siddiqui",
      category: "Family",
      replies: 31,
    },
  ];

  const resources = [
    {
      id: "1",
      title: "Qur'an with Tafsir",
      type: "Reading",
      link: "#",
    },
    {
      id: "2",
      title: "Hadith Collection Guide",
      type: "Reading",
      link: "#",
    },
    {
      id: "3",
      title: "Daily Adhkar Checklist",
      type: "Guide",
      link: "#",
    },
  ];

  const staff = [
    {
      id: "1",
      name: "Imam Abdullah Karim",
      role: "Head Imam",
      bio: "Leads Friday khutbahs and oversees community guidance and counsel.",
    },
    {
      id: "2",
      name: "Sister Amina Farouk",
      role: "Community Coordinator",
      bio: "Organizes events, classes, and support for new and returning members.",
    },
    {
      id: "3",
      name: "Ustadh Omar Haddad",
      role: "Islamic Studies Teacher",
      bio: "Teaches fiqh and Arabic classes for youth and adults alike.",
    },
  ];

  return (
    <div style={{ background: "var(--bg)" }}>
      <Hero />

      {/* ABOUT */}
      <section className="max-w-3xl mx-auto text-center px-6 py-24">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold-bright)" }}>
          Who we are
        </p>
        <h2 className="font-display text-4xl mb-6" style={{ color: "var(--ink)" }}>
          About Al-Manarah
        </h2>
        <p className="leading-relaxed" style={{ color: "var(--ink-soft)" }}>
          Al-Manarah is a community space where believers gather to learn, ask
          questions, and support one another. Through open discussions, curated
          resources, and guidance from our staff, we hope to make seeking
          knowledge feel approachable and shared.
        </p>
      </section>

      <div className="pb-24">
        <StarDivider />
      </div>

      {/* DISCUSSIONS */}
      <section className="px-6 max-w-6xl mx-auto pb-24">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold-bright)" }}>
            From the forum
          </p>
          <h2 className="font-display text-4xl" style={{ color: "var(--ink)" }}>
            Featured Discussions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {discussions.map((d) => (
            <DiscussionCard key={d.id} {...d} />
          ))}
        </div>
      </section>

      {/* RESOURCES */}
      <section className="py-24" style={{ background: "var(--surface)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold-bright)" }}>
              Study material
            </p>
            <h2 className="font-display text-4xl" style={{ color: "var(--ink)" }}>
              Helpful Resources
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((res) => (
              <ResourceCard key={res.id} {...res} />
            ))}
          </div>
        </div>
      </section>

      {/* STAFF */}
      <section className="px-6 max-w-6xl mx-auto py-24">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold-bright)" }}>
            Who to ask
          </p>
          <h2 className="font-display text-4xl" style={{ color: "var(--ink)" }}>
            Meet the Staff
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {staff.map((member) => (
            <StaffCard key={member.id} {...member} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="mx-6 mb-24 rounded-2xl text-center py-20 px-6 relative overflow-hidden"
        style={{ background: "var(--surface)", border: "1px solid var(--rule-strong)" }}
      >
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
          viewBox="0 0 400 400"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="ctaTile" width="50" height="50" patternUnits="userSpaceOnUse">
              <rect x="10" y="10" width="30" height="30" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
              <rect x="10" y="10" width="30" height="30" fill="none" stroke="var(--gold)" strokeWidth="1.5" transform="rotate(45 25 25)" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#ctaTile)" />
        </svg>

        <div className="relative">
          <h2 className="font-display text-4xl mb-4" style={{ color: "var(--ink)" }}>
            Join the Conversation
          </h2>
          <p className="mb-8 max-w-md mx-auto" style={{ color: "var(--ink-soft)" }}>
            Ask a question, share a reflection, or simply read along. Everyone
            is welcome here.
          </p>
          <button className="btn-cal btn-cal-solid">Get Started</button>
        </div>
      </section>
    </div>
  );
}