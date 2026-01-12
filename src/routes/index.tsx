import { Cta } from '@/components/home/cta'
import { TrustedBy } from '@/components/home/trustedBy'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { Spotlight } from '@/components/ui/spotlight-new'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="mx-auto w-5xl max-w-full pt-60">
      <Spotlight />
      <ContainerScroll titleComponent={<Cta />}>
        <img src={'./images/preview.png'} alt="preview" />
      </ContainerScroll>
      <TrustedBy />
    </main>
  )
}
