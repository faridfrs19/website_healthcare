import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      <div className="bg-slate-200 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h5 className="text-balance font-semibold tracking-tight text-gray-900 mb-2">Get In Touch</h5>
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact Us</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
        </div>
        <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">First name</label>
              <div className="mt-2.5">
                <input type="text" placeholder="Enter your first name" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm/6" />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">Last name</label>
              <div className="mt-2.5">
                <input type="text" placeholder="Enter your last name" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm/6" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">Email</label>
              <div className="mt-2.5">
                <input type="email" placeholder="Enter your email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm/6" />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm/6 font-semibold text-gray-900">Phone Number</label>
              <div className="mt-2.5">
                <input type="tel" placeholder="Enter your phone number" name="phone" id="phone" autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm/6" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="topic" className="block text-sm/6 font-semibold text-gray-900">Choose a Topic</label>
              <div className="mt-2.5">
                <select name="topic" id="topic" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm/6">
                  <option value="">Select a topic</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Support Request</option>
                  <option value="general">General Question</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">Message</label>
              <div className="mt-2.5">
                <textarea name="message" placeholder="Type your message..." id="message" rows="4" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm/6"></textarea>
              </div>
            </div>
            <div className="sm:col-span-2 flex items-center">
              <input type="radio" name="terms" id="accept-terms" value="accept" className="mr-2" />
              <label htmlFor="accept-terms" className="text-sm/6 text-gray-600">
                I accept the terms.
              </label>
            </div>
          </div>
          <div className="mt-10">
            <button type="submit" className="inline-block rounded-md bg-green-700 px-3.5 py-1.5 text-sm font-semibold text-white shadow-lg ring-1 ring-green-700 hover:ring-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700">
              Send message
            </button>
          </div>
        </form>
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

export default ContactPage;
