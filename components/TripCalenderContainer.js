import React from 'react';
import PropTypes from 'prop-types';

const TripCalenderContainer = ({ styles }) => {
    console.log(styles);
    return (
        <>
            <div className="w-4/5">
                <div className="w-1/3 relative ml-64 pt-48">
                    <div className="flex">
                        <div className="w-1/4">
                            <div className="rounded-full w-20 h-20 p-2 flex items-center justify-center bg-white">
                                <img
                                    src="/logo.png"
                                    alt="logo"
                                    className="w-18 h-18 rounded-full"
                                />
                            </div>
                        </div>
                        <div className="text-center border border-white w-full ml-3">
                            <h2 className="text-white head-t text-4xl font-bold px-1 font-mono tracking-wide">
                                HILTON HOTEL
                            </h2>
                            <div className="bg-white py-1">POWERED BY TRAVEL JINNI</div>
                        </div>
                    </div>
                    <div className="mt-2 border border-white bg-gray-400 bg-opacity-10 blur-filter rounded-md">
                        <div className="text-center p-4">
                            <h3 className="text-center text-5xl font-serif font-semibold py-5 text-white leading-normal">
                                Your Trip <br /> Awaits You!
                            </h3>
                            <p className="text-base pb-5 text-white">
                                We have taken some time to help plan your trip to make it a
                                memorable one. Access your calendar now for even more things vou can
                                do on your trip
                            </p>
                            <div className="pt-4">
                                <button className="bg-yellow-300 flex w-full py-2 mb-5 justify-center border-2 border-black font-black">
                                    ACCESS CALENDAR
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

TripCalenderContainer.propTypes = {
    styles: PropTypes.object
};

export default TripCalenderContainer;
