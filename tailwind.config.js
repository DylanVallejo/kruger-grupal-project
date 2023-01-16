/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pilares': "url('https://smd-prod.s3.amazonaws.com/ciencia-pink/s3fs-public/styles/background_image_file_size/public/thumbnails/image/Twitter_1.png?itok=tOBkMZ0g')",
        'james': "url('https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/web_first_images_release_0.png?itok=eP3obzhq')",
        'clifs': "url('https://stsci-opo.org/STScI-01GA6KKWG229B16K4Q38CH3BXS.png')",
      }
      
    },
  },
  plugins: [],
}