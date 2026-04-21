import { Navbar } from './components/Navbar'
import { Layout } from './components/Layout'

const SECTIONS = ['about', 'skills', 'experience', 'projects', 'contact'] as const

export default function App() {
  return (
    <>
      <Navbar />
      <Layout>
        {SECTIONS.map((id) => (
          <section key={id} id={id} className="min-h-screen py-20">
            <h2 className="text-4xl font-semibold capitalize text-foreground">{id}</h2>
          </section>
        ))}
      </Layout>
    </>
  )
}
