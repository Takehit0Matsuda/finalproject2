import React from 'react'
import {useSession, signOut} from "next-auth/react"
import {GiSpellBook} from "react-icons/gi"


const Nav = () => {
    const {data: session, loading} = useSession()

    console.log(session,loading)
    if (!session) return null;

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand d-flex">
          <GiSpellBook/>
          <span className="ms-2">Take Book App</span>
        </div>

        <div className="d-flex align-items-center">
          <img src={session.user.image} 
          className="img-fluid rounded-circle" 
          alt="logo"
          width={35} height={35} />

          <h3 className="me-3 ms-2  text-capitalize" style={{ fontSize: '15px', color: '#555' }}>
            {session.user.name}
          </h3>
         
          <button className="btn mb-1 btn-outline-success" style={{ fontSize: '15px', fontSize: '16px', fontWeight: 'bold'}}
          onClick={() => signOut()}>
            Logout
          </button>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Nav
