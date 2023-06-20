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
  const handleTopPage = () => {
      router.push('/');
  };

  return (
    <body className="front_back">
        <title>Welcome</title>
        <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand d-flex">
                      <GiSpellBook/>
                      <span className="ms-2">
                            <button onClick={handleTopPage}>
                            Take Book Review
                            </button>
                        </span>
                    </div>
                    <div className="d-flex align-items-center">
                      <button className="btn mb-1 btn-outline-success" style={{ fontSize: '16px', fontWeight: 'bold'}}
                      onClick={handleLogin}>
                          Login
                      </button> 
                      <button className="btn mb-1 ms-3 btn-outline-success" style={{ fontSize: '16px', fontWeight: 'bold'}}
                      onClick={handleSignup}>
                          SignUp
                      </button>
                      </div>
                </div>
            </nav>
            <main className="vh-100">
            <div className="container d-flex justify-content-center text-center" style={{paddingTop: '100px'}}>
            <div className="card p-5" style={{width: '1200px'}}>
                <h1 className="display-4 mt-5">Take Book Review</h1>
                <p className="lead my-4">
                  Welcome to Take Book Review, the ultimate platform for book lovers. Discover, share, and discuss your favorite books with a vibrant community of readers.
                </p>
                <div className="mt-5">
                  <p className="lead mb-3"><strong>New User?</strong></p>
                  <a href="/signup" className="btn btn-primary btn-lg">
                    Sign Up
                  </a>
                  </div>
                </div>
                </div>
            </main>
    </body>
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