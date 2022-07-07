import React, { useEffect, useState } from 'react';
import Guest from '@/Layouts/Guest';
import { Head } from '@inertiajs/inertia-react';
import NavBar from '@/Containers/NavBar';
import Footer from '@/Containers/Footer';
import axios from 'axios';
import swal from 'sweetalert';

export default function LandingPage(props) {
    const [deposit, setDeposit] = useState(Number)
    const [name, setName] = useState(String);
    const [bank, setBank] = useState(String);
    const [account, setAccount] = useState(String);
    const [nominal, setNominal] = useState(Number);
    const [token, setToken] = useState(String);

    useEffect(() => {
        axios.get('/exchange/deposit').then(response => setDeposit(response.data.deposit));
        axios.get('/token').then(response => setToken(response.data));
    }, []);

    const handleNameChange = (event) => setName(event.target.value);
    const handleBankChange = (event) => setBank(event.target.value);
    const handleAccountChange = (event) => setAccount(event.target.value);
    const handleNominalChange = (event) => setNominal(event.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            // _token: token,
            name,
            bank,
            account,
            nominal
        };
        console.log(data);
        axios.post('/exchange', data, {
            headers: {'X-CSRF-TOKEN': token}
        })
        .then(response => {
            swal(response.data.message, '', response.data.status);
                setDeposit(response.data.deposit);
                setName('');
                setBank('');
                setAccount('');
                setNominal('');
                e.target.reset();
        }).catch(error => console.log(error));
    };
    return (
        <Guest>
            <Head title='Tarik Uang'></Head>
            <NavBar auth={props.auth}></NavBar>
            <main>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-5 mb-4" tabIndex={2}>
                            <div className="row">
                                <h1 className='fw-bolder text-black-50' style={{ fontSize: '60px' }}>
                                    Penarikan Tunai
                                </h1>
                            </div>
                            <div className="row">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                              <label htmlFor="name" className="form-label">Nama Lengkap</label>
                                              <input type="text" name="name" id="name" className="form-control" placeholder="Nama Lengkap" placeholderaria-describedby="nameId" onChange={handleNameChange}></input>
                                            </div>
                                            <div className="mb-3">
                                              <label htmlFor="bank" className="form-label">Bank</label>
                                              <input type="text" name="bank" id="bank" className="form-control" placeholder="Bank" placeholderaria-describedby="nameId" onChange={handleBankChange}></input>
                                            </div>
                                            <div className="mb-3">
                                              <label htmlFor="account" className="form-label">No. Rekening</label>
                                              <input type="text" name="account" id="account" className="form-control" placeholder="No. Rekening" placeholderaria-describedby="nameId" onChange={handleAccountChange}></input>
                                            </div>
                                            <div className="mb-3">
                                              <label htmlFor="nominal" className="form-label">Nominal Penarikan (Min. Rp. 10.000)</label>
                                              <input type="number" name="nominal" id="nominal" className="form-control" placeholder="Nominal Penarikan (Min. Rp. 10.000)" placeholderaria-describedby="nameId" onChange={handleNominalChange}></input>
                                            </div>
                                            <button type="submit" className="btn button-primary w-100">Kirim</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 p-0" tabIndex={1}>
                            <div className="card shadow">
                                <div className="card-body">
                                    <h4 className="card-title fw-bolder">Total E-Money</h4>
                                    <hr />
                                    <p className="card-text text-end fs-1 fw-bolder">{deposit}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </Guest>
    );
}
