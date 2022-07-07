import React from 'react';
import Guest from '@/Layouts/Guest';
import NavBar from '@/Containers/NavBar';
import Footer from '@/Containers/Footer';
import { Head } from '@inertiajs/inertia-react';

export default function About(props) {
    return (
        <Guest>
            <Head title='About Us'></Head>
            <NavBar auth={props.auth}></NavBar>
            <main>
                <div className="container">
                    <article className="jumbotron flex-column justify-content-center text-center">
                        <h1 className="fw-bolder">Tentang Kami</h1>
                        <p>
                            LIMAKU adalah website waste management. Disini kami
                            menyediakan tempat untuk masyarakat menukarkan
                            sampah masker dan akan kami tukarkan dengan e-money
                            yang bisa ditarik tunai(-10.000). Kami akan
                            meneruskan sampah masker menjadi Geotekstil
                        </p>
                    </article>
                </div>
            </main>
            <Footer></Footer>
        </Guest>
    );
}
