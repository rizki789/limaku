import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import ButtonAnchor from '@/Components/ButtonAnchor';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <Guest>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

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
                    <h1>Login to your account</h1>

                    <form onSubmit={submit} className="text-start">
                        <div>
                            <Label forInput="email" value="Email" />

                            <Input
                                type="text"
                                name="email"
                                value={data.email}
                                className="form-control"
                                autoComplete="username"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                        </div>

                        <div className="mt-4">
                            <Label forInput="password" value="Password" />

                            <Input
                                type="password"
                                name="password"
                                value={data.password}
                                className="form-control"
                                autoComplete="current-password"
                                handleChange={onHandleChange}
                            />
                        </div>

                        <div className="d-flex justify-content-between mb-5 mt-3">
                            <div className="">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        value={data.remember}
                                        handleChange={onHandleChange}
                                    />

                                    <span className="ml-2 text-sm text-gray-600">
                                        Remember me
                                    </span>
                                </label>
                            </div>
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-decoration-none text-black"
                                >
                                    Forgot Password?
                                </Link>
                            )}
                        </div>
                        <Button
                            className="button-primary rounded-2 w-100"
                            processing={processing}
                            style={{ borderRadius: '8px' }}
                        >
                            Login
                        </Button>
                    </form>
                    <span className="text-black-50">
                        Not Registered Yet?{' '}
                        <Link
                            href={'/register'}
                            className="text-black text-decoration-none"
                        >
                            Create an account
                        </Link>
                    </span>
                </div>
            </div>
        </Guest>
    );
}
