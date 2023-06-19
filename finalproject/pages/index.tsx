import React from "react";
import { signOut, getSession } from 'next-auth/react';
import { GetServerSidePropsContext } from 'next';
import Nav from "../components/Nav"

export default function Home({session}) {

  return (
    <>
        <title>First Page</title>

        <Nav />
        
        {/* <button onClick={() => signOut()}>Sign out</button> */}
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if(!session){
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  };
}