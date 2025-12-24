export default function MapSection() {
    return (
        <div className="py-16 bg-[#1c1917]">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                <div className="bg-[#1e293b] rounded-2xl overflow-hidden border border-white/10">
                    {/* Map Placeholder */}
                    <div className="w-full h-[400px] bg-[#0f172a] relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.2!2d46.7!3d24.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzAwLjAiTiA0NsKwNDInMDAuMCJF!5e0!3m2!1sen!2ssa!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    );
}
