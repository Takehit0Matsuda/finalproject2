import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {GiSpellBook} from "react-icons/gi"
import {useSession, signOut} from "next-auth/react"

const UserInfo = () => {
    const [userInfo, setUserInfo] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchUserInfo = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
            alert('You need to login!')
            router.push('/login');
            return;
            }

            console.log("OK")
            console.log(token)

            const user = JSON.parse(localStorage.getItem("user"));
            const res = await fetch(`/api/auth/getUser?id=${user._id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token,
                }
            });

            const result = await res.json();
            if (res.ok) {
            setUserInfo(result.user);
            } else {
            console.error(result.message);
            }
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
        };

        fetchUserInfo();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        router.push('/login');
        };

    return (
        <>
        {userInfo ? (
            <div>
                        <title>User Info</title>
        <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand d-flex">
                    <GiSpellBook/>
                    <span className="ms-2">Take Book App</span>
                    </div>

                    <div className="d-flex align-items-center">


                    <h3 className="me-3 ms-2  text-capitalize" style={{ fontSize: '15px', color: '#555' }}>
                        {userInfo.username}
                    </h3>
                    
                    <button className="btn mb-1 btn-outline-success" style={{ fontSize: '15px', fontSize: '16px', fontWeight: 'bold'}}
                    onClick={handleLogout}>
                        Logout
                    </button>
                    </div>
                </div>
            </nav>
            <h1>User Info</h1>
            <p>Username: {userInfo.username}</p>
            <p>Email: {userInfo.email}</p>
            </div>
        ) : (
            <p>Loading user info...</p>
        )}
        </>
    );
};

export default UserInfo;