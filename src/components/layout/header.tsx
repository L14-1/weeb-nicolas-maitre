import { MobileNav } from '@/components/layout/mobile-nav'
import { Button, buttonVariants } from '@/components/ui/button'
import { useScroll } from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'
import { Route as contactRoute } from '../../routes/contact.tsx'
import { Route as homeRoute } from '../../routes/index.tsx'
import LoginButton from './login-button'

export const navLinks = [
  {
    label: 'Nous contacter',
    route: contactRoute,
  },
]

export function Header() {
  const scrolled = useScroll(10)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 mx-auto mt-4 w-full max-w-7xl border-transparent border-b md:p-2.5 md:rounded-md md:border md:transition-all md:ease-out',
        {
          'border-border bg-background/95 md:w-23/24 backdrop-blur-sm supports-backdrop-filter:bg-background/50 md:top-6 md:max-w-6xl md:shadow':
            scrolled,
        },
      )}
    >
      <nav
        className={cn(
          'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
          {
            'md:px-2': scrolled,
          },
        )}
      >
        <Link to={homeRoute.to}>
          <h1 className="font-bold text-4xl">weeb</h1>
        </Link>
        <div className="hidden items-center flex-1 justify-between ml-8 gap-1 md:flex">
          <div className="flex gap-1">
            {navLinks.map((link, i) => (
              <Link
                className={buttonVariants({ variant: 'ghost' })}
                to={link.route.to}
                key={i}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-1">
            <LoginButton full={false} />
            <Button>Nous rejoindre</Button>
          </div>
        </div>
        <MobileNav />
      </nav>
    </header>
  )
}
