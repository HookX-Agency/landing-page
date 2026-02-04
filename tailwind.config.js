/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // Note: The React component contains its own internal <style> block 
            // for specific animations (shake, float), so we don't strictly need 
            // to extend the theme here, but this is good practice.
        },
    },
    plugins: [],
}
