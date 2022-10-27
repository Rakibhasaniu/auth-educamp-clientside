import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase dark:text-amber-500">Our Team Members</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Our Serves Provider Team</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700 mt-14">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline text-2xl">Optio maiores eligendi molestiae Bangladesh corporations?</summary>
                            <div className="px-4 pb-4">
                                <p>Business Text Messaging Service Providers. Business SMS service providers enable small, medium, and large American corporations 
                                to send mass text messages to targeted mobile phone numbers for successful SMS marketing tools and marketing software as well as campaigns</p>
                            </div>
                        </details>
                        <details className='my-5'>
                            <summary className="py-2 outline-none cursor-pointer focus:underline text-2xl">Twilio SMS. The Twilio SMS API is another great messaging API that enables</summary>
                            <div className="px-4 pb-4">
                                <p>Telesign SMS Verify. ...
                                  <br/> 1. Nexmo SMS Messaging. ...
                                    <br /> 2.  D7SMS. ...
                                    <br /> 3.  Telnyx. ...
                                    <br /> 4.  MessageBird. ...
                                    <br /> 5.  ClickSend (Inteltech) ...
                                    <br /> 6.  Nexmo Verify.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline text-2xl">Enter your user id and password to log-in</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>If you wish to access the site, please drop a mail to smssupport[AT]nic[dot]in copy marked to your NIC coordinator and mentioning the account and SMS details and the IP from which you wish to access the site.</p>
                                <p>Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;