import { font } from '@/lib/font';
import Image from 'next/image';

const getTranslatY = (num: number) => (num < 2 ? num * 25 : num * 25 + 125);

export const AboutFooter = () => {
    return (
        <div
            style={{
                backgroundColor: '#ece9e1',
                transform: `translateY(-${getTranslatY(4)}px)`,
                // backgroundColor: 'red',
            }}
            className="relative px-10 h-full flex flex-col justify-center items-center text-red-500  "
        >
            <div
                className={`${font.className} font-extrabold text-[20rem] uppercase group`}
            >
                <span>als</span>
                <div className="w-44 h-64 relative inline-block mr-20 group-hover:scale-90 group-hover:rotate-[30deg] transition-all duration-500">
                    <Image alt="about-logo" src="/about/bread.png" fill />
                </div>
                <span>us</span>
            </div>

            <p className="text-sm w-[35rem] text-center">
                The only thing we love more than building brands? Baking bread.
                Pop by our studio for some fresh-made sourdough, straight from
                the oven.
            </p>
            {/* /* <Footer /> */}
        </div>
    );
};
