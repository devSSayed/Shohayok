'use client';

import {
    Field,
    FieldError,
    FieldLabel,
} from '@/components/ui/field';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SubmitEvent, useState } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { redirect } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';






const fieldLabelClassName = 'text-[13px] font-semibold text-[#1F2937]';

const inputClassName =
    'h-11 rounded-[10px] border-[#E5E7EB] bg-[#FAFFEE] pl-9 pr-3 text-sm text-[#111827] shadow-sm placeholder:text-[#051F12]/60 focus-visible:border-[#051F12]/40 focus-visible:ring-[#051F12]/25';

const leadingIconClassName =
    'pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#051F12]/60';






const LoginPage = () => {


    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [submitted, setSubmitted] = useState(false);



    const errors = {

        email: !email.trim()
            ? 'Email is required'
            : /^\S+@\S+\.\S+$/.test(email)
                ? ''
                : 'Please enter a valid email address',

        password: !password.trim()
            ? 'Password is required'
            : '',
    };

    const hasErrors = Object.values(errors).some(Boolean);

    const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);

        if (hasErrors) return;

        const fromData = new FormData(event.currentTarget);

        const user = Object.fromEntries(fromData.entries()) as { email: string; password: string };

        const { data, error } = await authClient.signIn.email({
            ...user,
        })


        if (error) {
            toast.error(`Error signing in: ${error.message}`, {
                style: {
                    background: '#F6FFDF',
                    color: '#051F12',
                    fontFamily: 'Inter, sans-serif',
                },
            }
            );
        } else {
            toast.success(`Welcome back, ${data.user.name}`, {
                style: {
                    background: '#F6FFDF',
                    color: '#051F12',
                    fontFamily: 'Inter, sans-serif',
                },
            });
            redirect('/');
        }
    };

    const handleGoogleSignIn = async () => {
        const { data, error } = await authClient.signIn.social({
            provider: 'google',
            callbackURL: '/',
        });

        if (error) {
            toast.error(`Error signing in: ${error.message}`, {
                style: {
                    background: '#F6FFDF',
                    color: '#051F12',
                    fontFamily: 'Inter, sans-serif',
                },
            }
            );
        }
    };

    return (
        <section className='flex min-h-[80vh] items-center justify-center bg-[#FAFFEE] px-5 py-14'>
            <div className='w-full max-w-xl rounded-[28px] border-2 border-[#051F12]/50 bg-[#FAFFEE] px-6 py-9 font-inter shadow-[0_20px_60px_-15px_rgba(15,23,42,0.2)] sm:px-9'>
                <div className='flex flex-col items-center text-center'>

                    <h1 className='mt-5 text-3xl font-bold font-hanken_Grotesk tracking-tight text-[#051F12]'>
                        Welcome Back!
                    </h1>
                    <p className='mt-1.5 text-sm text-[#051F12]/60'>
                        Sign in to organize and join community drives.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    noValidate
                    className='mt-7 flex flex-col gap-4'
                >

                    <Field>
                        <FieldLabel
                            htmlFor='email'
                            className={fieldLabelClassName}
                        >
                            Email Address
                        </FieldLabel>
                        <div className='relative'>
                            <Mail className={leadingIconClassName} aria-hidden />
                            <Input
                                id='email'
                                name='email'
                                type='email'
                                autoComplete='email'
                                placeholder='name@example.com'
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                aria-invalid={submitted && !!errors.email}
                                className={inputClassName}
                            />
                        </div>
                        {submitted && errors.email && (
                            <FieldError className='text-xs'>
                                {errors.email}
                            </FieldError>
                        )}
                    </Field>


                    <Field>
                        <FieldLabel
                            htmlFor='password'
                            className={fieldLabelClassName}
                        >
                            Password
                        </FieldLabel>
                        <div className='relative'>
                            <Lock className={leadingIconClassName} aria-hidden />
                            <Input
                                id='password'
                                name='password'
                                type={showPassword ? 'text' : 'password'}
                                autoComplete='new-password'
                                placeholder='••••••••'
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                aria-invalid={submitted && !!errors.password}
                                className={cn(inputClassName, 'pr-10')}
                            />
                            <button
                                type='button'
                                onClick={() => setShowPassword((value) => !value)}
                                aria-label={
                                    showPassword
                                        ? 'Hide password'
                                        : 'Show password'
                                }
                                className='absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-[#9CA3AF] outline-none transition-colors hover:text-[#4B5563] focus-visible:ring-3 focus-visible:ring-[#0D9488]/25'
                            >
                                {showPassword ? (
                                    <EyeOff className='size-4' aria-hidden />
                                ) : (
                                    <Eye className='size-4' aria-hidden />
                                )}
                            </button>
                        </div>

                        {submitted && errors.password && (
                            <FieldError className='text-xs'>
                                {errors.password}
                            </FieldError>
                        )}

                    </Field>

                    <Button
                        type='submit'
                        className='mt-1 h-12 w-full gap-2 rounded-xl bg-[#00C979] text-[15px] font-semibold text-white shadow-lg shadow-[#00C979]/25 hover:bg-[#00C979]/80 active:bg-[#02834f] cursor-pointer hover:text-white'
                    >
                        Login
                    </Button>
                </form>


                {/* OR CONTINUE WITH DIVIDER */}
                <div className='relative my-6 flex items-center justify-center'>
                    <div className='absolute inset-0 flex items-center'>
                        <div className='w-full border-t border-[#E5E7EB]' />
                    </div>
                    <span className='relative bg-[#FAFFEE] px-4 text-xs font-semibold uppercase tracking-wider text-[#051F12]/50'>
                        Or continue with
                    </span>
                </div>

                {/* GOOGLE SIGN-IN BUTTON */}
                <button
                    type='button'
                    onClick={handleGoogleSignIn}
                    className='flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-[#E5E7EB] bg-white text-[15px] font-semibold text-[#111827] shadow-sm transition-all hover:bg-gray-50 active:bg-gray-100 cursor-pointer'
                >
                    <FcGoogle className='text-2xl' />
                    Continue with Google
                </button>

                <p className='mt-5 text-center text-sm text-[#051F12]/60'>
                    Don&apos;t have an account?{' '}
                    <Link
                        href='/register'
                        className='font-semibold text-[#051F12] underline-offset-4 hover:underline'
                    >
                        Register here
                    </Link>
                </p>

            </div>
        </section>
    );
};

export default LoginPage;