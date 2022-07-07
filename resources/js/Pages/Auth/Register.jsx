import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
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

        post(route('register'));
    };

    return (
        <Guest>
            <Head title="Register" />

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
                            <Label forInput="name" value="Name" />

                            <Input
                                type="text"
                                name="name"
                                value={data.name}
                                className="form-control"
                                autoComplete="name"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <Label forInput="email" value="Email" />

                            <Input
                                type="email"
                                name="email"
                                value={data.email}
                                className="form-control"
                                autoComplete="username"
                                handleChange={onHandleChange}
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <Label forInput="password" value="Password" />

                            <Input
                                type="password"
                                name="password"
                                value={data.password}
                                className="form-control"
                                autoComplete="new-password"
                                handleChange={onHandleChange}
                                required
                            />
                        </div>

                        <div className="mt-4 mb-5">
                            <Label
                                forInput="password_confirmation"
                                value="Confirm Password"
                            />

                            <Input
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="form-control"
                                handleChange={onHandleChange}
                                required
                            />
                        </div>

                        <Button
                            className="button-primary rounded-2 w-100"
                            processing={processing}
                        >
                            Register
                        </Button>
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
