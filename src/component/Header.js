import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header className="header-area">
                <div className="header-menu-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="menu-full-width">
                                    <div className="logo">
                                        <Link to="index.html"><img src="images/logo2.png" alt="logo" /></Link>
                                    </div>
                                    {/* end logo */}
                                    <div className="main-menu-content">
                                        <nav>
                                            <ul>
                                                <li>
                                                    <Link to="#">Home <i className="la la-angle-down" /></Link>
                                                    <ul className="dropdown-menu-item">
                                                        <li><Link to="index.html">Home 1</Link></li>
                                                        <li><Link to="index2.html">Home 2</Link></li>
                                                        <li><Link to="index3.html">Home 3</Link></li>
                                                        <li><Link to="index4.html">Home 4 </Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="#">Employers <i className="la la-angle-down" /></Link>
                                                    <ul className="dropdown-menu-item">
                                                        <li>
                                                            <Link to="employer-listing.html">Employer Listing</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="employer-details.html">Employer Details</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="employer-dashboard.html">Employer Dashboard</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="employer-dashboard-edit-profile.html">Edit Profile</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="employer-dashboard-post-job.html">Post a Job</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="#">Candidates <i className="la la-angle-down" /></Link>
                                                    <ul className="dropdown-menu-item">
                                                        <li>
                                                            <Link to="candidate-listing.html">Candidate Listing</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="candidate-details.html">Candidate Details</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="candidate-dashboard.html">Candidate Dashboard</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="candidate-dashboard-edit-profile.html">Edit Profile</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="candidate-add-resume.html">Add a Resume</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="#">Pages <i className="la la-angle-down" /></Link>
                                                    <ul className="dropdown-menu-item">
                                                        <li><Link to="about.html">About Us</Link></li>
                                                        <li><Link to="all-category.html">All Category </Link></li>
                                                        <li><Link to="invoice.html">Invoice</Link></li>
                                                        <li><Link to="pricing.html">Pricing</Link></li>
                                                        <li><Link to="how-it-works.html">How It Works</Link></li>
                                                        <li><Link to="checkout.html">Checkout</Link></li>
                                                        <li>
                                                            <Link to="payment-complete.html">Payment Complete</Link>
                                                        </li>
                                                        <li><Link to="faq.html">Faq</Link></li>
                                                        <li><Link to="contact.html">Contact</Link></li>
                                                        <li><Link to="page-404.html">404 Page</Link></li>
                                                        <li>
                                                            <Link to="terms-and-condition.html">Terms And Condition</Link>
                                                        </li>
                                                        <li><Link to="recover.html">Recover Password</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="#">Blog <i className="la la-angle-down" /></Link>
                                                    <ul className="dropdown-menu-item">
                                                        <li><Link to="blog-grid.html">Blog Grid</Link></li>
                                                        <li>
                                                            <Link to="blog-left-sidebar.html">Left Sidebar</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="blog-right-sidebar.html">Right Sidebar</Link>
                                                        </li>
                                                        <li><Link to="blog-single.html">Blog Detail</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="#">Jobs <i className="la la-angle-down" /></Link>
                                                    <ul className="dropdown-menu-item">
                                                        <li><Link to="job-listing.html">Job Listing</Link></li>
                                                        <li>
                                                            <Link to="job-grid-view.html">Job Grid View</Link>
                                                        </li>
                                                        <li><Link to="job-details.html">Job Details </Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/* end main-menu-content */}
                                    <div className="logo-right-content">
                                        <ul className="author-access-list">
                                            <li>
                                                <Link to="login.html">Login</Link>
                                                <span className="or-text">or</span>
                                                <Link to="sign-up.html">Sign up</Link>
                                            </li>
                                            <li>
                                                <Link to="employer-dashboard-post-job.html" className="theme-btn">
                                                    <span className="la la-plus" />
                                                    Post a Job
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="side-menu-open">
                                            <span className="menu__bar" />
                                            <span className="menu__bar" />
                                            <span className="menu__bar" />
                                        </div>
                                        {/* end side-menu-open */}
                                    </div>
                                    {/* end logo-right-content */}
                                </div>
                                {/* end menu-full-width */}
                            </div>
                            {/* end col-lg-12 */}
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container-fluid */}
                </div>
                {/* end header-menu-wrapper */}
                <div className="side-nav-container">
                    <div className="humburger-menu">
                        <div className="humburger-menu-lines side-menu-close" />
                        {/* end humburger-menu-lines */}
                    </div>
                    {/* end humburger-menu */}
                    <div className="side-menu-wrap">
                        <ul className="side-menu-ul">
                            <li>
                                <Link to="#">Home <i className="la la-caret-down btn-toggle" /></Link>
                                <ul className="dropdown-menu-item">
                                    <li><Link to="index.html">Home 1</Link></li>
                                    <li><Link to="index2.html">Home 2</Link></li>
                                    <li><Link to="index3.html">Home 3</Link></li>
                                    <li><Link to="index4.html">Home 4 </Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#">Employers <i className="la la-caret-down btn-toggle" /></Link>
                                <ul className="dropdown-menu-item">
                                    <li><Link to="employer-listing.html">Employer Listing</Link></li>
                                    <li><Link to="employer-details.html">Employer Details</Link></li>
                                    <li>
                                        <Link to="employer-dashboard.html">Employer Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link to="employer-dashboard-edit-profile.html">Edit Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="employer-dashboard-post-job.html">Post a Job</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#">Candidates <i className="la la-caret-down btn-toggle" /></Link>
                                <ul className="dropdown-menu-item">
                                    <li><Link to="candidate-listing.html">Candidate Listing</Link></li>
                                    <li><Link to="candidate-details.html">Candidate Details</Link></li>
                                    <li>
                                        <Link to="candidate-dashboard.html">Candidate Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link to="candidate-dashboard-edit-profile.html">Edit Profile</Link>
                                    </li>
                                    <li><Link to="candidate-add-resume.html">Add a Resume</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#">Pages <i className="la la-caret-down btn-toggle" /></Link>
                                <ul className="dropdown-menu-item">
                                    <li><Link to="about.html">About Us</Link></li>
                                    <li><Link to="all-category.html">All Category </Link></li>
                                    <li><Link to="invoice.html">Invoice</Link></li>
                                    <li><Link to="pricing.html">Pricing</Link></li>
                                    <li><Link to="how-it-works.html">How It Works</Link></li>
                                    <li><Link to="checkout.html">Checkout</Link></li>
                                    <li><Link to="payment-complete.html">Payment Complete</Link></li>
                                    <li><Link to="faq.html">Faq</Link></li>
                                    <li><Link to="contact.html">Contact</Link></li>
                                    <li><Link to="page-404.html">404 Page</Link></li>
                                    <li>
                                        <Link to="terms-and-condition.html">Terms And Condition</Link>
                                    </li>
                                    <li><Link to="recover.html">Recover Password</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#">Blog <i className="la la-caret-down btn-toggle" /></Link>
                                <ul className="dropdown-menu-item">
                                    <li><Link to="blog-grid.html">Blog Grid</Link></li>
                                    <li><Link to="blog-left-sidebar.html">Left Sidebar</Link></li>
                                    <li><Link to="blog-right-sidebar.html">Right Sidebar</Link></li>
                                    <li><Link to="blog-single.html">Blog Detail</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#">Jobs <i className="la la-caret-down btn-toggle" /></Link>
                                <ul className="dropdown-menu-item">
                                    <li><Link to="job-listing.html">Job Listing</Link></li>
                                    <li><Link to="job-grid-view.html">Job Grid View</Link></li>
                                    <li><Link to="job-details.html">Job Details </Link></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="side-nav-button">
                            <Link to="login.html">Login</Link>
                            <span className="or-text">or</span>
                            <Link to="sign-up.html">Sign up</Link>
                            <Link to="employer-dashboard-post-job.html" className="theme-btn">Post a Job</Link>
                        </div>
                        {/* end side-nav-button */}
                    </div>
                    {/* end side-menu-wrap */}
                </div>
                {/* end side-nav-container */}
            </header>

        </>
    );
}
