// Project grid showing cards with borders in palette colors.
const projects = [
  {
    title: 'Jan III Sobieski Polish School Website',
    desc: 'Redesigned public site with modern UI and improved navigation.',
    border: 'border-plum',
  },
  {
    title: 'Car Parts E-commerce Platform',
    desc: 'Full-stack app for online auto-parts sales using Node.js and MongoDB.',
    border: 'border-cambridge-blue',
  },
  {
    title: 'Chicago Event Ticketing',
    desc: 'Prototype platform for browsing and buying local event tickets.',
    border: 'border-violet-jtc',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 px-4" aria-labelledby="projects-title">
      <h2 id="projects-title" className="text-2xl font-semibold text-center mb-8">
        Projects
      </h2>
      {/* Responsive grid: 1 column on small screens, 2 on sm, 3 on lg */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className={`${p.border} border-2 rounded-xl p-4 bg-dutch-white text-black`}
          >
            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
            <p className="text-sm leading-relaxed">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
