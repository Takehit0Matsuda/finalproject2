import {getProviders, getSession, signIn} from "next-auth/react"
import BtnLogin from "../components/BtnLogin";

const Login = ({providers, session}) => {
    console.log(providers,session)
    if (session) return null;
    return (
        <div className = "d-flex justify-content-center align-items-center"
        style={{ minHeight: '100vh'}}>
            <div style={{maxwidth: '450px', width: '450px'}}
            className="border border-1 max-auto p-4 shadow">
                <h2 className="text-center fw-bolder text-uppercase"
                style={{ color: '#555', letterSpacing: '1px'}}>
                    Take-App
                </h2>
                <p className="text-center">
                    Login with NextAuth
                </p>
                <BtnLogin
                    provider={providers.google}
                    bgColor='#4285f4'
                />
                <BtnLogin
                    provider={providers.facebook}
                    bgColor='#056be1'
                />
            </div>
        </div>
    )
}

Login.getInitialProps = async (context) => {
    return {
        providers: await getProviders(context),
        session: await getSession(context)
    }
}

export default Login



// export default function LoginPage({providers}){
//     return(
//         <div className="flex items-center justity-center h-screen">
//             {Object.values(providers).map(provider => (
//                 <div>
//                     <button>Sign in with {provider.name}</button>
//                 </div>
//             ))}  
//         </div>
//     )
// }

// export async function getServersideProps() {
//     const providers = await getProviders();
//     return {
//         props: {providers},
//     }
// }