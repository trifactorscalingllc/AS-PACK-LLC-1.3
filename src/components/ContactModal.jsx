import { useState, useEffect } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            // Reset form on close after a delay
            setTimeout(() => {
                setStatus('idle');
                setFormData({ name: '', email: '', company: '', message: '' });
            }, 300);
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div
                className="absolute inset-0 bg-text/20 backdrop-blur-md transition-opacity duration-500"
                onClick={onClose}
            />

            <div className="relative w-full max-w-lg bg-bg border border-primary/50 shadow-2xl rounded-3xl overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="flex items-center justify-between p-6 md:p-8 border-b border-primary/20 bg-[#FAFAFA]">
                    <h2 className="font-serif text-2xl md:text-3xl text-text">Contact</h2>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors text-text/70 hover:text-text cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8">
                    {status === 'success' ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center text-text animate-fade-in">
                            <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mb-6 text-[#2E7D32]">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <h3 className="font-sans font-bold text-2xl mb-2">Message Received</h3>
                            <p className="font-sans text-text/70 mb-8 max-w-xs">
                                Thank you for reaching out. Alden will be in touch with you shortly.
                            </p>
                            <button
                                onClick={onClose}
                                className="px-8 py-3 bg-text text-bg font-mono text-xs uppercase tracking-widest rounded-full hover:bg-accent transition-colors"
                            >
                                Close Window
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5 animate-fade-in">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-mono text-xs tracking-widest uppercase text-text/70 pl-1">Name</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="bg-[#FAFAFA] border border-primary/50 rounded-xl px-4 py-3 font-sans text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-mono text-xs tracking-widest uppercase text-text/70 pl-1">Email</label>
                                    <input
                                        required
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="bg-[#FAFAFA] border border-primary/50 rounded-xl px-4 py-3 font-sans text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="font-mono text-xs tracking-widest uppercase text-text/70 pl-1">Company</label>
                                <input
                                    type="text"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    className="bg-[#FAFAFA] border border-primary/50 rounded-xl px-4 py-3 font-sans text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="font-mono text-xs tracking-widest uppercase text-text/70 pl-1">Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="bg-[#FAFAFA] border border-primary/50 rounded-xl px-4 py-3 font-sans text-text resize-none focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                />
                            </div>

                            {status === 'error' && (
                                <p className="text-red-500 font-mono text-xs text-center border border-red-200 bg-red-50 p-2 rounded-lg">
                                    Error transmitting data. Please try again.
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="mt-4 relative group overflow-hidden rounded-xl bg-text text-bg px-6 py-4 font-mono text-sm uppercase tracking-widest transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center"
                            >
                                <span className="relative z-10 transition-colors flex items-center gap-2">
                                    {status === 'submitting' ? (
                                        <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                                    ) : (
                                        'Send Message'
                                    )}
                                </span>
                                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
