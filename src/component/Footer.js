import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <section className="footer-area padding-top-90px padding-bottom-30px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 responsive-column">
                            <div className="footer-item">
                                <div className="logo">
                                    <a href="index.html" className="foot-logo"><img src="images/logo2.png" alt="logo" /></a>
                                    <p className="footer__desc line-height-30 mt-3">
                                        Collin Street West, Victor 6007, Australia. <br />
                                        +1 246-345-0695 <br />
                                        info@Zobstar123.com
                                    </p>
                                    <h4 className="footer__title mt-4">Connect with us</h4>
                                    <ul className="social-profile">
                                        <li>
                                            <Link to="#">
                                                <i className="la la-facebook" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="la la-twitter" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="la la-instagram" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="la la-dribbble" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="la la-behance" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* end logo */}
                            </div>
                            {/* end footer-item */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="col-lg-2 responsive-column">
                            <div className="footer-item">
                                <h4 className="footer__title">General</h4>
                                <ul className="list-items">
                                    <li><a href="about.html">About / Press</a></li>
                                    <li><Link to="#">Awards</Link></li>
                                    <li><Link to="blog-grid.html">Blog</Link></li>
                                    <li><Link to="#">Research</Link></li>
                                    <li><Link to="#">Guidelines</Link></li>
                                    <li><Link to="#">Careers</Link></li>
                                </ul>
                            </div>
                            {/* end footer-item */}
                        </div>
                        {/* end col-lg-2 */}
                        <div className="col-lg-2 responsive-column">
                            <div className="footer-item">
                                <h4 className="footer__title">Job Seekers</h4>
                                <ul className="list-items">
                                    <li><Link to="#">International Jobs</Link></li>
                                    <li><Link to="#">Upload Resume</Link></li>
                                    <li><Link to="#">Resume Help</Link></li>
                                    <li><Link to="#">Career Advice</Link></li>
                                    <li><Link to="#">Salary Tools</Link></li>
                                    <li><Link to="#">Site map</Link></li>
                                </ul>
                            </div>
                            {/* end footer-item */}
                        </div>
                        {/* end col-lg-2 */}
                        <div className="col-lg-2 responsive-column">
                            <div className="footer-item">
                                <h4 className="footer__title">Employers</h4>
                                <ul className="list-items">
                                    <li><Link to="#">Get a Free Employer</Link></li>
                                    <li><Link to="#">Account</Link></li>
                                    <li><Link to="#">Employer Center</Link></li>
                                    <li><Link to="#">Post a Job</Link></li>
                                    <li><Link to="#">Recruiting Solutions</Link></li>
                                    <li><Link to="#">Screening</Link></li>
                                </ul>
                            </div>
                            {/* end footer-item */}
                        </div>
                        {/* end col-lg-2 */}
                        <div className="col-lg-2 responsive-column">
                            <div className="footer-item">
                                <h4 className="footer__title">Helpful Links</h4>
                                <ul className="list-items">
                                    <li><Link to="#">Help / Contact Us</Link></li>
                                    <li><Link to="#">Terms of Use</Link></li>
                                    <li><Link to="#">Privacy Center</Link></li>
                                    <li><Link to="#">Security Center</Link></li>
                                    <li><Link to="#">Do Not Sell</Link></li>
                                    <li><Link to="#">AdChoices</Link></li>
                                </ul>
                            </div>
                            {/* end footer-item */}
                        </div>
                        {/* end col-lg-2 */}
                    </div>
                    {/* end row */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copy-right margin-top-50px padding-top-30px">
                                <p className="copy__desc">
                                    Copyright <span id="copyright-date" /> Zobstar Inc. Made with
                                    <span className="la la-heart-o" /> by
                                    <a href="https://themeforest.net/user/techydevs/portfolio">TechyDevs</a>
                                </p>
                                <ul className="list-items">
                                    <li className="color-text-2 font-weight-medium">Browse by:</li>
                                    <li><Link to="#">Companies,</Link></li>
                                    <li><Link to="#">Jobs,</Link></li>
                                    <li><Link to="#">Locations</Link></li>
                                </ul>
                            </div>
                            {/* end copy-right */}
                        </div>
                        {/* end col-lg-12 */}
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </section>

        </>
    );
}
