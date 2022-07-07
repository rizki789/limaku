import React from 'react';
import Guest from '@/Layouts/Guest';
import { Head } from '@inertiajs/inertia-react';
import ButtonAnchor from '@/Components/ButtonAnchor';
import NavBar from '@/Containers/NavBar';
import Footer from '@/Containers/Footer';
import PickupWaste from '@/Containers/PickupWaste';
import DropoffWaste from '@/Containers/DropoffWaste';

export default function LandingPage(props) {
    return (
        <Guest>
            <Head title='Dashboard'></Head>
            <NavBar auth={props.auth}></NavBar>
            <main>
                <article className="jumbotron">
                    <div className="container">
                        <h1 className="font-black text-5xl dark:text-neutral-100">
                            <div className="">
                                <span>Selamat Datang</span>
                            </div>
                            <div className="">
                                <span>Di Limaku</span>
                            </div>
                        </h1>
                        <ButtonAnchor href={props.auth ? '/#pickup' : '/login'} className={'dark:bg-white dark:text-black'}>
                            Let`s Get Started
                        </ButtonAnchor>
                    </div>
                </article>
                <PickupWaste></PickupWaste>
                <DropoffWaste></DropoffWaste>
            </main>
            <Footer></Footer>
        </Guest>
    );
}
