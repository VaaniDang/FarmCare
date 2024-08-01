const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get('/api/storage-facilities', (req, res) => {
  const { lat, lng } = req.query;

  const storageFacilities = [
    [
        {
          "name": "Storage Facility 1",
          "price": "₹7500/month",
          "space": "50 sq ft",
          "address": "123 Main St, Patiala, Punjab",
          "latitude": 30.3398,
          "longitude": 76.3869
        },
        {
          "name": "Storage Facility 2",
          "price": "₹9000/month",
          "space": "70 sq ft",
          "address": "456 MG Road, Mumbai, Maharashtra",
          "latitude": 19.0760,
          "longitude": 72.8777
        },
        {
          "name": "Storage Facility 3",
          "price": "₹6000/month",
          "space": "60 sq ft",
          "address": "789 Brigade Road, Bengaluru, Karnataka",
          "latitude": 12.9716,
          "longitude": 77.5946
        },
        {
          "name": "Storage Facility 4",
          "price": "₹8500/month",
          "space": "75 sq ft",
          "address": "101 Anna Salai, Chennai, Tamil Nadu",
          "latitude": 13.0827,
          "longitude": 80.2707
        },
        {
          "name": "Storage Facility 5",
          "price": "₹7000/month",
          "space": "55 sq ft",
          "address": "102 Banjara Hills, Hyderabad, Telangana",
          "latitude": 17.3850,
          "longitude": 78.4867
        },
        {
          "name": "Storage Facility 6",
          "price": "₹7500/month",
          "space": "65 sq ft",
          "address": "103 Salt Lake, Kolkata, West Bengal",
          "latitude": 22.5726,
          "longitude": 88.3639
        },
        {
          "name": "Storage Facility 7",
          "price": "₹8000/month",
          "space": "70 sq ft",
          "address": "104 Connaught Place, New Delhi, Delhi",
          "latitude": 28.6139,
          "longitude": 77.2090
        },
        {
          "name": "Storage Facility 8",
          "price": "₹6500/month",
          "space": "50 sq ft",
          "address": "105 Ashram Road, Ahmedabad, Gujarat",
          "latitude": 23.0225,
          "longitude": 72.5714
        },
        {
          "name": "Storage Facility 9",
          "price": "₹5500/month",
          "space": "40 sq ft",
          "address": "106 Civil Lines, Jaipur, Rajasthan",
          "latitude": 26.9124,
          "longitude": 75.7873
        },
        {
          "name": "Storage Facility 10",
          "price": "₹5000/month",
          "space": "45 sq ft",
          "address": "107 FC Road, Pune, Maharashtra",
          "latitude": 18.5204,
          "longitude": 73.8567
        },
        {"name": "Storage Facility 1",
    "price": "₹5000/month",
    "space": "50 sq ft",
    "address": "123 Chamundi Hill Rd, Mysore, Karnataka",
    "latitude": 12.3052,
    "longitude": 76.6552
  }

      ]
  ];

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
      const R = 6371;
      const dLat = deg2rad(lat2 - lat1);
      const dLon = deg2rad(lon2 - lon1);
      const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c;
      return distance;
  }

  function deg2rad(deg) {
      return deg * (Math.PI / 180);
  }

  const thresholdDistance = 50;
  const filteredFacilities = storageFacilities.filter(facility => {
      const distance = getDistanceFromLatLonInKm(lat, lng, facility.lat, facility.lng);
      return distance < thresholdDistance;
  });

  res.json(filteredFacilities);
});

app.get('/api/transport-facilities', (req, res) => {
  const { lat, lng } = req.query;

  const transportFacilities = [
    [
        {
          "name": "Transport Facility 1",
          "price": "₹4000/trip",
          "vehicle": "Truck",
          "address": "789 Pine St, Patiala, Punjab",
          "latitude": 30.3398,
          "longitude": 76.3869
        },
        {
          "name": "Transport Facility 2",
          "price": "₹6000/trip",
          "vehicle": "Van",
          "address": "101 Maple St, Ase Majra, Punjab",
          "latitude": 30.7,
          "longitude": 76.7
        },
        {
          "name": "Transport Facility 3",
          "price": "₹5000/trip",
          "vehicle": "Mini Truck",
          "address": "789 Brigade Road, Bengaluru, Karnataka",
          "latitude": 12.9716,
          "longitude": 77.5946
        },
        {
          "name": "Transport Facility 4",
          "price": "₹7000/trip",
          "vehicle": "Van",
          "address": "456 MG Road, Mumbai, Maharashtra",
          "latitude": 19.0760,
          "longitude": 72.8777
        },
        {
          "name": "Transport Facility 5",
          "price": "₹8000/trip",
          "vehicle": "Truck",
          "address": "102 Banjara Hills, Hyderabad, Telangana",
          "latitude": 17.3850,
          "longitude": 78.4867
        },
        {
          "name": "Transport Facility 6",
          "price": "₹6500/trip",
          "vehicle": "Mini Van",
          "address": "103 Salt Lake, Kolkata, West Bengal",
          "latitude": 22.5726,
          "longitude": 88.3639
        },
        {
          "name": "Transport Facility 7",
          "price": "₹9000/trip",
          "vehicle": "Truck",
          "address": "104 Connaught Place, New Delhi, Delhi",
          "latitude": 28.6139,
          "longitude": 77.2090
        },
        {
          "name": "Transport Facility 8",
          "price": "₹6000/trip",
          "vehicle": "Van",
          "address": "105 Ashram Road, Ahmedabad, Gujarat",
          "latitude": 23.0225,
          "longitude": 72.5714
        },
        {
          "name": "Transport Facility 9",
          "price": "₹5000/trip",
          "vehicle": "Mini Truck",
          "address": "106 Civil Lines, Jaipur, Rajasthan",
          "latitude": 26.9124,
          "longitude": 75.7873
        },
        {
          "name": "Transport Facility 10",
          "price": "₹4500/trip",
          "vehicle": "Van",
          "address": "107 FC Road, Pune, Maharashtra",
          "latitude": 18.5204,
          "longitude": 73.8567
        },
        {
            "name": "Transport Facility 3",
            "price": "₹2000/trip",
            "vehicle": "Bike",
            "address": "789 Sayyaji Rao Rd, Mysore, Karnataka",
            "latitude": 12.3081,
            "longitude": 76.6557
          }
        
      ]
  ];

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
      const R = 6371;
      const dLat = deg2rad(lat2 - lat1);
      const dLon = deg2rad(lon2 - lon1);
      const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c;
      return distance;
  }

  function deg2rad(deg) {
      return deg * (Math.PI / 180);
  }

  const thresholdDistance = 50;
  const filteredFacilities = transportFacilities.filter(facility => {
      const distance = getDistanceFromLatLonInKm(lat, lng, facility.lat, facility.lng);
      return distance < thresholdDistance;
  });

  res.json(filteredFacilities);
});

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
