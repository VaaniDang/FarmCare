import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Storage = () => {
    const [location, setLocation] = useState({ lat: null, lng: null });
    const [locationName, setLocationName] = useState('');
    const [storageFacilities, setStorageFacilities] = useState([]);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            }, error => {
                console.error("Error getting location", error);
            });
        }
    }, []);

    useEffect(() => {
        if (location.lat && location.lng) {
            fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${location.lat}&lon=${location.lng}`)
                .then(response => response.json())
                .then(data => {
                    console.log("Location name data:", data);
                    setLocationName(data.address.city || data.address.town || data.address.village || "Unknown Location");
                })
                .catch(error => console.error("Error fetching location name", error));

            fetch(`http://localhost:4000/api/storage-facilities?lat=${location.lat}&lng=${location.lng}`)
                .then(response => response.json())
                .then(data => {
                    console.log("Storage facilities data:", data);
                    setStorageFacilities(data);
                })
                .catch(error => console.error("Error fetching storage facilities", error));
        }
    }, [location]);

    return (
        <div>
            <nav className="fixed top-0 left-0 w-full bg-white py-4 px-8 flex justify-between items-center shadow-md z-50" aria-label="Main Navigation">
                <div className="flex items-center">
                    <a href="#" className="text-green-800 font-bold text-xl mr-6">FARMCARE</a>
                    <div className="flex space-x-6 text-gray-700">
                        <Link to="/" className="hover:text-green-700">HOME</Link>
                        <a href="#" className="hover:text-green-700">ABOUT US</a>
                        <a href="#" className="hover:text-green-700">CONTACT US</a>
                    </div>
                </div>
            </nav>

            <div className="mt-20 container">
                <h1 className="text-4xl font-bold text-center mb-8 fade-in text-green-700">Storage Facilities</h1>
                {location.lat && location.lng ? (
                    <div>
                        <h3 className="text-center mt-4 text-lg fade-in text-gray-700">Your Location: {locationName} ({location.lat}, {location.lng})</h3>
                        <div className="facilities-list">
                            {storageFacilities.length > 0 ? (
                                storageFacilities.map((facility, index) => (
                                    <div key={index} className="card slide-up">
                                        <h4 className="text-xl font-semibold text-green-800">{facility.name}</h4>
                                        <p className="text-gray-700">Price: {facility.price}</p>
                                        <p className="text-gray-700">Space: {facility.space}</p>
                                        <p className="text-gray-700">Address: {facility.address}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-700">No storage facilities found nearby.</p>
                            )}
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-700">Getting your location...</p>
                )}
            </div>

            <style>{`
                .container { 
                    max-width: 1200px; 
                    margin: 0 auto; 
                    padding: 20px; 
                }
                .facilities-list {
                    margin-top: 20px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 20px;
                }
                .card {
                    background-color: white;
                    border: 1px solid #ddd;
                    padding: 20px;
                    margin-bottom: 15px;
                    border-radius: 5px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;
                }
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
                    background-color: #f9f9f9;
                }
                .card h4 {
                    margin-bottom: 10px;
                    font-size: 1.25em;
                }
                .card p {
                    margin: 0;
                    font-size: 1em;
                    color: #555;
                }
                .fade-in {
                    animation: fadeIn 1s ease-in;
                }
                .slide-up {
                    animation: slideUp 0.5s ease-in-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default Storage;
