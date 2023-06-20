import React, { useEffect } from "react";
import { getSession} from 'next-auth/react';
import { GetServerSidePropsContext } from 'next';
import Nav from "../components/Nav"
import {GiSpellBook} from "react-icons/gi"
import { useRouter } from 'next/router';

export default function Home(session) {

  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
    };
  const handleSignup = () => {
    router.push('/signup');
    };

  return (
    <>
        <title>Welcome</title>
        <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand d-flex">
                      <GiSpellBook/>
                      <span className="ms-2">Take Book App</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <button className="btn mb-1 btn-outline-success" style={{ fontSize: '15px', fontSize: '16px', fontWeight: 'bold'}}
                      onClick={handleLogin}>
                          Login
                      </button> 
                      <button className="btn mb-1 ms-3 btn-outline-success" style={{ fontSize: '15px', fontSize: '16px', fontWeight: 'bold'}}
                      onClick={handleSignup}>
                          SignUp
                      </button>
                      </div>
                </div>
            </nav>
            <main>
              <div>

              </div>
            </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  console.log(context)



  return {
    props: {
      session,
    }
  };
}