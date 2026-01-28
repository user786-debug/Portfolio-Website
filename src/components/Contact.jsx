import React from 'react'
import contactImg from '../assets/contactImg.jpg'

export default function Contact({ darkMode }) {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb',
      }}
      className="py-12 sm:py-16 md:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== HEADING ===== */}
        <div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            Get In{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Touch
            </span>
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl"
            style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
          >
            Let's discuss your project
          </p>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">

          {/* IMAGE */}
          <div
            className="flex justify-center order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img
              src={contactImg}
              alt="Contact"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain"
            />
          </div>

          {/* FORM */}
          <form
            data-aos="fade-left"
            data-aos-delay="300"
            className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2"
            style={{
              borderColor: darkMode ? '#374151' : '#e5e7eb',
            }}
          >
            {/* NAME ROW */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <input
                type="text"
                placeholder="First Name"
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-orange-500/20 transition-all"
                style={{
                  color: darkMode ? 'white' : '#1f2937',
                  borderColor: darkMode ? '#4b5563' : '#d1d5db',
                  backgroundColor: darkMode ? '#374151' : '#faede3',
                }}
              />

              <input
                type="text"
                placeholder="Last Name"
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-orange-500/20 transition-all"
                style={{
                  color: darkMode ? 'white' : '#1f2937',
                  borderColor: darkMode ? '#4b5563' : '#d1d5db',
                  backgroundColor: darkMode ? '#374151' : '#faede3',
                }}
              />
            </div>

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address"
              required
              data-aos="fade-up"
              data-aos-delay="500"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-orange-500/20 transition-all mb-3 sm:mb-4"
              style={{
                color: darkMode ? 'white' : '#1f2937',
                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                backgroundColor: darkMode ? '#374151' : '#faede3',
              }}
            />

            {/* PHONE NUMBER*/}
            <input
              type="tel"
              placeholder="Phone Number"
              required
              data-aos="fade-up"
              data-aos-delay="600"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-orange-500/20 transition-all mb-3 sm:mb-4"
              style={{
                color: darkMode ? 'white' : '#1f2937',
                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                backgroundColor: darkMode ? '#374151' : '#faede3',
              }}
            />

            {/* MESSAGE */}
            <textarea
              rows="4"
              placeholder="Your Message"
              required
              data-aos="fade-up"
              data-aos-delay="700"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-orange-500/20 transition-all mb-4 sm:mb-6 resize-none"
              style={{
                color: darkMode ? 'white' : '#1f2937',
                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                backgroundColor: darkMode ? '#374151' : '#faede3',
              }}
            />

            {/* BUTTON */}
            <button
              type="submit"
              data-aos="zoom-in"
              data-aos-delay="800"
              className="w-full py-2 sm:py-3 text-white font-semibold rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all"
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)',
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
dbcad

// import { section } from 'framer-motion/client'
// import conatactImg from '../assets/contactImg.jpg'

// export default function Contact({ darkMode }) {
//     return (
//         <section id='contact'
//             style={{
//                 backgroundColor: darkMode ? '#111827' : '#f9fafb'
//             }}
//             className='py-12 sm:py-16  md:py-20 overflow-hidden'>
//             <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
//                 <div className='text-center mb-8 sm:mb-10 md:mb-12'>
//                     <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold
//                     mb-2 sm:mb-3'
//                         style={{
//                             color: darkMode ? 'white' : '#1f2937'
//                         }}>
//                         Get In <span className=''
//                             style={{
//                                 background: 'linear-gradient(to right, #f97316, #f59e0b)',
//                                 WebkitBackgroundClip: 'text',
//                                 backgroundClip: 'text',
//                                 color: 'transparent'
//                             }}>
//                             Touch
//                         </span>
//                     </h2>
//                     <p
//                         className='text-base sm:text-lg md:text-xl'
//                         style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
//                         Let's discuss your project
//                     </p>
//                 </div>


//                 <div className='grid grid-cols-1 lg:grid-cols-2 gap-6
//                 sm:gap-8 md:gap-10 items-center'>
//                     <div className='flex justify-center order-2 lg:order-1'
//                         data-aos='fade-right'>
//                         <img src={conatactImg} alt='Contact'
//                             className='w-full max-w-xs sm:max-w-sm lg:max-w-md
//                         h-auto object-contain'/>
//                     </div>
//                     <form action=""
//                         style={{
//                             color: darkMode ?
//                                 'linear-gradient(to right, #1f2937, #111827)'
//                                 : 'linear-gradient(to right, #ffffff, #f9fafb)',
//                             borderColor: darkMode ? '#374151' : '#e5e7eb'
//                         }}
//                         className='rounded-xl p-4 sm:p-5 md:p-6 lg:p-8
//                         border shadow-lg order-1 lg:order-2'>
//                         <div className='grid grid-cols-1 sm:grid-cols-2
//                              gap-3 sm:gap-4 mb-3 sm:mb-4'>

//                             {/* FIRST NAME */}

//                             <input type="text"
//                                 placeholder='First Name'
//                                 style={{
//                                     color: darkMode ?
//                                         'white'
//                                         : '#1f2937',
//                                     borderColor: darkMode ? '#4b5563' : '#d1d5db',
//                                     backgroundColor: darkMode ? '#374151' : '#faede3'
//                                 }}
//                                 className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg
//                         text-sm sm:text-base focus:border-orange-500 focus:right-2
//                         focus:ring-orange-500/20 transition-all' required />



//                             {/* LAST NAME */}

//                             <input type="text"
//                                 placeholder='Last Name'
//                                 style={{
//                                     color: darkMode ?
//                                         'white'
//                                         : '#1f2937',
//                                     borderColor: darkMode ? '#4b5563' : '#d1d5db',
//                                     backgroundColor: darkMode ? '#374151' : '#faede3'
//                                 }}
//                                 className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg
//                         text-sm sm:text-base focus:border-orange-500 focus:right-2
//                         focus:ring-orange-500/20 transition-all' required />

//                         </div>
//                         {/* EMAIL ADDRESS */}
//                         <input type="email"
//                             placeholder='Email Address'
//                             style={{
//                                 color: darkMode ?
//                                     'white'
//                                     : '#1f2937',
//                                 borderColor: darkMode ? '#4b5563' : '#d1d5db',
//                                 backgroundColor: darkMode ? '#374151' : '#faede3'
//                             }}
//                             className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg
//                         text-sm sm:text-base focus:border-orange-500 focus:right-2
//                         focus:ring-orange-500/20 transition-all mb-3 sm:mb-4' required />


//                         {/* PHONE NUMBER */}
//                         <input type="tel"
//                             placeholder='Phone Number'
//                             style={{
//                                 color: darkMode ?
//                                     'white'
//                                     : '#1f2937',
//                                 borderColor: darkMode ? '#4b5563' : '#d1d5db',
//                                 backgroundColor: darkMode ? '#374151' : '#faede3'
//                             }}
//                             className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg
//                         text-sm sm:text-base focus:border-orange-500 focus:right-2
//                         focus:ring-orange-500/20 transition-all
//                         mb-3 sm:mb-4' required />


//                         {/* MESSAGE */}
//                         <textarea
//                         rows='4'
//                             placeholder='Your Message'
//                             style={{
//                                 color: darkMode ?
//                                     'white'
//                                     : '#1f2937',
//                                 borderColor: darkMode ? '#4b5563' : '#d1d5db',
//                                 backgroundColor: darkMode ? '#374151' : '#faede3'
//                             }}
//                             className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg
//                         text-sm sm:text-base focus:border-orange-500 focus:right-2
//                         focus:ring-orange-500/20 transition-all
//                         mb-4 sm:mb-6 resize-none' required />

//                         <button type='submit'
//                         style={{
//                             background: 'linear-gradient(to right, #f97316, #f59e0b)'
//                         }}
//                         className='w-full py-2 sm:py-3 text-white
//                         font-semibold rounded-lg text-sm sm:text-base
//                          hover:shadow-lg hover:shadow-orange-500/25
//                          hover:scale-[1.02] transition-all'>
//                             Send Message
//                         </button>



//                     </form>
//                 </div>

//             </div>

//         </section>
//     )
// }
