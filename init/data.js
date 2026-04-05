const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_01.jpg"
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    latitude: 34.0259,
    longitude: -118.7798,
    category: "beaches"
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_02.jpg"
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    latitude: 40.7128,
    longitude: -74.0060,
    category: "urban"
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_03.jpg"
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    latitude: 39.1911,
    longitude: -106.8175,
    category: "mountain"
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_04.jpg"
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    latitude: 43.7696,
    longitude: 11.2558,
    category: "culture"
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_05.jpg"
    },
    price: 800,
    location: "Portland",
    country: "United States",
    latitude: 45.5152,
    longitude: -122.6784,
    category: "farmstays"
  },
  {
    title: "Beachfront Paradise",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_06.jpg"
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    latitude: 21.1619,
    longitude: -86.8515,
    category: "beaches"
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_07.jpg"
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    latitude: 39.0968,
    longitude: -120.0324,
    category: "beaches"
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_08.jpg"
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    latitude: 34.0522,
    longitude: -118.2437,
    category: "urban"
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_09.jpg"
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    latitude: 46.0961,
    longitude: 7.2266,
    category: "mountain"
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_10.jpg"
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    latitude: -2.3333,
    longitude: 34.8333,
    category: "nature"
  },
  {
    title: "Historic Canal House",
    description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_11.jpg"
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    latitude: 52.3676,
    longitude: 4.9041,
    category: "culture"
  },
  {
    title: "Private island Retreat",
    description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_12.jpg"
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    latitude: -17.7134,
    longitude: 178.0650,
    category: "island"
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_13.jpg"
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    latitude: 51.8330,
    longitude: -1.8433,
    category: "nature"
  },
  {
    title: "Historic Brownstone in Boston",
    description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_14.jpg"
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    latitude: 42.3601,
    longitude: -71.0589,
    category: "urban"
  },
  {
    title: "Beachfront Bungalow in Bali",
    description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_15.jpg"
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    latitude: -8.3405,
    longitude: 115.0920,
    category: "beaches"
  },
  {
    title: "mountain View Cabin in Banff",
    description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_16.jpg"
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    latitude: 51.1784,
    longitude: -115.5708,
    category: "mountain"
  },
  {
    title: "Art Deco Apartment in Miami",
    description: "Step into the glamour of the 1920s in this stylish Art Deco apartment in South beaches.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_17.jpg"
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    latitude: 25.7617,
    longitude: -80.1918,
    category: "urban"
  },
  {
    title: "Tropical Villa in Phuket",
    description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_18.jpg"
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    latitude: 7.8804,
    longitude: 98.3923,
    category: "nature"
  },
  {
    title: "Historic Castle in Scotland",
    description: "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_19.jpg"
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    latitude: 57.1200,
    longitude: -4.7100,
    category: "culture"
  },
  {
    title: "Desert Oasis in Dubai",
    description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_20.jpg"
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    latitude: 25.2048,
    longitude: 55.2708,
    category: "urban"
  },
  {
    title: "Rustic Log Cabin in Montana",
    description: "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_21.jpg"
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    latitude: 46.8797,
    longitude: -110.3626,
    category: "mountain"
  },
  {
    title: "Beachfront Villa in Greece",
    description: "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_22.jpg"
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    latitude: 37.4467,
    longitude: 25.3289,
    category: "beaches"
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_23.jpg"
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    latitude: 9.7489,
    longitude: -83.7534,
    category: "farmstays"
  },
  {
    title: "Historic Cottage in Charleston",
    description: "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_24.jpg"
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    latitude: 32.7765,
    longitude: -79.9311,
    category: "culture"
  },
  {
    title: "Modern Apartment in Tokyo",
    description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_25.jpg"
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    latitude: 35.6895,
    longitude: 139.6917,
    category: "urban"
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description: "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_26.jpg"
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    latitude: 43.1939,
    longitude: -71.5724,
    category: "mountain"
  },
  {
    title: "Luxury Villa in the Maldives",
    description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_27.jpg"
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    latitude: 3.2028,
    longitude: 73.2207,
    category: "island"
  },
  {
    title: "Ski Chalet in Aspen",
    description: "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_28.jpg"
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    latitude: 39.1911,
    longitude: -106.8175,
    category: "mountain"
  },
  {
    title: "Secluded beaches House in Costa Rica",
    description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing_img_29.jpg"
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    latitude: 9.7489,
    longitude: -83.7534,
    category: "beaches"
  },
  {
  title: "Cliffside Hotel in Santorini",
  description: "Enjoy stunning sunsets from this cliffside hotel overlooking the Aegean Sea.",
  image: {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    filename: "listing_img_29.jpg"
  },
  price: 2800,
  location: "Santorini",
  country: "Greece",
  latitude: 36.3932,
  longitude: 25.4615,
  category: "beaches"
},
  {
  title: "Cozy Hostel in Amsterdam",
  description: "Meet new friends in this cozy and budget-friendly hostel in the heart of Amsterdam.",
  image: {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    filename: "listing_img_30.jpg"
  },
  price: 900,
  location: "Amsterdam",
  country: "Netherlands",
  latitude: 52.3676,
  longitude: 4.9041,
  category: "hostels"
},
{
  title: "Charming Castle in Loire Valley",
  description: "Stay in a fairytale castle surrounded by vineyards and history.",
  image: {
    url: "https://castlesy.com/wp-content/uploads/2022/04/Lords-Castle-Piermont-New-York-sml-768x562.jpg",
    filename: "listing_img_31.jpg"
  },
  price: 5200,
  location: "Loire Valley",
  country: "France",
  latitude: 47.3891,
  longitude: 0.6936,
  category: "castles"
},
{
  title: "High-Rise Apartment in New York",
  description: "Live above the skyline in this luxurious apartment in Manhattan.",
  image: {
    url: "https://i.pinimg.com/originals/0f/3f/7d/0f3f7ddfe15d6177154b0a6d49cf7146.jpg",
    filename: "listing_img_33.jpg"
  },
  price: 4800,
  location: "New York",
  country: "United States",
  latitude: 40.7128,
  longitude: -74.0060,
  category: "urban"
},
{
  title: "Cabin by Lake Tahoe",
  description: "A peaceful getaway in a lakeside cabin with stunning mountain views.",
  image: {
    url: "https://cdn.vox-cdn.com/thumbor/f_cl0ZOKgn-vpbTEAfErc9ZxfbA=/0x0:1023x682/1200x0/filters:focal(0x0:1023x682):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/16344353/0b0cd00c_891f_49a5_a75c_cdd640a23020.f10.jpg",
    filename: "listing_img_34.jpg"
  },
  price: 1700,
  location: "Lake Tahoe",
  country: "United States",
  latitude: 39.0968,
  longitude: -120.0324,
  category: "mountain"
},
{
  title: "Island Villa in Bali",
  description: "Relax in a private island villa with tropical surroundings and serene beaches.",
  image: {
    url: "https://www.oluxuryvillas.com/img/villa/image/private_island_villa_in_randheli_maldives113-0.jpg",
    filename: "listing_img_35.jpg"
  },
  price: 3500,
  location: "Bali",
  country: "Indonesia",
  latitude: -8.3405,
  longitude: 115.0920,
  category: "island"
},
{
  title: "Safari Lodge in Kenya",
  description: "Witness wildlife in comfort at this safari lodge with modern amenities.",
  image: {
    url: "https://www.sleepermagazine.com/wp-content/uploads/2020/07/mdluli-safari-lodge-south-africa.jpg",
    filename: "listing_img_36.jpg"
  },
  price: 3100,
  location: "Nairobi",
  country: "Kenya",
  latitude: -1.2921,
  longitude: 36.8219,
  category: "nature"
},
{
  title: "Snow Cabin in Banff",
  description: "Escape into a snowy wonderland in this cozy cabin in Banff National Park.",
  image: {
    url: "https://th.bing.com/th/id/OIP.g3Yg4cd6iEeLzJUfyH8-sQHaEK?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
    filename: "listing_img_37.jpg"
  },
  price: 1900,
  location: "Banff",
  country: "Canada",
  latitude: 51.1784,
  longitude: -115.5708,
  category: "mountain"
},
{
  title: "Treehouse in Oregon Forest",
  description: "Reconnect with nature in this serene treehouse tucked into an old-growth forest.",
  image: {
    url: "https://i.pinimg.com/originals/17/2b/da/172bda5e5da676b73c2ddb68843399fc.jpg",
    filename: "listing_img_38.jpg"
  },
  price: 1300,
  location: "Oregon",
  country: "United States",
  latitude: 43.8041,
  longitude: -120.5542,
  category: "nature"
},
{
  title: "Luxury Hotel in Paris",
  description: "Enjoy fine dining and luxury in the heart of Paris.",
  image: {
    url: "https://cdn.luxaterra.com/media/20210629124348/best-hotels-paris-hotel-de-crillon-luxa-terra-1650x1100.jpg",
    filename: "listing_img_39.jpg"
  },
  price: 4500,
  location: "Paris",
  country: "France",
  latitude: 48.8566,
  longitude: 2.3522,
  category: "urban"
},
{
  title: "Beach Bungalow in Goa",
  description: "Chill by the beach in this affordable and cozy bungalow.",
  image: {
    url: "https://th.bing.com/th/id/OIP.kYBp91XDU-ZKCWLhyHU7iwHaE8?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
    filename: "listing_img_40.jpg"
  },
  price: 1400,
  location: "Goa",
  country: "India",
  latitude: 15.2993,
  longitude: 74.1240,
  category: "beaches"
},
{
  title: "Studio Apartment in Seoul",
  description: "Stay in the heart of the city with everything at your fingertips.",
  image: {
    url: "https://www.frasershospitality.com/content/dam/frasers-hospitality/english/properties/korea/seoul/fraser-place-central-seoul-/images/gallery-images/rooms/room-types/two-bedroom-deluxe/Fraser_Place_Central_Seoul_Two_Bedroom_Super_Deluxe_Living_Room.jpg",
    filename: "listing_img_41.jpg"
  },
  price: 2100,
  location: "Seoul",
  country: "South Korea",
  latitude: 37.5665,
  longitude: 126.9780,
  category: "apartment"
},
{
  title: "Forest Lodge in Bavaria",
  description: "Peace and pine trees – relax in this secluded Bavarian lodge.",
  image: {
    url: "https://image-tc.galaxy.tf/wijpeg-8lwlv2ybe7ln2tm1xwyzdz0qi/forest-lodge-exterior-summer_wide.jpg?crop=0%2C101%2C1920%2C1080&width=1140",
    filename: "listing_img_42.jpg"
  },
  price: 1600,
  location: "Bavaria",
  country: "Germany",
  latitude: 48.7904,
  longitude: 11.4979,
  category: "camping"
},
{
  title: "Island Hut in Palawan",
  description: "Overwater huts with turquoise water views in Palawan.",
  image: {
    url: "https://thumbs.dreamstime.com/b/wooden-beach-hut-koh-rong-samloem-island-wooden-beach-hut-koh-rong-samloem-island-cambodia-saracen-bay-114459448.jpg",
    filename: "listing_img_43.jpg"
  },
  price: 2300,
  location: "Palawan",
  country: "Philippines",
  latitude: 9.8349,
  longitude: 118.7384,
  category: "island"
},
{
  title: "Cultural Guesthouse in Kyoto",
  description: "Live traditionally in a tatami-style guesthouse.",
  image: {
    url: "https://thumbs.dreamstime.com/b/japanese-house-style-parking-car-44516008.jpg",
    filename: "listing_img_44.jpg"
  },
  price: 2700,
  location: "Kyoto",
  country: "Japan",
  latitude: 35.0116,
  longitude: 135.7681,
  category: "culture"
},
{
  title: "Luxury Tent in Morocco",
  description: "Glamp in the Sahara with this luxurious tented camp.",
  image: {
    url: "https://www.glamping.com/static/media/uploads/property/starry_nights_luxury_camping/71860fcf5af131e4f2f4a38038b60e50efcdf329.jpg",
    filename: "listing_img_45.jpg"
  },
  price: 2000,
  location: "Merzouga",
  country: "Morocco",
  latitude: 31.1000,
  longitude: -4.0000,
  category: "camping"
},
{
  title: "Private Island Cabin in Sweden",
  description: "Disconnect from the world in this island cabin near Stockholm.",
  image: {
    url: "https://th.bing.com/th/id/OIP.j-iDiaqhdD1HW7aiILIY4AHaFb?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
    filename: "listing_img_46.jpg"
  },
  price: 2400,
  location: "Stockholm Archipelago",
  country: "Sweden",
  latitude: 59.2746,
  longitude: 18.1412,
  category: "nature"
},
{
  title: "Colorful Hostel in Barcelona",
  description: "Budget-friendly and fun hostel in the Gothic Quarter of Barcelona.",
  image: {
    url: "https://nesthostelsbarcelona.com/wp-content/uploads/2014/10/07yellownesthostelbarcelona-1.jpg",
    filename: "listing_img_47.jpg"
  },
  price: 800,
  location: "Barcelona",
  country: "Spain",
  latitude: 41.3851,
  longitude: 2.1734,
  category: "hostels"
},
{
  title: "Castle Hotel in Transylvania",
  description: "Spend the night in a legendary castle hotel surrounded by forest.",
  image: {
    url: "https://th.bing.com/th/id/OIP.Q0ExB9xiTzOpphtTHGklFwHaIA?w=2763&h=2988&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
    filename: "listing_img_48.jpg"
  },
  price: 3900,
  location: "Bran",
  country: "Romania",
  latitude: 45.5156,
  longitude: 25.3674,
  category: "castles"
}
];

module.exports = { data: sampleListings };
