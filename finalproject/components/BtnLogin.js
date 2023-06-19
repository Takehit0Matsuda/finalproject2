import { signIn } from 'next-auth/react'
import React from 'react'

const BtnLogin = ({provider, bgColor, txtColor, callbackUrl}) => {
  return (
    <div>
      <button className='btn w-100 my-2 py-3'
      style={{fontSize: '23px', background: `${bgColor}`, color: `${txtColor}`}}
      onClick={async() => {await signIn(provider.id, { callbackUrl });}}>
        Continue with {provider.name}
      </button>
    </div>
  )
}

BtnLogin.defaultProps = {
    txtColor: '#fff'
}
export default BtnLogin
