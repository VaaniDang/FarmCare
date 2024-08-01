import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const GovSchm = () => {
    const [showEligibility, setShowEligibility] = useState({
        pmKisan: false,
        soilHealth: false,
        pmFasal: false
    });

    const toggleEligibility = (key) => {
        setShowEligibility(prevState => ({ ...prevState, [key]: !prevState[key] }));
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-white py-4 px-8 flex justify-between items-center shadow-md z-50" aria-label="Main Navigation">
                <div className="flex items-center">
                    <a href="#" className="text-green-800 font-bold text-xl mr-6">FARMCARE</a>
                    <div className="flex space-x-6 text-gray-700">
                        <Link to="/" className="hover:text-blue-700">HOME</Link>
                        <a href="#" className="hover:text-blue-700">ABOUT US</a>
                        <a href="#" className="hover:text-blue-700">CONTACT US</a>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <div className="mt-20 container">
                <h1 className="text-4xl font-extrabold text-center text-green-800 mb-10">
                    <span className="heading-highlight">Government Schemes</span>
                </h1>
                
                {/* Loan Schemes */}
                <div className="card">
                    <h2>Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)</h2>
                    <p>To provide financial support to small and marginal farmers.</p>
                    <ul>
                        <li>Eligible farmers receive ₹6,000 per year in three equal installments of ₹2,000 each, directly into their bank accounts.</li>
                        <li>The scheme aims to ensure a minimum income for farmers, helping them meet their agricultural and household needs.</li>
                    </ul>
                    <button onClick={() => toggleEligibility('pmKisan')}>Check Eligibility</button>
                    {showEligibility.pmKisan && (
                        <ul className="dropdown">
                            <li>Small and marginal farmers with landholdings up to 2 hectares.</li>
                            <li>Farmers who are not availing any other pension scheme.</li>
                            <li>Excludes institutional landholders, farmer families holding constitutional posts, and serving or retired officers and employees of state/central government.</li>
                        </ul>
                    )}
                </div>
                <div className="card">
                    <h2>Soil Health Card Scheme</h2>
                    <p>To promote soil testing and improve soil health for better productivity.</p>
                    <ul>
                        <li>Farmers receive soil health cards that provide information about the nutrient status of their soil along with recommendations for suitable crops and fertilizers.</li>
                        <li>The scheme aims to help farmers make informed decisions about their crops and fertilizers to enhance productivity.</li>
                    </ul>
                    <button onClick={() => toggleEligibility('soilHealth')}>Check Eligibility</button>
                    {showEligibility.soilHealth && (
                        <ul className="dropdown">
                            <li>All farmers are eligible to apply.</li>
                            <li>Farmers must submit soil samples for testing at designated soil testing labs.</li>
                            <li>Periodic soil testing to be conducted every three years.</li>
                        </ul>
                    )}
                </div>
                <div className="card">
                    <h2>Pradhan Mantri Fasal Bima Yojana (PMFBY)</h2>
                    <p>To provide insurance coverage and financial support to farmers in the event of crop failure due to natural calamities, pests, and diseases.</p>
                    <ul>
                        <li>Farmers pay a uniform premium of only 2% for Kharif crops, 1.5% for Rabi crops, and 5% for commercial/horticultural crops.</li>
                        <li>The remaining premium is paid by the government to provide full insurance coverage.</li>
                        <li>Claims are settled quickly and directly into the bank accounts of farmers.</li>
                    </ul>
                    <button onClick={() => toggleEligibility('pmFasal')}>Check Eligibility</button>
                    {showEligibility.pmFasal && (
                        <ul className="dropdown">
                            <li>All farmers growing notified crops in notified areas are eligible.</li>
                            <li>Farmers must have insurable interest in the notified crops.</li>
                            <li>Non-loanee farmers must enroll through the Common Service Centres (CSCs) or the nearest authorized insurance agents.</li>
                        </ul>
                    )}
                </div>
            </div>

            {/* Inline CSS */}
            <style>{`
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .heading-highlight {
                    position: relative;
                    display: inline-block;
                    padding-bottom: 10px;
                }
                .heading-highlight::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 5px;
                    background-color: #4CAF50;
                    border-radius: 2px;
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
};

export default GovSchm;
