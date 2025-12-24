import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import TripPlanningHero from './components/TripPlanningHero';
import DestinationSelector from './components/DestinationSelector';
import TripDetails from './components/TripDetails';
import InterestsSelector from './components/InterestsSelector';
import BudgetCalculator from './components/BudgetCalculator';
import { FaClipboardList } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function TripPlanningPage() {
    const { t } = useTranslation('tripPlanning');
    return (
        <div className="min-h-screen bg-[#0c0a09]">
            <Navbar />
            <main>
                <TripPlanningHero />

                <div className="py-16 bg-[#0c0a09]">
                    <div className="layout-container mx-auto max-w-[1400px] px-4 md:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Left Column - Form Steps */}
                            <div className="lg:col-span-2 space-y-6">
                                <DestinationSelector />
                                <TripDetails />
                                <InterestsSelector />
                                <BudgetCalculator />
                            </div>

                            {/* Right Column - Summary Card */}
                            <div className="lg:col-span-1">
                                <div className="bg-[#1e293b] rounded-2xl p-6 border border-white/10 sticky top-24">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-white text-lg font-bold">{t('summary.title')}</h3>
                                        <span className="bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                                            <FaClipboardList />
                                            <span>{t('summary.badge')}</span>
                                        </span>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex justify-between items-center py-3 border-b border-white/5">
                                            <span className="text-gray-400 text-sm">{t('summary.selectedDestination')}</span>
                                            <span className="text-white font-bold text-sm">{t('summary.placeholders.destination')}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-white/5">
                                            <span className="text-gray-400 text-sm">{t('summary.duration')}</span>
                                            <span className="text-white font-bold text-sm">{t('summary.placeholders.duration')}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-white/5">
                                            <span className="text-gray-400 text-sm">{t('summary.travelers')}</span>
                                            <span className="text-white font-bold text-sm">{t('summary.placeholders.travelers')}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-white/5">
                                            <span className="text-gray-400 text-sm">{t('summary.tripType')}</span>
                                            <span className="text-white font-bold text-sm">{t('summary.placeholders.tripType')}</span>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-[#b45309] to-amber-900 rounded-xl p-4 mb-6">
                                        <p className="text-orange-100 text-xs mb-2">{t('summary.totalCost')}</p>
                                        <p className="text-white text-3xl font-black">
                                            7,000 <span className="text-lg">ر.س</span>
                                        </p>
                                    </div>

                                    <button className="w-full h-12 rounded-lg bg-[#D4AF37] hover:bg-[#b8941f] text-black font-bold text-sm transition shadow-lg shadow-[#D4AF37]/25 flex items-center justify-center gap-2 group">
                                        <span>{t('summary.createPlan')}</span>
                                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>

                                    <p className="text-gray-500 text-xs text-center mt-4">
                                        {t('summary.note')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
