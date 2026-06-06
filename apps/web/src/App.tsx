import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/hero/HeroSection'
import { SkillsSection } from './components/sections/skills/SkillsSection'

const SECTION_CLASS = 'py-28 border-b border-border/40'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 space-y-20 pb-16">
        <HeroSection />

        <section id="projects" className={SECTION_CLASS}>
          <h2 className="text-xl font-semibold">Projects</h2>
          <p className="mt-2 text-muted-foreground">Coming next in Phase 3</p>
        </section>

        <section id="experience" className={SECTION_CLASS}>
          <h2 className="text-xl font-semibold">Experience</h2>
          <p className="mt-2 text-muted-foreground">Coming in Phase 3</p>
        </section>

        <section id="skills" className={SECTION_CLASS}>
          <SkillsSection />
        </section>

        <section id="contact" className="py-24">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-2 text-muted-foreground">Form wiring in Phase 4</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
