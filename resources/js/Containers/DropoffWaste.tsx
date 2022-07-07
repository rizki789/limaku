import Button from '@/Components/Button';
import axios from 'axios';
import { capitalize } from 'lodash';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

export default function Waste() {
    const [typeOptions, setTypeOptions] = useState([]);
    const [depositor, setDepositor] = useState(String);
    const [type, setType] = useState(String);
    const [weight, setWeight] = useState(String);
    const [location, setLocation] = useState(String);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        axios
            .get('/waste/types')
            .then((response) => setTypeOptions(response.data));
    }, []);

    const handleDepositorChange = (event) => setDepositor(event.target.value);
    const handleTypeChange = (event) => setType(event.target.value);
    const handleWeightChange = (event) => setWeight(event.target.value);
    const handleLocationChange = (event) => setLocation(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            depositor,
            service_type: 'dropoff',
            type,
            weight,
            location,
        };

        axios
            .post('/waste', data)
            .then((response) => {
                swal(response.data.message, '', response.data.status);
                setDepositor('');
                setType('');
                setWeight('');
                setLocation('');
                setDisabled(true);
                event.target.reset();
            })
            .catch((error) => console.error(error));
    };
    const handleFormChange = () => {
        setDisabled(false);
    };

    return (
        <div
            className="container d-flex justify-content-center flex-column text-neutral-700 dark:text-neutral-100"
            style={{ minHeight: '100vh' }}
            id="dropoff"
        >
            <h1 className="text-center fw-bolder">Dropoff</h1>
            <form onSubmit={handleSubmit} onChange={handleFormChange}>
                <div className="mb-3">
                    <label htmlFor="depositor" className="form-label">
                        Depositor
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="depositor"
                        id="depositor"
                        aria-describedby="helpId"
                        placeholder="Depositor"
                        onChange={handleDepositorChange}
                        required
                    ></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="type" className="form-label">
                        Tipe
                    </label>
                    <select
                        className="form-control"
                        name="type"
                        id="type"
                        onChange={handleTypeChange}
                        required
                    >
                        <option value="" hidden>
                            Pilih jenis sampah
                        </option>
                        {typeOptions.map((type) => {
                            return (
                                <option value={type} key={type}>
                                    {capitalize(type)}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="weight" className="form-label">
                        Berat Sampah
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        name="weight"
                        id="weight"
                        aria-describedby="helpId"
                        placeholder="Berat Sampah (Kg)"
                        onChange={handleWeightChange}
                    ></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Alamat Lokasi LIMAKU
                    </label>
                    <br />
                    <small className="text-danger">
                        Hanya di wilayah DKI Jakarta
                    </small>
                    <textarea
                        className="form-control"
                        name="location"
                        id="location"
                        placeholder="Alamat"
                        onChange={handleLocationChange}
                        required
                    ></textarea>
                </div>
                <div className="d-flex justify-content-end">
                    <Button
                        type="submit"
                        className={`${disabled ? ' disabled' : ''}`} styles={undefined} processing={undefined} onClick={undefined}>
                        Konfirmasi
                    </Button>
                </div>
            </form>
        </div>
    );
}
