import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setErrors({
            ...errors,
            [e.target.name]: "",
        });
    };

    const validateForm = () => {
        let newErrors = {};

        // Name Validation
        if (!formData.name.trim()) {
            newErrors.name = "Full name is required";
        } else if (formData.name.length < 3) {
            newErrors.name = "Name must be at least 3 characters";
        }

        // Email Validation
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            newErrors.email = "Invalid email address";
        }

        // Subject Validation
        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        } else if (formData.subject.length < 5) {
            newErrors.subject = "Subject must be at least 5 characters";
        }

        // Message Validation
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);

        try {

            const response = await fetch("https://portfolio-backend-b49u.onrender.com/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {

                toast.success("Message sent successfully ✨");

                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });

                setErrors({});

            } else {

                toast.error(data.message);
            }

        } catch (error) {

            console.log(error);

            toast.error("Failed to send message");
        }

        finally {

            setLoading(false);
        }
    };
    return (
        <>
            {
                loading && (

                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

                        <div className="relative flex flex-col items-center">

                            {/* Outer Glow */}
                            <div className="absolute h-24 w-24 rounded-full bg-cyan-500/20 blur-2xl"></div>

                            {/* Spinner */}
                            <div className="h-20 w-20 rounded-full border-4 border-white/10 border-t-cyan-400 animate-spin"></div>

                            {/* Text */}
                            <p className="mt-6 text-white/80 tracking-widest text-sm uppercase">
                                Sending Message...
                            </p>

                        </div>

                    </div>
                )
            }
            <Toaster
                position="bottom-right"
                toastOptions={{
                    duration: 3000,

                    style: {
                        background: "#0f172a",
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,0.1)",
                        padding: "16px",
                        borderRadius: "18px",
                        backdropFilter: "blur(12px)",
                    },

                    success: {
                        iconTheme: {
                            primary: "#06b6d4",
                            secondary: "#fff",
                        },
                    },

                    error: {
                        iconTheme: {
                            primary: "#ef4444",
                            secondary: "#fff",
                        },
                    },
                }}
            />
            <section
                id="contact"
                className="relative scroll-mt-0 bg-gradient-to-br from-slate-950 via-[#0b1120] to-slate-900 text-white py-16 md:py-24 overflow-hidden"
            >
                {/* Background Effects */}
                {/* Background Effects */}
                <div className="absolute top-10 left-10 w-52 h-52 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>


                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <p className="text-cyan-400 uppercase tracking-[6px] text-sm font-semibold">
                            Contact Me
                        </p>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-3">
                            Let's Build <span className="text-cyan-400">Together</span>
                        </h1>

                        <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm sm:text-base">
                            Have an idea or project? Send me a message and let’s discuss.
                        </p>
                    </div>

                    {/* New Unique Layout */}
                    <div className="grid lg:grid-cols-3 gap-8 items-start">

                        {/* Left Side Vertical Cards */}
                        <div className="space-y-6">

                            {/* Profile Card */}
                            <div className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl text-center">

                                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-[3px]">
                                    <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-3xl font-bold">
                                        DJ
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold mt-5">
                                    Devansh Jethwa
                                </h2>

                                <p className="text-gray-400 text-sm mt-2">
                                    Full Stack Web Developer
                                </p>

                                <div className="mt-6 flex justify-center gap-3 flex-wrap">
                                    {[
                                        {
                                            icon: "github",
                                            link: "https://github.com/devanshjethwa",
                                        },
                                        {
                                            icon: "linkedin",
                                            link: "https://www.linkedin.com/in/devansh-jethwa-9132783b2/",
                                        },
                                        {
                                            icon: "instagram",
                                            link: "https://www.instagram.com/devansh__312/",
                                        },
                                    ].map((item, i) => (
                                        <a
                                            key={i}
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300"
                                        >
                                            <i className={`bi bi-${item.icon}`}></i>
                                        </a>
                                    ))}
                                </div>

                            </div>

                            {/* Info Card */}
                            <div className="rounded-[35px] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl p-8 shadow-xl">

                                <h3 className="text-xl font-bold">
                                    Open for Opportunities 🚀
                                </h3>

                                <p className="text-gray-300 mt-4 leading-8 text-sm">
                                    Freelance projects, Full time job opportunities.
                                </p>

                                <div className="mt-6 space-y-4">

                                    <div className="flex items-center gap-3">
                                        <i className="bi bi-envelope-fill text-cyan-400"></i>
                                        <span className="text-sm">devanshjethwa13@gmail.com</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <i className="bi bi-geo-alt-fill text-cyan-400"></i>
                                        <span className="text-sm">Gujarat, India</span>
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Right Form */}
                        <div className="lg:col-span-2 rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-10 shadow-2xl">

                            <h2 className="text-2xl md:text-4xl font-bold">
                                Send a Message
                            </h2>


                            <form onSubmit={handleSubmit} className="mt-8 space-y-6">

                                <div className="grid sm:grid-cols-2 gap-5">

                                    {/* Name */}
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Full Name"
                                            className={`w-full rounded-2xl bg-slate-900 border px-5 py-4 outline-none transition-all duration-300
                ${errors.name
                                                    ? "border-red-400 ring-2 ring-red-500/20"
                                                    : "border-white/10 focus:border-cyan-400"
                                                }`}
                                        />

                                        {errors.name && (
                                            <div className="mt-1 ms-2 flex items-center gap-3">

                                                {/* <div className="h-[2px] w-8 bg-red-400 rounded-full"></div> */}

                                                <p className="text-red-400 text-sm italic tracking-wide">
                                                    {errors.name}
                                                </p>

                                            </div>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <input
                                            type="text"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address"
                                            className={`w-full rounded-2xl bg-slate-900 border px-5 py-4 outline-none transition-all duration-300
                ${errors.email
                                                    ? "border-red-400 ring-2 ring-red-500/20"
                                                    : "border-white/10 focus:border-cyan-400"
                                                }`}
                                        />

                                        {errors.email && (
                                            <div className="mt-1 ms-2 flex items-center gap-3">

                                                {/* <div className="h-[2px] w-8 bg-red-400 rounded-full"></div> */}

                                                <p className="text-red-400 text-sm italic tracking-wide">
                                                    {errors.email}
                                                </p>

                                            </div>
                                        )}
                                    </div>

                                </div>

                                {/* Subject */}
                                <div>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Subject"
                                        className={`w-full rounded-2xl bg-slate-900 border px-5 py-4 outline-none transition-all duration-300
            ${errors.subject
                                                ? "border-red-400 ring-2 ring-red-500/20"
                                                : "border-white/10 focus:border-cyan-400"
                                            }`}
                                    />

                                    {errors.subject && (
                                        <div className="mt-1 ms-2 flex items-center gap-3">

                                            {/* <div className="h-[2px] w-8 bg-red-400 rounded-full"></div> */}

                                            <p className="text-red-400 text-sm italic tracking-wide">
                                                {errors.subject}
                                            </p>

                                        </div>
                                    )}
                                </div>

                                {/* Message */}
                                <div>
                                    <textarea
                                        rows="7"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write your message..."
                                        className={`w-full rounded-2xl bg-slate-900 border px-5 py-4 outline-none resize-none transition-all duration-300
            ${errors.message
                                                ? "border-red-400 ring-2 ring-red-500/20"
                                                : "border-white/10 focus:border-cyan-400"
                                            }`}
                                    ></textarea>

                                    {errors.message && (
                                        <div className=" ms-2 flex items-center gap-3">

                                            {/* <div className="h-[2px] w-8 bg-red-400 rounded-full"></div> */}

                                            <p className="text-red-400 text-sm italic tracking-wide">
                                                {errors.message}
                                            </p>

                                        </div>
                                    )}
                                </div>

                                {/* Button */}
                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold hover:scale-[1.02] transition-all duration-300"
                                >
                                    Send Message ✨
                                </button>

                            </form>

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}

export default Contact;