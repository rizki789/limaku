import { Link } from '@inertiajs/inertia-react';
import * as React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer style={{ backgroundColor: '#EFF0F2' }}>
                <div className="container py-5">
                    <div className="row justify-content-between">
                        <div className="col-md-5">
                            <article>
                                <h1>LIMAKU</h1>
                                <p>
                                    Mengelola Sampah Masker Secara Bertanggung
                                    Jawab Tempat pembuangan sampah limbah masker
                                    Khusus Daerah Ibukota DKI Jakarta Besama
                                    LIMAKU
                                </p>
                                <small>&copy; 2022 LIMAKU</small>
                            </article>
                        </div>
                        <div className="col-md-3">
                            <section>
                                <h5>CONTACT INFO</h5>
                                <p>Phone: 085959486454</p>
                                <p>Email: rizkidio789@email.com</p>
                                <p>Location: DKI JAKARTA. INDONESIA</p>
                                <div className="social-links d-flex justify-content-evenly">
                                    <Link href="#">
                                        <i className="bi bi-facebook fs-2 text-black"></i>
                                    </Link>
                                    <Link href="#">
                                        <i className="bi bi-twitter fs-2 text-black"></i>
                                    </Link>
                                    <Link href="#">
                                        <i className="bi bi-instagram fs-2 text-black"></i>
                                    </Link>
                                    <Link href="#">
                                        <i className="bi bi-linkedin fs-2 text-black"></i>
                                    </Link>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
