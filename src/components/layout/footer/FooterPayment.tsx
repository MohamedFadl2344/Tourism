import { FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';
import { SiVisa } from 'react-icons/si';

const paymentMethods = [
    { icon: FaCcVisa, label: 'Visa' },
    { icon: FaCcMastercard, label: 'Mastercard' },
    { icon: FaCcPaypal, label: 'PayPal' },
    { icon: SiVisa, label: 'Visa Secure' },
];

export default function FooterPayment() {
    return (
        <div>
            <h3 className="text-lg font-bold text-amber-400 mb-4">
                وسائل الدفع
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
                {paymentMethods.map((method) => (
                    <div
                        key={method.label}
                        className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-900 text-white text-2xl hover:scale-110 transition-transform duration-300"
                        title={method.label}
                    >
                        <method.icon />
                    </div>
                ))}
            </div>
            <p className="text-xs text-gray-400 mt-4">
                جميع المعاملات آمنة ومشفرة
            </p>
        </div>
    );
}
