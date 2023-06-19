import React from "react";
import { signOut, getSession } from 'next-auth/react';
import { GetServerSidePropsContext } from 'next';

export default function Home({session}) {

  console.log(session)
  return (
    <>
        <title>nav bar</title>
        test
        <button onClick={() => signOut()}>Sign out</button>
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