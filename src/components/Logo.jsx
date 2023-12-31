import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div>
            <Link to={"/"}>
                <div className="flex items-center gap-3">
                    <div>
                    <img className="w-8 md:w-16" data-aos="fade-down" src="https://i.ibb.co/3TqBTw3/f7.png" alt="" />
                    </div>
                    <div data-aos="fade-up">
                        <p className=" text-sm md:text-lg font-bold underline tracking-wide"><span className="text-[#5dff33]">R</span>estaurant</p>
                        <p className="-mt-1 text-xs md:text-sm font-bold"><small className="tracking-[0.35rem] font-semibold"><span className="text-[#5dff33]">P</span>arty</small></p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Logo;