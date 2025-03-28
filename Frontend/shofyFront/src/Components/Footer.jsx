import React from "react";
import img from '../images/logo.svg'
import img2 from '../images/footer-pay.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 px-8">
        {/* Logo and Description */}
        <div>
          <div className=''>
                <img src={img} alt="" />
            </div>
          <p className="mt-10 font-medium">
            We are a team of designers and developers that create high quality
            WordPress
          </p>
          <div className="flex mt-6 space-x-4">
            <a
              href="#"
              className="p-2 bg-white rounded hover:bg-gray-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded hover:bg-gray-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded hover:bg-gray-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded hover:bg-gray-300"
            >
              <FaVimeoV />
            </a>
          </div>
        </div>

        {/* My Account Links */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            My Account
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-900">
                Track Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Order History
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Returns
              </a>
            </li>
          </ul>
        </div>

        {/* Information Links */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Information
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-900">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Latest News
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Talk To Us
          </h2>
          <p className="mb-2">
            Got Questions? Call us
            <br />
            <a href="tel:+67041390762" className="font-semibold">
              +670 413 90 762
            </a>
          </p>
          <p className="mb-2">
            <a href="mailto:shofy@support.com" className="hover:underline">
              shofy@support.com
            </a>
          </p>
          <p>
            79 Sleepy Hollow St.
            <br />
            Jamaica, New York 1432
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-10 py-1 text-center text-sm ">
        <div className="container mx-auto mt-5  grid grid-cols-1 md:grid-cols-2">
          <p>© 2025 All Rights Reserved | Angular Template by Themepure.</p>
          <div className="flex justify-center space-x-4">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
