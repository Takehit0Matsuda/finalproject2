import {getProviders, getSession, useSession} from "next-auth/react"
import BtnLogin from "../components/BtnLogin";
import { useRouter } from "next/router";
import styles from './form.module.css';



const Login = ({providers, session}) => {
    console.log(providers,session)
    if (session) return null;

    const router = useRouter();

    const handleEmailButtonClick = () => {
        router.push("/login_with_email");
    };

    return (
        <div className = {styles['out-body']}>
            <div className={styles['signup-form-container']}>
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
                <button
                    className="btn w-100 my-2 py-3"
                    style={{ fontSize: "23px", background: "#343541", color: "#fff" }}
                    onClick={handleEmailButtonClick}
                    >
                    Continue with Email
                </button>
                <div className={styles['divider']}></div>
                <p className={styles['signup-link']}>
                    Don't have an account?<br />
                    <a className={styles['signup-link-text']} href="/signup">   Sign Up</a>
                </p>
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