import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import logo from '../assets/logohealth.png';
import operasi from '../assets/operasi.png';
import arrow from '../assets/arrow.png';
import arrowR from '../assets/ArrowRight.png';

// box
import gigi from '../assets/gigi.png';
import kaki from '../assets/kaki.png';
import eye from '../assets/eye.png';
import surgery from '../assets/surgery.png';
import cardiology from '../assets/cardiology.png';
import diagnosis from '../assets/diagnosis.png';

// medsos
import fb from '../assets/Facebook.png';
import ig from '../assets/Instagram.png';
import tweet from '../assets/Twitter.png';
import linke from '../assets/LinkedIn.png';

// Dokter
import dok1 from '../assets/dok1.png';
import dok2 from '../assets/dok2.png';
import dok3 from '../assets/dok3.png';
import dok4 from '../assets/dok4.png';
import dok5 from '../assets/dok5.png';
import dok6 from '../assets/dok6.png';

// patner
import facebook from '../assets/Fb.png';
import yt from '../assets/YouTube.png';
import web from '../assets/Webflow.png';
import pin from '../assets/Pinterest.png';
import google from '../assets/Google.png';
import tw from '../assets/Twitch.png';


const HomePage = () => {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />
      
      {/* Homepage */}
      <div className="homepage">
        <div className="container mx-auto px-4">
          <div className="hero lg:pt-32 pt-24 flex flex-col lg:flex-row items-center">
            <div className="box-title flex-1 mb-8 lg:mb-0 lg:ms-8">
              <h1 className="text-3xl lg:text-5xl font-bold">
                Providing Quality <span className="text-green-600">Healthcare</span> for a <span className="text-green-600">Brighter</span> and <span className="text-green-600">Healthy</span> Future
              </h1>
              <p className="mt-4 text-gray-700 text-justify">
                At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals,
                cutting-edge technology, and compassionate approach make us a leader in the healthcare industry.
              </p>
              <a href="#" className="flex w-40 bg-green-700 text-white px-4 py-3 mt-7 rounded-md">
                <img src={arrow} alt="" />
                <p className="ms-2">Watch Vidio</p>
              </a>  
            </div>
            <div className="box-img flex-1">
              <img src={logo} alt="doctor" className="lg:w-[22rem] w-80 h-auto mx-auto"/>
            </div>
          </div>
        </div>
      </div>

      {/* Numbers */}
      <div className="number lg:h-[340px]">
        <div className="container mx-auto px-4 gap-10 lg:pt-20 pt-10">
            <div className="flex justify-center">
                <h1 className="text-2xl font-bold">Our results in numbers</h1>
            </div>
            <div className="lg:flex justify-around gap-12 lg:mt-16 mt-10">
                <div className="text-center lg:mb-0 mb-6">
                    <h1 className="text-3xl font-bold text-green-600">99%</h1>
                    <p className="font-semibold text-lg">Customer satisfaction</p>
                </div>
                <div className="text-center lg:mb-0 mb-6">
                    <h1 className="text-3xl font-bold text-green-600">15k</h1>
                    <p className="font-semibold text-lg">Online Patients</p>
                </div>
                <div className="text-center lg:mb-0 mb-6">
                    <h1 className="text-3xl font-bold text-green-600">12k</h1>
                    <p className="font-semibold text-lg">Patients Recovered</p>
                </div>
                <div className="text-center lg:mb-0 mb-6">
                    <h1 className="text-3xl font-bold text-green-600">240%</h1>
                    <p className="font-semibold text-lg">Company growth</p>
                </div>
            </div>                    
        </div>
      </div>

    {/* About */}
    <div className="about pb-10">
        <div className="container mx-auto px-4">
          <div className="hero pt-6 flex flex-col lg:flex-row items-center">
            <div className="box-title flex-1 mb-8 lg:mb-0 lg:ms-8">
              <h1 className="text-3xl lg:text-5xl lg:mt-0 mt-8 font-bold text-green-600">
              You have lots of reasons to choose us
              </h1>
              <p className="mt-4 text-gray-700 text-justify">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.
              </p>
              <a href="#" className="mt-4 inline-block bg-green-700 text-white px-6 py-3 mr-4 rounded-full">
                Get started
              </a>    
              <a href="#" className="mt-4 inline-block bg-white text-green-700 px-6 py-3 rounded-full">
                Talk to sales
              </a>    
            </div>
            <div className="box-img flex-1">
              <img src={operasi} alt="doctor" className="w-96 h-auto px-1 mx-auto"/>
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

    {/* Members */}
    <div className="service pb-10">
        <div className="container mx-auto px-4">
          <div className="service-konten pt-20">
            <div className="box-title text-center">
              <h1 className="text-2xl font-bold text-green-600">Meet our team members</h1>
              <p className="my-4">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar <br /> elementum tempus hac tellus libero accumsan. </p>
            </div>
              <div className="box-konten flex flex-wrap justify-around gap-8 lg:mx-8 mx-2 mt-10">
                <div className="box bg-slate-100 lg:w-[22rem] p-6 rounded-lg shadow-md justify-center items-center text-center">
                  <img src={dok1} alt="Dental treatments" className="w-1/2 h-auto mb-2 mx-auto" />
                  <h1 className="text-lg font-bold text-green-600">John Carter</h1>
                  <h2 className="font-semibold mb-1 uppercase">CEO & Co-Founder</h2>
                  <p className="text-gray-700 mb-4 text-sm">Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. </p>
                  <div>
                  <div className="medsos flex justify-center gap-2">
                    <a href="#" className="">
                      <img src={fb} alt="" className="ml-2" />
                    </a>
                    <a href="#" className="">
                      <img src={ig} alt="" className="ml-2" />
                    </a>
                    <a href="#" className="">
                      <img src={tweet} alt="" className="ml-2" />
                    </a>
                    <a href="#" className="">
                      <img src={linke} alt="" className="ml-2" />
                    </a>
                  </div>
                  </div>
                </div>
                <div className="box bg-slate-100 lg:w-[22rem] p-6 rounded-lg shadow-md justify-center items-center text-center">
                  <img src={dok2} alt="Dental treatments" className="w-1/2 h-auto mb-2 mx-auto" />
                  <h1 className="text-lg font-bold text-green-600">Sophie Moore</h1>
                  <h2 className="font-semibold mb-1 uppercase">dental specialist</h2>
                  <p className="text-gray-700 mb-4 text-sm">Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. </p>
                  <div>
                  <div className="medsos flex justify-center gap-2">
                    <a href="#" className="">
                      <img src={fb} alt="" className="ml-2" />
                    </a>
                    <a href="#" className="">
                      <img src={ig} alt="" className="ml-2" />
                    </a>
                    <a href="#" className="">
                      <img src={tweet} alt="" className="ml-2" />
                    </a>
                    <a href="#" className="">
                      <img src={linke} alt="" className="ml-2" />
                    </a>
                  </div>
                  </div>
                </div>
                <div className="box bg-slate-100 lg:w-[22rem] p-6 rounded-lg shadow-md justify-center items-center text-center">
                  <img src={dok3} alt="Dental treatments" className="w-1/2 h-auto mb-2 mx-auto" />
                  <h1 className="text-lg font-bold text-green-600">Matt Cannon</h1>
                  <h2 className="font-semibold mb-1 uppercase">orthopedic</h2>
                  <p className="text-gray-700 mb-4 text-sm">Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. </p>
                  <div>
                  <div className="medsos flex justify-center gap-2">
                    <a href="#" className="">
                      <img src={fb} alt="" className="ml-2" />
                    </a>
                    <a href="#" className="">
                      <img src={ig} alt="" className="ml-2" />
                    </a>
                    <a href="#" className="">
                      <img src={tweet} alt="" className="ml-2" />
                    </a>
                    <a href="#" className="">
                      <img src={linke} alt="" className="ml-2" />
                    </a>
                  </div>
                  </div>
                </div>
                <div className="box bg-slate-100 lg:w-[22rem] p-6 rounded-lg shadow-md justify-center items-center text-center">
                  <img src={dok4} alt="Dental treatments" className="w-1/2 h-auto mb-2 mx-auto" />
                  <h1 className="text-lg font-bold text-green-600">Andy Smith</h1>
                  <h2 className="font-semibold mb-1 uppercase">brain surgeon</h2>
                  <p className="text-gray-700 mb-4 text-sm">Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. </p>
                  <div>
                  <div className="medsos flex justify-center gap-2">
                    <a href="#" className="">
                      <img src={fb} alt="" className="ml-2" />
                    </a>
                    <a href="#" className="">
                      <img src={ig} alt="" className="ml-2" />
                    </a>
                    <a href="#" className="">
                      <img src={tweet} alt="" className="ml-2" />
                    </a>
                    <a href="#" className="">
                      <img src={linke} alt="" className="ml-2" />
                    </a>
                  </div>
                  </div>
                </div>
                <div className="box bg-slate-100 lg:w-[22rem] p-6 rounded-lg shadow-md justify-center items-center text-center">
                  <img src={dok5} alt="Dental treatments" className="w-1/2 h-auto mb-2 mx-auto" />
                  <h1 className="text-lg font-bold text-green-600">Lily Woods</h1>
                  <h2 className="font-semibold mb-1 uppercase">heart specialist</h2>
                  <p className="text-gray-700 mb-4 text-sm">Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. </p>
                  <div>
                  <div className="medsos flex justify-center gap-2">
                    <a href="#" className="">
                      <img src={fb} alt="" className="ml-2" />
                    </a>
                    <a href="#" className="">
                      <img src={ig} alt="" className="ml-2" />
                    </a>
                    <a href="#" className="">
                      <img src={tweet} alt="" className="ml-2" />
                    </a>
                    <a href="#" className="">
                      <img src={linke} alt="" className="ml-2" />
                    </a>
                  </div>
                  </div>
                </div>
                <div className="box bg-slate-100 lg:w-[22rem] p-6 rounded-lg shadow-md justify-center items-center text-center">
                  <img src={dok6} alt="Dental treatments" className="w-1/2 h-auto mb-2 mx-auto" />
                  <h1 className="text-lg font-bold text-green-600">Patrick Meyer</h1>
                  <h2 className="font-semibold mb-1 uppercase">eye specialist</h2>
                  <p className="text-gray-700 mb-4 text-sm">Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. </p>
                  <div>
                  <div className="medsos flex justify-center gap-2">
                    <a href="#" className="">
                      <img src={fb} alt="" className="ml-2" />
                    </a>
                    <a href="#" className="">
                      <img src={ig} alt="" className="ml-2" />
                    </a>
                    <a href="#" className="">
                      <img src={tweet} alt="" className="ml-2" />
                    </a>
                    <a href="#" className="">
                      <img src={linke} alt="" className="ml-2" />
                    </a>
                  </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>

    {/* Testi*/}
    <div className="member pb-10">
        <div className="container mx-auto px-4">
          <div className="service-konten pt-20">
            <div className="box-title text-center">
              <h1 className="text-2xl font-bold text-green-600">Testimonial</h1>
              <p className="my-4">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar <br /> elementum tempus hac tellus libero accumsan. </p>
            </div>
            <div className="horizontal-scroll">
              <div className="box-testi flex gap-8 lg:mx-8 mx-2 mt-10">
                <div className="box bg-slate-100 lg:w-[22rem] max-w-[18rem] p-6 rounded-lg shadow-md justify-left items-left text-left">
                  <img src={dok1} alt="Dental treatments" className="w-1/4 h-auto mb-4" />
                  <h2 className="font-semibold mb-1">“An amazing service”</h2>
                  <p className="text-gray-700 mb-6 text-sm">Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.</p>
                  <p className="font-semibold text-green-600">John Carter</p>
                  <p className="text-gray-700 text-sm">CEO at Google</p>
                </div>
                <div className="box bg-slate-100 lg:w-[22rem] max-w-[18rem] p-6 rounded-lg shadow-md justify-left items-left text-left">
                  <img src={dok1} alt="Dental treatments" className="w-1/4 h-auto mb-4" />
                  <h2 className="font-semibold mb-1">“An amazing service”</h2>
                  <p className="text-gray-700 mb-6 text-sm">Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.</p>
                  <p className="font-semibold text-green-600">John Carter</p>
                  <p className="text-gray-700 text-sm">CEO at Google</p>
                </div>
                <div className="box bg-slate-100 lg:w-[22rem] max-w-[18rem] p-6 rounded-lg shadow-md justify-left items-left text-left">
                  <img src={dok1} alt="Dental treatments" className="w-1/4 h-auto mb-4" />
                  <h2 className="font-semibold mb-1">“An amazing service”</h2>
                  <p className="text-gray-700 mb-6 text-sm">Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.</p>
                  <p className="font-semibold text-green-600">John Carter</p>
                  <p className="text-gray-700 text-sm">CEO at Google</p>
                </div>
                <div className="box bg-slate-100 lg:w-[22rem] max-w-[18rem] p-6 rounded-lg shadow-md justify-left items-left text-left">
                  <img src={dok1} alt="Dental treatments" className="w-1/4 h-auto mb-4" />
                  <h2 className="font-semibold mb-1">“An amazing service”</h2>
                  <p className="text-gray-700 mb-6 text-sm">Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.</p>
                  <p className="font-semibold text-green-600">John Carter</p>
                  <p className="text-gray-700 text-sm">CEO at Google</p>
                </div>
                <div className="box bg-slate-100 lg:w-[22rem] max-w-[18rem] p-6 rounded-lg shadow-md justify-left items-left text-left">
                  <img src={dok1} alt="Dental treatments" className="w-1/4 h-auto mb-4" />
                  <h2 className="font-semibold mb-1">“An amazing service”</h2>
                  <p className="text-gray-700 mb-6 text-sm">Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.</p>
                  <p className="font-semibold text-green-600">John Carter</p>
                  <p className="text-gray-700 text-sm">CEO at Google</p>
                </div>
                <div className="box bg-slate-100 lg:w-[22rem] max-w-[18rem] p-6 rounded-lg shadow-md justify-left items-left text-left">
                  <img src={dok1} alt="Dental treatments" className="w-1/4 h-auto mb-4" />
                  <h2 className="font-semibold mb-1">“An amazing service”</h2>
                  <p className="text-gray-700 mb-6 text-sm">Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.</p>
                  <p className="font-semibold text-green-600">John Carter</p>
                  <p className="text-gray-700 text-sm">CEO at Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

    {/* Patner */}
    <div className="patner">
      <div className="container mx-auto px-4 w-full lg:h-[14rem] h-[18rem]">
        <div className="title text-2xl font-bold flex justify-center text-center text-green-600">
          <h1>Trusted by 10,000+ companies around the world</h1>
        </div>
        <div className="logo lg:flex flex flex-wrap justify-around items-center gap-8 lg:mt-20 mt-4">
          <img src={facebook} alt="" />
          <img src={web} alt="" />
          <img src={pin} alt="" />
          <img src={yt} alt="" />
          <img src={tw} alt="" />
          <img src={google} alt="" />
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
  );
};

export default HomePage;
