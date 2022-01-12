import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Countdown from './Countdown';

const HeaderComponent = ({ styles }) => {
    console.log('sty', styles);
    const countObject = {
        weekCount: '10',
        dayCount: '06',
        hourCount: '45',
        minCount: '25',
        secCount: '06'
    };
    return (
        <>
            <header
                className="flex px-12 w-full relative text-white items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.5)' }}>
                <div>
                    {/*px-8*/}
                    {/*py-8*/}
                    <Countdown title="Remaining Days to my Trip" countObject={countObject} />
                </div>
                <div>
                    <div className="flex text-sm py-5">
                        <p className="px-2">
                            <Link href="/">
                                <a>My Trips</a>
                            </Link>
                        </p>
                        <div className="flex items-center">
                            <p className="px-2">|</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                />
                            </svg>
                            <span>EN (S)</span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

HeaderComponent.propTypes = {
    styles: PropTypes.object
};

export default HeaderComponent;
