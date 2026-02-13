import { useState, type FormEvent } from "react";
import { Input } from "../atoms/Input";
import { Textarea } from "../atoms/TextArea";
import { Button } from "../atoms/Button";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        if (errors[e.target.name]) {
            setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
        }
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        setIsSubmitting(true);

        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);

        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Input
                id="name"
                name="name"
                label="Name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
            />

            <Input
                id="email"
                name="email"
                label="Email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
            />

            <Input
                id="subject"
                name="subject"
                label="Subject"
                type="text"
                placeholder="Project inquiry"
                value={formData.subject}
                onChange={handleChange}
            />

            <Textarea
                id="message"
                name="message"
                label="Message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                required
            />

            <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-full"
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            {isSuccess && (
                <div className="
        relative overflow-hidden rounded-xl bg-gray-950 p-4 md:p-6 
        border-l-4 border-[#22C55E] animate-in fade-in slide-in-from-bottom-2
    ">
                    <div className="flex items-start gap-4">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22C55E]/20 text-[#22C55E]">
                            <span className="text-xs font-bold">✓</span>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[11px] font-mono text-[#22C55E] uppercase tracking-widest">
                                Transmission_Complete
                            </p>
                            <p className="text-sm font-medium text-gray-300">
                                Your message has been logged. Expect a response shortly.
                            </p>
                        </div>
                    </div>
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-size-[100%_4px,3px_100%]" />
                </div>
            )}
        </form>
    );
}