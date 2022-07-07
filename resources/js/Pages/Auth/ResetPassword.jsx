import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.update'));
    };

    return (
        <Guest>
            <Head title="Reset Password" />

            <ValidationErrors errors={errors} />
            <div
                className="row m-0 justify-content-center align-items-center"
                style={{ height: '100vh' }}
                id={'login'}
            >
                <div
                    className="col-md-6 p-5 text-center d-flex flex-column justify-content-between bg-white"
                    style={{ height: '80%' }}
                >
                    <form onSubmit={submit}>
                        <div>
                            <Label forInput="email" value="Email" />

                            <Input
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                handleChange={onHandleChange}
                            />
                        </div>

                        <div className="mt-4">
                            <Label forInput="password" value="Password" />

                            <Input
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                        </div>

                        <div className="mt-4">
                            <Label
                                forInput="password_confirmation"
                                value="Confirm Password"
                            />

                            <Input
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                handleChange={onHandleChange}
                            />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <Button className="ml-4" processing={processing}>
                                Reset Password
                            </Button>
                        </div>
                    </form>
                    <span className="text-black-50">
                        Already have an account?{' '}
                        <Link
                            href={route('login')}
                            className="text-black text-decoration-none"
                        >
                            Login
                        </Link>
                    </span>
                </div>
            </div>
        </Guest>
    );
}
