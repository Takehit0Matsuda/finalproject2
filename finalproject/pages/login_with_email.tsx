import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { validationSchema } from './utils/login_validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './form.module.css';
import Link from 'next/link';


interface LoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: 'onChange',
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: LoginForm) => {
    console.log(data);
    alert(data.email + "\n" + data.password);
  };

  return (
    <div className={styles['out-body']}>
      <div className={styles['login-form-container']}>
        <h1 className={styles['title']}>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className={styles['form-label']} htmlFor="email">Email</label>
          <input className={styles['form-input']} id="email" type="email" {...register('email')} />
          <p className={styles['err-message']}>{errors.email?.message}</p>
          <label className={styles['form-label']} htmlFor="password">Password</label>
          <input className={styles['form-input']} id="password" type="password" {...register('password')} />
          <p className={styles['err-message']}>{errors.password?.message}</p>
          <button className={styles['form-button']} type="submit">Login</button>
          <div className={styles['divider']}></div>
          <p className={styles['signup-link']}>
            Don't have an account?<br />
            <a className={styles['signup-link-text']} href="/signup">   Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

const Login = () => {
  useEffect(() => {
    const rootsElement = document.getElementById('roots');
    if (rootsElement) {
      rootsElement.innerHTML = '';
      rootsElement.appendChild(document.createElement('div'));
    }
  }, []);

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;