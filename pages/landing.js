import React from 'react';
import BrowserTitle from '../components/BrowserTitle';
import style from '../styles/Welcome.module.css';
import HeaderComponent from '../components/HeaderComponent';
import TripCalenderContainer from '../components/TripCalenderContainer';
import SideBarCalendar from '../components/SideBarCalendar';
import HelpDesk from '../components/HelpDesk';

const Landing = () => {
    return (
        <>
            <BrowserTitle browserTitle="Welcome" />
            <div className={style.mainBackground}>
                <div className={style.bgCover} />
                <HeaderComponent styles={style} />
                <div className="flex w-full py-4 px-12">
                    <SideBarCalendar />
                    <TripCalenderContainer styles={style} />
                    <HelpDesk />
                </div>
            </div>
        </>
    );
};

export default Landing;
