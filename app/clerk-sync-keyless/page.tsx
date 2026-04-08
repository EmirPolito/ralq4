"use client"

import { useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"

export default function ClerkSyncKeyless() {
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const returnUrl = searchParams.get("returnUrl")
    if (returnUrl) {
      // Redirect back to the return URL
      window.location.href = returnUrl
    } else {
      // Fallback to home
      router.push("/")
    }
  }, [searchParams, router])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  )
}
