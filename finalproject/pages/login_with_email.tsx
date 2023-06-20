import React, { useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { validationSchema } from './utils/login_validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './form.module.css';
import { useRouter } from "next/router";


interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<LoginForm>({
      mode: 'onChange',
      resolver: zodResolver(validationSchema),
    });

    const router = useRouter();

    const onSubmit = async (data: LoginForm) => {
      
      const res = await fetch("api/auth/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data)

    });

    const result = await res.json();
    if (result.success && result.token) {
        localStorage.setItem("user", JSON.stringify(result.user))
        localStorage.setItem("token", result.token);
        console.log(localStorage.getItem("user"))
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user._id);
        console.log(localStorage.getItem("token"))
        alert(result.message);
        router.push("/about");
    } else {
        alert(result.message);
    }
    };

  return (
    <div className={styles['out-body']}>
      <div className={styles['login-form-container']}>
        <h1 className={styles['title']}>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className={styles['form-label']} htmlFor="email">Email</label>
          <input className={styles['form-input']} id="email" type="email" {...register('email')} name = "email"/>
          <p className={styles['err-message']}>{errors.email?.message}</p>
          <label className={styles['form-label']} htmlFor="password">Password</label>
          <input className={styles['form-input']} id="password" type="password" {...register('password')} name = "password"/>
          <p className={styles['err-message']}>{errors.password?.message}</p>
          <button className={styles['form-button']} type="submit">Login</button>
          <div className={styles['divider']}></div>
          <p className={styles['form-signup-link']}>
            Don't have an account?<br />
            <a className={styles['signup-link-text']} href="/signup">   Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;