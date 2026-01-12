import { Cta } from '@/components/home/cta'
import { Spotlight } from '@/components/ui/spotlight-new'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="mx-auto w-5xl max-w-full pt-60">
      <Spotlight />
      <Cta />
    </main>
  )
}
