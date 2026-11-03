'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import {
    Check,
    Eye,
    EyeOff,
    Image as ImageIcon,
    Lock,
    Mail,
    User,
    X,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Field,
    FieldError,
    FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const passwordRules = [
    {
        label: 'At least one uppercase letter (A-Z)',
        test: (value: string) => /[A-Z]/.test(value),
    },
    {
        label: 'At least one lowercase letter (a-z)',
        test: (value: string) => /[a-z]/.test(value),
    },
    {
        label: 'Minimum 6 characters length',
        test: (value: string) => value.length >= 6,
    },
];

const fieldLabelClassName = 'text-[13px] font-semibold text-[#1F2937]';

const inputClassName =
    'h-11 rounded-[10px] border-[#E5E7EB] bg-[#FAFFEE] pl-9 pr-3 text-sm text-[#111827] shadow-sm placeholder:text-[#051F12]/60 focus-visible:border-[#051F12]/40 focus-visible:ring-[#051F12]/25';

const leadingIconClassName =
    'pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#051F12]/60';

const RegisterPage = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const ruleStates = passwordRules.map((rule) => rule.test(password));
    const passwordIsValid = ruleStates.every(Boolean);

    const errors = {
        fullName: fullName.trim() ? '' : 'Full name is required',
        email: !email.trim()
            ? 'Email is required'
            : /^\S+@\S+\.\S+$/.test(email)
                ? ''
                : 'Please enter a valid email address',
        photoUrl:
            !photoUrl.trim()
                ? 'Profile photo URL is required'
                : /^https?:\/\/.+/.test(photoUrl)
                    ? ''
                    : 'Please enter a valid URL starting with http:// or https://',
        password: passwordIsValid
            ? ''
            : 'Password does not meet the requirements',
    };

    const hasErrors = Object.values(errors).some(Boolean);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);

        if (hasErrors) return;

        // TODO: wire this up to your registration API
        console.log('register', { fullName, email, photoUrl, password });
    };

    return (
        <section className='flex min-h-[80vh] items-center justify-center bg-[#FAFFEE] px-5 py-14'>
            <div className='w-full max-w-xl rounded-[28px] border-2 border-[#051F12]/50 bg-[#FAFFEE] px-6 py-9 font-inter shadow-[0_20px_60px_-15px_rgba(15,23,42,0.2)] sm:px-9'>
                <div className='flex flex-col items-center text-center'>

                    <h1 className='mt-5 text-3xl font-bold font-hanken_Grotesk tracking-tight text-[#051F12]'>
                        Create Account
                    </h1>
                    <p className='mt-1.5 text-sm text-[#051F12]/60'>
                        Join the community and start driving social change
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    noValidate
                    className='mt-7 flex flex-col gap-4'
                >
                    <Field>
                        <FieldLabel
                            htmlFor='fullName'
                            className={fieldLabelClassName}
                        >
                            Full Name
                        </FieldLabel>
                        <div className='relative'>
                            <User className={leadingIconClassName} aria-hidden />
                            <Input
                                id='fullName'
                                name='fullName'
                                type='text'
                                autoComplete='name'
                                placeholder='Your Name'
                                value={fullName}
                                onChange={(event) =>
                                    setFullName(event.target.value)
                                }
                                aria-invalid={submitted && !!errors.fullName}
                                className={inputClassName}
                            />
                        </div>
                        {submitted && errors.fullName && (
                            <FieldError className='text-xs'>
                                {errors.fullName}
                            </FieldError>
                        )}
                    </Field>

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
                                onChange={(event) => setEmail(event.target.value)}
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
                            htmlFor='photoUrl'
                            className={fieldLabelClassName}
                        >
                            Profile Photo URL
                        </FieldLabel>
                        <div className='relative'>
                            <ImageIcon
                                className={leadingIconClassName}
                                aria-hidden
                            />
                            <Input
                                id='photoUrl'
                                name='photoUrl'
                                type='url'
                                inputMode='url'
                                placeholder='https://images.unsplash.com/...'
                                value={photoUrl}
                                onChange={(event) =>
                                    setPhotoUrl(event.target.value)
                                }
                                aria-invalid={submitted && !!errors.photoUrl}
                                className={inputClassName}
                            />
                        </div>

                        {submitted && errors.photoUrl && (
                            <FieldError className='text-xs'>
                                {errors.photoUrl}
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
                                aria-invalid={submitted && !passwordIsValid}
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

                        <ul className='mt-1 flex flex-col gap-1.5'>
                            {passwordRules.map((rule, index) => (
                                <li
                                    key={rule.label}
                                    className={cn(
                                        'flex items-center gap-2 text-[13px] transition-colors',
                                        ruleStates[index]
                                            ? 'text-emerald-600'
                                            : 'text-[#9CA3AF]'
                                    )}
                                >
                                    {ruleStates[index] ? (
                                        <Check
                                            className='size-3.5 shrink-0'
                                            aria-hidden
                                        />
                                    ) : (
                                        <X
                                            className='size-3.5 shrink-0'
                                            aria-hidden
                                        />
                                    )}
                                    {rule.label}
                                </li>
                            ))}
                        </ul>

                        {submitted && !passwordIsValid && (
                            <FieldError className='text-xs'>
                                {errors.password}
                            </FieldError>
                        )}
                    </Field>

                    <Button
                        type='submit'
                        className='mt-1 h-12 w-full gap-2 rounded-xl bg-[#00C979] text-[15px] font-semibold text-white shadow-lg shadow-[#00C979]/25 hover:bg-[#00C979]/80 active:bg-[#02834f] cursor-pointer hover:text-white'
                    >
                        Register
                    </Button>
                </form>

                <p className='mt-5 text-center text-sm text-[#051F12]/60'>
                    Already have an account?{' '}
                    <Link
                        href='/login'
                        className='font-semibold text-[#051F12] underline-offset-4 hover:underline'
                    >
                        Login here
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default RegisterPage;
