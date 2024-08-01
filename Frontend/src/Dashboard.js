import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Dashboard() {
    // State to track which buttons have been clicked
    const [clickedButtons, setClickedButtons] = useState({
        fscs: false,
        tnc: false,
        keyFeatures: false,
        privacyPolicy: false
    });

    // Function to handle button click
    const handleButtonClick = (key, pdfLink) => {
        window.open(pdfLink, '_blank');
        setClickedButtons(prevState => ({ ...prevState, [key]: true }));
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-white py-4 px-8 flex justify-between items-center shadow-md z-50" aria-label="Main Navigation">
                <div className="flex items-center">
                    <a href="#" className="text-green-800 font-bold text-xl mr-6">FARMCARE</a>
                    <div className="flex space-x-6 text-gray-700">
                        <a href="/Dashboard" className="hover:text-blue-700">HOME</a>
                        <a href="#" className="hover:text-blue-700">ABOUT US</a>
                        <a href="#" className="hover:text-blue-700">CONTACT US</a>
                    </div>
                </div>
            </nav>

            {/* Background Image Section */}
            <section aria-label="Welcome Section" className="bgsection">
                <div className="overlay">
                    <p className="text-4xl md:text-5xl lg:text-5xl font-bold text-white">FARMCARE</p>
                    <p className="mt-4 text-lg md:text-xl lg:text-xl text-white">A significant portion of Indian farmers' produce is lost due to inadequate storage facilities. Estimates suggest that up to 40% of fruits and vegetables are wasted before they reach the market.</p>
                </div>
            </section>

            {/* New Account Summary Section */}
            <section className="bg-gray-100 py-8 px-4">
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    {/* Document Card 1 */}
                    <div className="flex justify-around space-x-4">
                        <Link to="/storage">
                            <button className="flex items-center p-4 bg-green-200 hover:bg-green-300 shadow-md rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer">
                                <div className="text-center">
                                    <div>
                                        <div className="m-10">
                                            <div className="flex items-center justify-center text-gray-800 font-semibold">STORAGE FACILITIES</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </Link>
                        <Link to="/transport">
                            <button className="flex items-center p-4 bg-green-200 hover:bg-green-300 shadow-md rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer">
                                <div className="text-center">
                                    <div>
                                        <div className="m-10">
                                            <div className="flex items-center justify-center text-gray-800 font-semibold">TRANSPORTATION FACILITIES</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </Link>
                        <Link to="/govschm">
                            <button className="flex items-center p-4 bg-green-200 hover:bg-green-300 shadow-md rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer">
                                <div className="text-center">
                                    <div>
                                        <div className="m-10">
                                            <div className="flex items-center justify-center text-gray-800 font-semibold">GOVERNMENT SCHEMES</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Inline CSS */}
            <style>{`
                .bgsection {
                    background-image: url('img1.png'); /* Replace with your image path */
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    height: 400px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                }
                .overlay {
                    background-color: rgba(0, 0, 0, 0.6);
                    padding: 20px;
                    border-radius: 8px;
                    text-align: center;
                }
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .card {
                    background-color: white;
                    padding: 20px;
                    margin-bottom: 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                }
                .card h2 {
                    font-size: 1.5em;
                    margin-bottom: 10px;
                    color: #333;
                }
                .card p {
                    font-size: 1.2em;
                    margin-bottom: 15px;
                    color: #555;
                }
                .card ul {
                    list-style-type: disc;
                    padding-left: 20px;
                    margin-bottom: 20px;
                    color: #666;
                }
                .card li {
                    margin-bottom: 10px;
                    font-size: 1em;
                }
                .card button {
                    background-color: #4CAF50;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1em;
                    transition: background-color 0.3s ease;
                }
                .card button:hover {
                    background-color: #45a049;
                }
                .dropdown {
                    list-style-type: none;
                    padding: 10px;
                    margin-top: 10px;
                    background-color: #f9f9f9;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    color: #666;
                }
                .dropdown li {
                    margin-bottom: 5px;
                    font-size: 0.9em;
                }
            `}</style>
        </div>
    );
}

export default Dashboard;
