import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'

const authCheck = () => {
    const [loginUser, setLoginUser] = useState({ username: '', email: '' })
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            router.push('/login')
        }

    try {

        const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY)

        setLoginUser(decoded)

    } catch (error) {
        router.push('/login')        
    }

    }, [router])

    return loginUser
}

export default authCheck