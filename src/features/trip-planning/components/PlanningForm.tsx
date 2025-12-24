import { FaArrowLeft } from 'react-icons/fa';

export default function PlanningForm() {
    return (
        <div className="py-16 bg-[#0c0a09]">
            <div className="layout-container mx-auto max-w-[1400px] px-4 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Form Steps */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* This will be populated by the individual components */}
                        <div id="destination-selector"></div>
                        <div id="trip-details"></div>
                        <div id="interests-selector"></div>
                        <div id="budget-calculator"></div>
                    </div>

                    {/* Right Column - Summary Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-[#1e293b] rounded-2xl p-6 border border-white/10 sticky top-24">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-white text-lg font-bold">ملخص الرحلة</h3>
                                <span className="bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold px-3 py-1 rounded-full">
                                    📋 ملخص
                                </span>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center py-3 border-b border-white/5">
                                    <span className="text-gray-400 text-sm">الوجهة المختارة</span>
                                    <span className="text-white font-bold text-sm">دبي، الرياض</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-white/5">
                                    <span className="text-gray-400 text-sm">المدة</span>
                                    <span className="text-white font-bold text-sm">5 أيام</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-white/5">
                                    <span className="text-gray-400 text-sm">عدد المسافرين</span>
                                    <span className="text-white font-bold text-sm">2 مسافر</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-white/5">
                                    <span className="text-gray-400 text-sm">نوع الرحلة</span>
                                    <span className="text-white font-bold text-sm">متوسط</span>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-[#b45309] to-amber-900 rounded-xl p-4 mb-6">
                                <p className="text-orange-100 text-xs mb-2">التكلفة الإجمالية المقدرة</p>
                                <p className="text-white text-3xl font-black">
                                    7,000 <span className="text-lg">ر.س</span>
                                </p>
                            </div>

                            <button className="w-full h-12 rounded-lg bg-[#D4AF37] hover:bg-[#b8941f] text-black font-bold text-sm transition shadow-lg shadow-[#D4AF37]/25 flex items-center justify-center gap-2 group">
                                <span>إنشاء خطة الرحلة</span>
                                <FaArrowLeft className="rotate-180 transition-transform group-hover:translate-x-1" />
                            </button>

                            <p className="text-gray-500 text-xs text-center mt-4">
                                يمكنك تعديل الخطة في أي وقت بعد إنشائها
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
