import React, { useEffect, useState } from 'react';
import Guest from '@/Layouts/Guest';
import NavBar from '@/Containers/NavBar';
import Footer from '@/Containers/Footer';
import { Head } from '@inertiajs/inertia-react';
import List from '@/Components/List';
import axios from 'axios';

export default function History(props) {
    const [histories, setHistories] = useState([]);

    useEffect(() => {
        axios.get('/history/get').then(response => setHistories(response.data.histories));
    }, [])

    return (
        <Guest>
            <Head title="Riwayat"></Head>
            <NavBar auth={props.auth}></NavBar>
            <main>
                <div className="container">
                    <h1 className="mb-3">Riwayat Transaksi</h1>
                    <List>
                        {histories.map((e, index) => {
                            return(
                                <List.Item className="card card-body mb-2" key={index}>
                                    <div className="row align-items-center">
                                        <div className="col mb-sm-0 mb-3">
                                            <h4>{e.type}</h4>
                                            <small className="text-sm text-black-50">
                                                {e.created_at}
                                            </small>
                                        </div>
                                        <div className="col size-sm-big text-sm-center text-end">
                                            {e.weight} kg
                                        </div>
                                        <div className="col-sm size-sm-big d-flex justify-content-end">
                                            Rp. {e.weight * 1000}
                                        </div>
                                    </div>
                                </List.Item>
                            );
                        })}
                    </List>
                </div>
            </main>
            <Footer></Footer>
        </Guest>
    );
}
