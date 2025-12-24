import { FaPlane } from 'react-icons/fa';
import riyadhImage from '../../../../assets/img/fence/Riyadh.webp';

export default function RegisterHero() {
    return (
        <div className="relative h-full w-full overflow-hidden bg-[#1e293b]">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${riyadhImage})`,
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0c0a09]/80 via-[#0c0a09]/60 to-transparent" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 text-center">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="size-12 flex items-center justify-center bg-[#D4AF37] rounded-xl">
                        <FaPlane className="text-2xl text-black" />
                    </div>
                    <h1 className="text-white text-3xl font-black">
                        سياحة <span className="text-[#D4AF37]">الخليج</span>
                    </h1>
                </div>

                {/* Main Text */}
                <h2 className="text-white text-4xl md:text-5xl font-black mb-4 leading-tight">
                    اكتشف روعة الخليج<br />
                    <span className="text-[#D4AF37]">العربي</span>
                </h2>

                <p className="text-white/80 text-base md:text-lg max-w-md leading-relaxed">
                    انضم إلينا اليوم واستمتع بتجربة حجز فريدة لأجمل الوجهات السياحية والفعاليات في المنطقة
                </p>

                {/* Dots Indicator */}
                <div className="flex gap-2 mt-8">
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                </div>
            </div>
        </div>
    );
}
