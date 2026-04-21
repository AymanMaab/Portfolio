import { Navbar } from './components/Navbar'
import { Layout } from './components/Layout'
import { Hero } from './sections/Hero'
import { ThemeProvider } from './lib/theme'

const SECTIONS = ['about', 'skills', 'experience', 'projects', 'contact'] as const

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <Layout>
        {SECTIONS.map((id) => (
          <section key={id} id={id} className="min-h-screen py-20">
            <h2 className="text-4xl font-semibold capitalize text-foreground">{id}</h2>
          </section>
        ))}
      </Layout>
    </ThemeProvider>
  )
}
