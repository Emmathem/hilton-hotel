import React from 'react';
import PropTypes from 'prop-types';

const Countdown = ({ title, countObject }) => {
    return (
        <>
            <div className="py-3">
                <h5 className="text-sm">{title}</h5>
                <div className="flex">
                    <div className="text-center leading-3 w-auto mr-3">
                        <h3 className="pb-0 mb-0 text-xl font-bold text-yellow-300">
                            {countObject.weekCount}
                        </h3>
                        <small className="uppercase">Weeks</small>
                    </div>
                    <div className="text-center leading-3 w-auto h3-2 mr-3">
                        <h3 className="pb-0 mb-0 text-xl font-bold text-yellow-300">
                            {countObject.dayCount}
                        </h3>
                        <small className="uppercase">Days</small>
                    </div>
                    <div className="text-center leading-3 w-auto h3-2 mr-3">
                        <h3 className="pb-0 mb-0 text-xl font-bold text-yellow-300">
                            {countObject.hourCount}
                        </h3>
                        <small className="uppercase">Hours</small>
                    </div>
                    <div className="text-center leading-3 w-auto h3-2 mr-3">
                        <h3 className="pb-0 mb-0 text-xl font-bold text-yellow-300">
                            {countObject.minCount}
                        </h3>
                        <small className="uppercase">Minutes</small>
                    </div>
                    <div className="text-center leading-3 w-auto h3-2">
                        <h3 className="pb-0 mb-0 text-xl font-bold text-yellow-300">
                            {countObject.secCount}
                        </h3>
                        <small className="uppercase">Seconds</small>
                    </div>
                </div>
            </div>
        </>
    );
};

Countdown.propTypes = {
    title: PropTypes.string.isRequired,
    countObject: PropTypes.object
};

export default Countdown;
