export default function Analytics() {
  const domain = import.meta.env.VITE_ORIGIN_URL
  const endpoint = import.meta.env.VITE_ANALYTICS_URL
  if (domain && endpoint) {
    import('@plausible-analytics/tracker').then(({ init }) => {
      init({
        domain,
        endpoint,
      })
    })
  }

  return null
}
