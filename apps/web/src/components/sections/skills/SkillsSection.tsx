import { skills } from '../../../data/skills'
import { SectionHeader } from '../../shared/SectionHeader'
import { Badge } from '../../ui/badge'

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 space-y-8">
      <SectionHeader
        eyebrow="What I'm strong at"
        title="Skills"
        subtitle="From full-stack web and mobile development to AI integrations and clean system design."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((category) => (
          <div key={category.title} className="glass rounded-3xl p-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl grid place-items-center bg-primary/15 border border-primary/20">
                <category.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="text-lg font-semibold tracking-tight">
                {category.title}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <Badge key={skill} variant="outline" className="rounded-full border-border/60 bg-black/10">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
