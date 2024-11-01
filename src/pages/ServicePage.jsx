import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import service from '../assets/bg-service.jpg'
import arrowR from '../assets/ArrowRight.png';

// box
import gigi from '../assets/gigi.png';
import kaki from '../assets/kaki.png';
import eye from '../assets/eye.png';
import surgery from '../assets/surgery.png';
import cardiology from '../assets/cardiology.png';
import diagnosis from '../assets/diagnosis.png';

// Dokter
import dok1 from '../assets/dok1.png';
import dok2 from '../assets/dok2.png';
import dok3 from '../assets/dok3.png';
import dok4 from '../assets/dok4.png';
import dok5 from '../assets/dok5.png';

const ServicePage = () => {
  return (
    <>
       {/* Navbar Component */}
       <Navbar />

            {/* ServicePage */}
            <div
            className="servicepage h-screen pb-10 flex items-center justify-center"
            style={{
                backgroundImage: `url(${service})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            >
            <div className="container mx-auto px-6 lg:px-20">
                <div className="hero lg:pt-10 pt-40 flex flex-col lg:flex-row items-center justify-center">
                    <div className="box-title flex-1 mb-10 lg:mb-0 lg:ms-16 text-center lg:text-left">
                        <h1 className="text-3xl lg:text-5xl font-bold mb-6">
                        Meet the <span className="text-green-600">Best <br /> Hospital</span>
                        </h1>
                        <p className="mt-4 text-slate-800 text-justify">
                        We know how large objects will act,<br />
                        but things on a small scale.
                        </p>
                        <div className="flex gap-3 justify-center lg:justify-start mt-7">
                        <a href="#" className="flex w-40 bg-green-700 text-white px-2 py-3 rounded-full">
                            <p className="mx-auto">Get Quote Now</p>
                        </a>
                        <a href="#" className="flex w-40 bg-white text-green-700 px-2 py-3 rounded-full border border-green-700">
                            <p className="mx-auto">Learn More</p>
                        </a>
                        </div>
                    </div>
                    <div className="box-form flex-1 p-8 bg-slate-100 rounded-lg shadow-lg max-w-xs mx-auto lg:mx-0 lg:me-20 mt-10 lg:mt-0">
                        <h2 className="text-2xl font-bold mb-6 text-gray-700">Book Appointment</h2>
                        <form className="space-y-4">
                        <div>
                            <label className="block text-gray-600 font-medium mb-2">Name</label>
                            <input
                            type="text"
                            className="w-full px-4 py-2 bg-slate-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 font-medium mb-2">Email</label>
                            <input
                            type="email"
                            className="w-full px-4 py-2 bg-slate-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 font-medium mb-2">Department</label>
                            <select className="w-full px-4 py-2 border bg-slate-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>Select department</option>
                            <option>Cardiology</option>
                            <option>Neurology</option>
                            <option>Pediatrics</option>
                            <option>Orthopedics</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-600 font-medium mb-2">Time</label>
                            <select className="w-full px-4 py-2 bg-slate-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>Select time</option>
                            <option>09:00 AM</option>
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>02:00 PM</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-700 text-white py-3 rounded-md font-semibold hover:bg-green-800 transition duration-200"
                        >
                            Submit
                        </button>
                        </form>
                    </div>
                </div>
            </div>
            </div>

            {/* Find doctor */}
            <div className="find lg:h-[200px]">
                <div className="container mx-auto px-4 lg:pt-10 pt-8">
                    <div className="bg-white mx-4 p-6 rounded-lg shadow-lg">
                        <div className="text-start ms-3">
                            <h1 className="text-2xl font-bold">Find A Doctor</h1>
                        </div>
                        <div className="box-form lg:flex items-center justify-between gap-4 mt-6 mx-2">
                            {/* Input for Name */}
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full lg:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            
                            {/* Input for Speciality */}
                            <input
                                type="text"
                                placeholder="Speciality"
                                className="w-full lg:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            
                            {/* Toggle switch for Available */}
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-600">Available</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-9 h-5 bg-gray-300 rounded-full peer peer-focus:ring-2 peer-focus:ring-green-500 peer-checked:bg-green-600 peer-checked:after:translate-x-4 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                                </label>
                            </div>
                            
                            {/* Search Button */}
                            <button className="px-4 py-2 bg-green-700 text-white rounded-md font-semibold hover:bg-green-800 transition duration-200">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service */}
            <div className="service pb-10">
                <div className="container mx-auto px-4">
                <div className="service-konten pt-20">
                    <div className="box-title text-center">
                    <h1 className="text-2xl font-bold text-green-600">Services we provide </h1>
                    <p className="my-4">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar <br /> elementum tempus hac tellus libero accumsan. </p>
                    </div>
                    <div className="box-konten flex flex-wrap justify-around gap-8 lg:mx-8 mx-2 mt-10">
                        <div className="box bg-slate-100 lg:w-[22rem] p-6 rounded-lg shadow-md">
                        <img src={gigi} alt="Dental treatments" className="w-full h-auto mb-2 rounded" />
                        <h1 className="text-lg font-bold mb-1 text-green-600">Dental treatments</h1>
                        <p className="text-gray-700 mb-2 text-sm">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                        <div>
                            <a href="#" className="text-green-600 hover:text-blue-700 text-sm flex items-center">
                            Learn more <img src={arrowR} alt="" className="ml-2" />
                            </a>
                        </div>
                        </div>
                        <div className="box bg-slate-100 lg:w-[22rem] lg:mb-0 mb-3 p-6 rounded-lg shadow-md">
                        <img src={kaki} alt="Dental treatments" className="w-full h-auto mb-2 rounded" />
                        <h1 className="text-lg font-bold mb-1 text-green-600">Bones treatments</h1>
                        <p className="text-gray-700 mb-2 text-sm">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                        <div>
                            <a href="#" className="text-green-600 hover:text-blue-700 text-sm flex items-center">
                            Learn more <img src={arrowR} alt="" className="ml-2" />
                            </a>
                        </div>
                        </div>
                        <div className="box bg-slate-100 lg:w-[22rem] lg:mb-0 mb-3 p-6 rounded-lg shadow-md">
                        <img src={diagnosis} alt="Dental treatments" className="w-full h-auto mb-2 rounded" />
                        <h1 className="text-lg font-bold mb-1 text-green-600">Diagnosis</h1>
                        <p className="text-gray-700 mb-2 text-sm">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                        <div>
                            <a href="#" className="text-green-600 hover:text-blue-700 text-sm flex items-center">
                            Learn more <img src={arrowR} alt="" className="ml-2" />
                            </a>
                        </div>
                        </div>
                        <div className="box bg-slate-100 lg:w-[22rem] lg:mb-0 mb-3 p-6 rounded-lg shadow-md">
                        <img src={cardiology} alt="Dental treatments" className="w-full h-auto mb-2 rounded" />
                        <h1 className="text-lg font-bold mb-1 text-green-600">Cardiology</h1>
                        <p className="text-gray-700 mb-2 text-sm">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                        <div>
                            <a href="#" className="text-green-600 hover:text-blue-700 text-sm flex items-center">
                            Learn more <img src={arrowR} alt="" className="ml-2" />
                            </a>
                        </div>
                        </div>
                        <div className="box bg-slate-100 lg:w-[22rem] lg:mb-0 mb-3 p-6 rounded-lg shadow-md">
                        <img src={surgery} alt="Dental treatments" className="w-full h-auto mb-2 rounded" />
                        <h1 className="text-lg font-bold mb-1 text-green-600">Surgery</h1>
                        <p className="text-gray-700 mb-2 text-sm">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                        <div>
                            <a href="#" className="text-green-600 hover:text-blue-700 text-sm flex items-center">
                            Learn more <img src={arrowR} alt="" className="ml-2" />
                            </a>
                        </div>
                        </div>
                        <div className="box bg-slate-100 lg:w-[22rem] lg:mb-0 mb-3 p-6 rounded-lg shadow-md">
                        <img src={eye} alt="Dental treatments" className="w-full h-auto mb-2 rounded" />
                        <h1 className="text-lg font-bold mb-1 text-green-600">Eye care</h1>
                        <p className="text-gray-700 mb-2 text-sm">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                        <div>
                            <a href="#" className="text-green-600 hover:text-blue-700 text-sm flex items-center">
                            Learn more <img src={arrowR} alt="" className="ml-2" />
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
      
            {/* Leading Medicine */}
            <div className="member pb-10">
                <div className="container mx-auto px-4">
                <div className="service-konten pt-20">
                    <div className="box-title text-center">
                        <h1 className="text-2xl font-bold text-green-600">Leading Medicine</h1>
                        <p className="my-4">Problems trying to resolve the conflict between the two major realms of <br /> Classical physics: Newtonian mechanics.</p>
                    </div>
                    <div className="horizontal-scroll">
                        <div className="box-testi flex gap-8 lg:mx-8 mx-2 mt-10">
                            <div className="box bg-slate-100 lg:w-[22rem] max-w-[18rem] p-6 rounded-lg shadow-md text-left">
                                {/* Rating */}
                                <div className="flex items-center mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5 text-yellow-500"
                                        >
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                                {/* Testimonial Text */}
                                <p className="text-gray-700 mb-6 text-sm">
                                    Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.
                                </p>
                                {/* Image and User Info */}
                                <div className="flex items-center gap-4">
                                    <img src={dok1} alt="Dental treatments" className="w-1/4 h-auto rounded-full" />
                                    <div>
                                        <p className="font-semibold text-green-600">John Carter</p>
                                        <p className="text-gray-700 text-sm">CEO at Google</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box bg-slate-100 lg:w-[22rem] max-w-[18rem] p-6 rounded-lg shadow-md text-left">
                                {/* Rating */}
                                <div className="flex items-center mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5 text-yellow-500"
                                        >
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                                {/* Testimonial Text */}
                                <p className="text-gray-700 mb-6 text-sm">
                                    Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.
                                </p>
                                {/* Image and User Info */}
                                <div className="flex items-center gap-4">
                                    <img src={dok2} alt="Dental treatments" className="w-1/4 h-auto rounded-full" />
                                    <div>
                                        <p className="font-semibold text-green-600">John Carter</p>
                                        <p className="text-gray-700 text-sm">CEO at Google</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box bg-slate-100 lg:w-[22rem] max-w-[18rem] p-6 rounded-lg shadow-md text-left">
                                {/* Rating */}
                                <div className="flex items-center mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5 text-yellow-500"
                                        >
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                                {/* Testimonial Text */}
                                <p className="text-gray-700 mb-6 text-sm">
                                    Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.
                                </p>
                                {/* Image and User Info */}
                                <div className="flex items-center gap-4">
                                    <img src={dok3} alt="Dental treatments" className="w-1/4 h-auto rounded-full" />
                                    <div>
                                        <p className="font-semibold text-green-600">John Carter</p>
                                        <p className="text-gray-700 text-sm">CEO at Google</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box bg-slate-100 lg:w-[22rem] max-w-[18rem] p-6 rounded-lg shadow-md text-left">
                                {/* Rating */}
                                <div className="flex items-center mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5 text-yellow-500"
                                        >
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                                {/* Testimonial Text */}
                                <p className="text-gray-700 mb-6 text-sm">
                                    Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.
                                </p>
                                {/* Image and User Info */}
                                <div className="flex items-center gap-4">
                                    <img src={dok4} alt="Dental treatments" className="w-1/4 h-auto rounded-full" />
                                    <div>
                                        <p className="font-semibold text-green-600">John Carter</p>
                                        <p className="text-gray-700 text-sm">CEO at Google</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box bg-slate-100 lg:w-[22rem] max-w-[18rem] p-6 rounded-lg shadow-md text-left">
                                {/* Rating */}
                                <div className="flex items-center mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5 text-yellow-500"
                                        >
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                                {/* Testimonial Text */}
                                <p className="text-gray-700 mb-6 text-sm">
                                    Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.
                                </p>
                                {/* Image and User Info */}
                                <div className="flex items-center gap-4">
                                    <img src={dok5} alt="Dental treatments" className="w-1/4 h-auto rounded-full" />
                                    <div>
                                        <p className="font-semibold text-green-600">John Carter</p>
                                        <p className="text-gray-700 text-sm">CEO at Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="faq pb-12">
                <div className="container mx-auto px-4">
                    <div className="box-title text-center mb-8">
                        <h1 className="text-2xl font-bold text-green-600">FAQ</h1>
                        <p className="my-4">
                            Problems trying to resolve the conflict between <br />
                            the two major realms of Classical physics: Newtonian mechanics
                        </p>
                    </div>
                    {/* Box FAQ */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
                        {/* Box 1 */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="font-semibold mb-2">What is the return policy?</h2>
                            <p className="text-gray-700 text-sm">
                                Our return policy lasts 30 days. If 30 days have gone by since your purchase,
                                unfortunately, we can’t offer you a refund or exchange.
                            </p>
                        </div>
                        {/* Box 2 */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="font-semibold mb-2">How to track my order?</h2>
                            <p className="text-gray-700 text-sm">
                                You can track your order using the tracking link provided in your confirmation email.
                            </p>
                        </div>
                        {/* Box 3 */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="font-semibold mb-2">What payment methods are accepted?</h2>
                            <p className="text-gray-700 text-sm">
                                We accept various payment methods including credit cards, PayPal, and bank transfers.
                            </p>
                        </div>
                        {/* Box 4 */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="font-semibold mb-2">How to change my account details?</h2>
                            <p className="text-gray-700 text-sm">
                                You can update your account details in the account settings section of our website.
                            </p>
                        </div>
                        {/* Box 5 */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="font-semibold mb-2">Is there a warranty on products?</h2>
                            <p className="text-gray-700 text-sm">
                                Yes, we offer a warranty on most of our products. Please check the warranty policy for specific items.
                            </p>
                        </div>
                        {/* Box 6 */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="font-semibold mb-2">How can I contact customer service?</h2>
                            <p className="text-gray-700 text-sm">
                                You can reach our customer service through the contact form on our website or by calling our hotline.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subscribe */}
            <div className="subscribe">
            <div className="container mx-auto px-4 w-full lg:h-[10rem] h-[16rem]">
                <div className="box-title text-2xl font-bold flex justify-center text-center text-stone-800 mb-6">
                <h2>Subscribe to our newslater</h2>
                </div>
                <div className="box-subscribe flex justify-center gap-3">
                <input className="box-radius w-[23rem] p-2 rounded-full text-stone-800 bg-slate-50" placeholder="Enter your email"/>
                <div className="box-button">
                    <button className="bg-green-600 p-2 rounded-full text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">Subscribe</button>
                </div>
                </div>
            </div>
            </div>

      {/* Footer Component */}
      <Footer />
    </>
  )
}

export default ServicePage