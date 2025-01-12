import React from 'react'

export default function Footer() {
  return (
    <div>
        <div class="text-white p-8 pt-10 pb-10 mt-10">
            <div class="container mx-auto flex flex-wrap items-center">
                <div class="w-full md:w-1/2 text-center md:text-left">
                    <p>© 2025 Luxora. All rights reserved.</p>
                </div>
                <div class="w-full md:w-1/2 text-center md:text-right">
                    <a href="#" class="text-white no-underline hover:text-gray-200 ml-2">Terms & Conditions</a>
                    <a href="#" class="text-white no-underline hover:text-gray-200 ml-2">Privacy Policy</a>
                </div>
            </div>
        </div>
    </div>
  )
}
