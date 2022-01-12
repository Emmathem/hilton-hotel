import React from 'react';
import { AiFillQuestionCircle, AiOutlineApartment } from 'react-icons/ai';

const HelpDesk = () => {
    return (
        <>
            <div className="absolute lg:right-12 right-2 lg:bottom-40 bottom-4 text-white">
                {/*<h3 className="text-white">Help</h3>*/}
                <ul>
                    <li className="w-8 h-10 flex items-center justify-center text-xs cursor-pointer pb-5">
                        <AiOutlineApartment size="40" />
                    </li>
                    <li className="w-8 h-10 flex items-center justify-center text-xs cursor-pointer">
                        <AiFillQuestionCircle size="40" />
                    </li>
                </ul>
            </div>
        </>
    );
};

export default HelpDesk;
