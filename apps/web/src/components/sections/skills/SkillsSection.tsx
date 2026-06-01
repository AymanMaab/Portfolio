import { skills } from '../../../data/skills'
import { SectionHeader } from '../../shared/SectionHeader'
import { Badge } from '../../ui/badge'

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 space-y-10">
      <SectionHeader
        eyebrow="What I'm strong at"
        title="Skills"
        subtitle="From full-stack web and mobile development to AI integrations and clean system design."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((category) => (
          <div key={category.title} className="rounded-2xl p-8 border border-border/40">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl grid place-items-center bg-primary/10 border border-primary/15">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-xl font-semibold tracking-tight">
                {category.title}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <Badge key={skill} variant="outline" className="rounded-full px-3 py-1 text-sm border-border/50 text-primary bg-muted">
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
