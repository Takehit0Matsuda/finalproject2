import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { validationSchema } from './utils/validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './form.module.css';


interface SignupForm {
    name: string;
    email: string;
    password: string;
}

const SignupForm = () => {
const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm<SignupForm>({
    mode: 'onChange',
    resolver: zodResolver(validationSchema),
});

const onSubmit = (data: SignupForm) => {
    console.log(data);
    alert(data.email + "\n" + data.password);
};

return (
    <div className={styles['out-body']}>
    <div className={styles['signup-form-container']}>
        <h1 className={styles['title']}>Signup</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label className={styles['form-label']} htmlFor="username">Username</label>
        <input className={styles['form-input']} id="name" type="text" {...register('name')} />
        <p className={styles['err-message']}>{errors.name?.message}</p>
        <label className={styles['form-label']} htmlFor="email">Email</label>
        <input className={styles['form-input']} id="email" type="email" {...register('email')} />
        <p className={styles['err-message']}>{errors.email?.message}</p>
        <label className={styles['form-label']} htmlFor="password">Password</label>
        <input className={styles['form-input']} id="password" type="password" {...register('password')} />
        <p className={styles['err-message']}>{errors.password?.message}</p>
        <button className={styles['form-button']} type="submit">Signup</button>
        </form>
    </div>
    </div>
);
};

const SignUp = () => {
useEffect(() => {
    const rootsElement = document.getElementById('roots');
    if (rootsElement) {
    rootsElement.innerHTML = '';
    rootsElement.appendChild(document.createElement('div'));
    }
}, []);

return (
    <div>
    <SignupForm />
    </div>
);
};

export default SignUp;