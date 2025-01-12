import React from 'react'

export default function ContactUs() {
    return (
        <div>
            <div class="min-h-screen flex flex-col items-center justify-center p-6 mt-14">
                <h1 class="text-5xl font-bold text-black-800 mb-6">Contact Us</h1>

                <div class="shadow-lg rounded-lg w-full max-w-lg p-8">
                    <form class="space-y-4">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-600">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                class="w-full mt-1 p-3 border rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>


                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-600">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                class="w-full mt-1 p-3 border rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-600">Your Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Write your message here"
                                class="w-full mt-1 p-3 border rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                class="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-blue-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
