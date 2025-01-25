# Client side Contact Form

single page Vite app with TailwindCSS styling

## Requirements

- vite
- tailwindcss
- pnpm
- fontsource/inter
- @emailjs/browser

- missing captcha
- missing form validation
- missing rate limiting
- missing error handling

## EmailJS

EmailJS has a free tier limited to 200 emails per month.

documentation [here](https://www.emailjs.com/docs/)

!! important !!
service id, template id, public key are exposed on the client side.
information [Is it OK to expose my public key?](https://www.emailjs.com/docs/faq/is-it-okay-to-expose-my-public-key/)

## Environment Variables

- create a .env file in the root directory
- copy the .env.example file and paste it in the .env file
- replace the values with your own

.env.example file

- VITE_EMAILJS_SERVICE_ID
- VITE_EMAILJS_TEMPLATE_ID
- VITE_EMAILJS_PUBLIC_KEY
#   e m a i l j s - b r o w s e r - f o r m  
 