# Averra

Averra is a comprehensive full-stack web application inspired by Airbnb, designed to facilitate accommodation booking and management. It integrates multiple modules including a main booking platform, real-time chat functionality, event management, and student utility tools. Built with modern web technologies, Averra demonstrates scalable architecture, secure authentication, and user-centric features.

## Features

### Main Application (Accommodation Booking)
- **User Authentication**: Secure registration and login with OTP verification via email and SMS.
- **Listing Management**: Create, edit, delete, and browse accommodation listings with image uploads to Cloudinary.
- **Reviews & Ratings**: Users can leave comments and star ratings (1-5) for listings.
- **Booking System**: Integrated booking with date range selection and automatic price calculation.
- **Search & Filtering**: Filter listings by category, price range, and location search.
- **Geolocation**: Automatic geocoding of listing locations to latitude/longitude.
- **Responsive Design**: Mobile-friendly interface using EJS templates and custom CSS.
- **Security Features**: Rate limiting, input validation with Joi, session management, and IP logging.
- **Flash Messages**: Real-time user feedback for actions and errors.

## Tech Stack

| Component | Technology |
|-----------|------------|
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB with Mongoose ODM |
| **Frontend** | EJS templating engine, HTML5, CSS3, JavaScript |
| **Authentication** | Passport.js (Local Strategy), Passport-Local-Mongoose |
| **File Storage** | Cloudinary (Image uploads via Multer) |
| **Communication** | Nodemailer (Email), Twilio (SMS), Sendinblue |
| **Validation** | Joi schemas |
| **Session Management** | Express-Session with MongoDB store |
| **Real-time Features** | Socket.io (for Chat-App) |
| **Date Handling** | Flatpickr (Date picker) |
| **Utilities** | Method-Override, Connect-Flash, Express-Rate-Limit, Dotenv |

## Installation

### Prerequisites
- Node.js (v22.13.1 or higher)
- MongoDB (local or MongoDB Atlas)
- Git

### Setup Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/averra.git
   cd averra
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Configuration**:
   Create a `.env` file in the root directory with the following variables:
   ```env
   ATLASDB_URL=mongodb+srv://your-mongodb-atlas-connection-string
   CLOUD_NAME=your-cloudinary-cloud-name
   CLOUD_API_KEY=your-cloudinary-api-key
   CLOUD_API_SECRET=your-cloudinary-api-secret
   SECRET=your-session-secret-key
   GMAIL_USER=your-gmail-username
   GMAIL_PASS=your-gmail-app-password
   TWILIO_ACCOUNT_SID=your-twilio-account-sid
   TWILIO_AUTH_TOKEN=your-twilio-auth-token
   TWILIO_PHONE_NUMBER=your-twilio-phone-number
   PORT=8080
   NODE_ENV=development
   ```

4. **Initialize Database**:
   ```bash
   node init/index.js
   ```

5. **Start the Application**:
   ```bash
   npm start
   ```
   Or for development:
   ```bash
   npm run dev
   ```

6. **Access the Application**:
   Open your browser and navigate to `http://localhost:8080`

## Usage

### Main Application
1. **Registration**: Sign up with email verification via OTP.
2. **Login**: Authenticate using your credentials.
3. **Browse Listings**: View all available accommodations on the home page.
4. **Create Listing**: Add new accommodations with images and details.
5. **Search & Filter**: Use category filters, price ranges, or location search.
6. **View Details**: Click on listings to see full details, reviews, and booking options.
7. **Leave Reviews**: Rate and comment on listings you've experienced.
8. **Book Accommodations**: Select dates and confirm bookings.

## Project Structure

```
averra/
├── app.js                 # Main Express server configuration
├── package.json           # Project dependencies and scripts
├── cloudConfig.js         # Cloudinary storage setup
├── middleware.js          # Custom middleware (auth, validation, etc.)
├── schema.js              # Joi validation schemas
├── models/                # Mongoose database models
│   ├── user.js
│   ├── listing.js
│   └── review.js
├── controllers/           # Route business logic
│   ├── user.js
│   ├── listing.js
│   └── review.js
├── routes/                # API route definitions
│   ├── user.js
│   ├── listing.js
│   └── review.js
├── views/                 # EJS templates
│   ├── layouts/
│   ├── includes/
│   ├── listing/
│   ├── users/
│   └── policies/
├── public/                # Static assets
│   ├── css/
│   ├── js/
│   └── icons/
├── init/                  # Database initialization
├── utils/                 # Helper utilities
├── chat-app/              # Real-time chat module
├── eventspark/            # Event management module
└── studentos/             # Student utility tools
```

## API Endpoints

### Listings
- `GET /listings` - Get all listings
- `POST /listings` - Create new listing
- `GET /listings/:id` - Get listing details
- `PUT /listings/:id` - Update listing
- `DELETE /listings/:id` - Delete listing
- `GET /listings/search` - Search listings
- `GET /listings/price/:price` - Filter by price

### Reviews
- `POST /listings/:id/reviews` - Add review
- `DELETE /listings/:id/reviews/:reviewId` - Delete review

### Users
- `GET /signup` - Signup page
- `POST /signup` - Register user
- `GET /login` - Login page
- `POST /login` - Authenticate user
- `GET /logout` - Logout
- `POST /verify-otp` - Verify OTP

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by Airbnb's platform design
- Built as a learning project for full-stack development
- Utilizes open-source libraries and frameworks 

## ⚠️ Note on Repository History

This project was originally developed by me on my previous GitHub account (Devansh2835), which I lost access to due to 2FA issues.

The original repository can be found here: https://github.com/Devansh2835/Averra.git

This is a re-upload for portfolio purposes.

