import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const BrowserTitle = ({ browserTitle }) => {
    return (
        <>
            <Head>
                <title>{browserTitle} - Hilton Hotel</title>
            </Head>
        </>
    );
};

BrowserTitle.propTypes = {
    browserTitle: PropTypes.string.isRequired
};

export default BrowserTitle;
