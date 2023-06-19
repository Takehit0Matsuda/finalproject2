import React from "react"
import { signOut } from 'next-auth/react'

export default function Home() {
  return (
    <>
        <title>nav bar</title>
        test
        <button onClick={() => signOut()}>Sign out</button>
    </>
  )
}
