import React from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='relative min-h-screen'>
            <footer className="footer absolute bottom-0 p-10 bg-cyan-800 text-neutral-content">
                <div>
                    <span className="footer-title font-bold text-orange-50">Discover</span>
                    <Link to='/' className="link link-hover text-lg text-white">Home</Link>
                    <Link className="link link-hover text-lg text-white">Terms</Link>
                    <Link className="link link-hover text-lg text-white">Refund Policy</Link>
                    <Link className="link link-hover text-lg text-white">Emi Policy</Link>
                </div>
                <div>
                    <span className="footer-title font-bold text-orange-50">Need Help ?</span>

                    <p className='text-lg text-white'>We are Always here for you! <br /> Knock us on Messenger anytime <br /> or Call our Hotline (10AM - 10PM).</p>
                </div>
                <div>
                    <span className="footer-title font-bold text-orange-50" >Contact</span>
                    <p className=" text-lg text-white">info@travelwithsayed.com</p>
                    <div className='flex items-center'>
                        <Link className="link link-hover text-4xl mr-5 text-white">
                            <FaFacebook></FaFacebook>
                        </Link>
                        <Link className="link link-hover text-4xl mr-5 text-white">
                            <FaYoutube></FaYoutube>
                        </Link>
                        <Link className="link link-hover text-4xl mr-5 text-white">
                            <FaInstagram></FaInstagram>
                        </Link>
                    </div>
                    <p className='mt-5 text-lg' >  Copyright 2022 © TravelWithSayed Bd.</p>
                </div>
            </footer>
        </div>
    );
};
export default Footer;