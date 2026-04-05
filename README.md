# Averra

Averra is my first full-stack web application, an Airbnb-inspired platform that allows users to list, discover, and book accommodations. This project showcases the integration of front-end and back-end technologies to create a functional web application.

## Features

- **User Authentication**: Secure login and signup with OTP verification using Twilio and Nodemailer.
- **Listing Management**: Users can create, edit, and delete listings with image uploads via Cloudinary.
- **Reviews and Ratings**: Users can leave reviews and ratings for listings.
- **Booking System**: Integrated booking functionality with date pickers.
- **Responsive Design**: Mobile-friendly UI using EJS templates and custom CSS.
- **Flash Messages**: User feedback with connect-flash.
- **Rate Limiting**: Protection against abuse with express-rate-limit.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: Passport.js with local strategy
- **Templating**: EJS with ejs-mate
- **File Uploads**: Multer with Cloudinary
- **Email/SMS**: Nodemailer, Twilio, Sendinblue
- **Validation**: Joi
- **Other**: Dotenv, Method-Override, Connect-Mongo


## Usage

- Register a new account or log in.
- Browse listings on the home page.
- Create a new listing by clicking "Add New Listing".
- View listing details, leave reviews, and book accommodations.
- Manage your listings and bookings from your profile.

## License

This project is licensed under the ISC License. 
