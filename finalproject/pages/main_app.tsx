import React, { useEffect } from "react";
import { getSession } from 'next-auth/react';
import { GetServerSidePropsContext } from 'next';
import Nav from "../components/Nav"

export default function Home(session) {

  return (
    <>
        <title>Take App</title>
        <Nav />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  const userData = context.req.cookies.myData;
  console.log(context)


  if(!session){
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      session,
    }
  };
}