import {loading} from "../assets";
import "./Generating.css"

const Generating = ({className}) => {
    return (
        <div className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className || ""} text-base`}>
            <img className="w-5 h-5 mr-4" src={loading} alt="Loading"/>
            <div className="typewriter">
                I want to buy an apartment in the city of Minsk. Offer me ad options! Please!
            </div>
        </div>
    );
};

export default Generating;
