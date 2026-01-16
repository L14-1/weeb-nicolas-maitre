import { init } from '@plausible-analytics/tracker'
import { useEffect } from 'react'

export default function Analytics() {
  useEffect(() => {
    if (process.env.ORIGIN_URL && process.env.ANALYTICS_URL) {
      init({
        domain: process.env.ORIGIN_URL!,
        endpoint: process.env.ANALYTICS_URL,
        captureOnLocalhost: true,
      })
    }
  }, [])

  return null
}
