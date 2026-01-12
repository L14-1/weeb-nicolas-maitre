import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="flex fixed top-4 left-1/2 -translate-x-1/2 justify-between min-w-6xl max-w-1/1 ring-foreground/10 bg-card text-card-foreground rounded-xl p-4 shadow-xl ring-1">
      <div className="flex gap-8 items-center">
        <h1 className="font-bold text-4xl">weeb</h1>
        <nav className="flex gap-2">
          <Button variant="ghost">A propos</Button>
          <Button variant="ghost">Nous contacter</Button>
        </nav>
      </div>
      <div className="flex gap-2">
        <Button variant="ghost">Se connecter</Button>
        <Button>Nous rejoindre</Button>
      </div>
    </header>
  )
}
