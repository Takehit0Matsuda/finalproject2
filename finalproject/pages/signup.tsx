import React from 'react';
import { useForm } from 'react-hook-form';
import { validationSchema } from './utils/validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './form.module.css';
import { useRouter } from 'next/router';

interface SignupForm {
    username: string;
    email: string;
    password: string;
    
}

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupForm>({
        mode: 'onChange',
        resolver: zodResolver(validationSchema),
    });
    
    const router = useRouter();
　

    const onSubmit = async (data: SignupForm) => {

        localStorage.setItem("password", data.password)

        const res = await fetch("api/auth/signup", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
    });

    const result = await res.json();
    if (result.success) {
        alert(result.message);
        router.push("/login_with_email");
    } else {
        alert(result.message);
    }
    };
    
    return (
        <div className={styles['out-body']}>
            <div className={styles['signup-form-container']}>
                <h1 className={styles['title']}>Signup</h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <label className={styles['form-label']} htmlFor="username">Username</label>
                    <input className={styles['form-input']} type="text" id="username" {...register('username')} name = "username"/>
                    <p className={styles['err-message']}>{errors.username?.message}</p>
                    <label className={styles['form-label']} htmlFor="email">Email</label>
                    <input className={styles['form-input']} type="email" id="email" {...register('email')} name = "email"/>
                    <p className={styles['err-message']}>{errors.email?.message}</p>
                    <label className={styles['form-label']} htmlFor="password">Password</label>
                    <input className={styles['form-input']} type="password" id="password" {...register('password')} name = "password"/>
                    <p className={styles['err-message']}>{errors.password?.message}</p>
                    <button className={styles['form-button']} type="submit">Signup</button>
                </form>
            </div>
        </div>    
    )
}

export default Register