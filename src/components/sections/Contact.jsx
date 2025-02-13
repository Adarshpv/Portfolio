import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaCalendarAlt } from "react-icons/fa";
import SectionHeader from "../ui/SectionHeader";

const Contact = () => {
	const [formData, setFormData] = useState({
		email: "",
		subject: "",
		message: "",
	});
	const [alert, setAlert] = useState("");

	// Handle form input changes
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		const { email, subject, message } = formData;

		if (!email || !subject || !message) {
			setAlert("Please fill in all fields.");
			setTimeout(() => setAlert(""), 3000);
			return;
		}

		// Web3Forms API URL
		const web3formsUrl = "https://api.web3forms.com/submit";
		const accessKey = "6d8fa958-fed3-4ab6-8f8a-f3802b72aeb8";

		const payload = {
			access_key: accessKey,
			email,
			subject,
			message,
		};

		try {
			const response = await fetch(web3formsUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			});

			if (response.ok) {
				setAlert("Message sent successfully!");
				setFormData({ email: "", subject: "", message: "" });
			} else {
				setAlert("Failed to send message. Please try again later.");
			}

			setTimeout(() => setAlert(""), 3000); // Clear the alert after 3 seconds
		} catch (error) {
			setAlert("An error occurred. Please try again.");
			setTimeout(() => setAlert(""), 3000); // Clear the alert after 3 seconds
		}
	};

	const contactData = [
		{
			title: "LinkedIn",
			icon: <FaLinkedin size={24} />,
			info: "@Adarsh-Pathange",
			path: "https://www.linkedin.com/in/adarsh-pathange/",
		},
		{
			title: "GitHub",
			icon: <FaGithub size={24} />,
			info: "@Adarshpv",
			path: "https://github.com/Adarshpv",
		},
		{
			title: "Email",
			icon: <MdEmail size={24} />,
			info: "adarsh.patz@gmail.com",
			path: "mailto:adarsh.patz@gmail.com",
		},
		{
			title: "Schedule a Meeting",
			icon: <FaCalendarAlt size={24} />,
			info: "adarshpathange",
			path: "https://calendly.com/adarshpathange",
		},
	];

	return (
		<section
			id="contact"
			className="relative mt-10 mx-auto max-w-3xl px-4 md:px-6 lg:px-8 pb-16"
		>
			{/* Background Accents */}
			<div className="absolute inset-0 pointer-events-none z-0">
				<div className="absolute w-80 h-80 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full blur-3xl opacity-10 top-20 left-0 dark:from-purple-400 dark:to-indigo-400"></div>
				<div className="absolute w-72 h-72 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full blur-3xl opacity-10 bottom-10 right-0 dark:from-blue-400 dark:to-indigo-400"></div>
			</div>

			<SectionHeader title={"Contact."} subtitle={"Connect with Me"} />

			<div className="relative mt-8 grid md:grid-cols-2 gap-8 z-10">
				{/* Contact Info */}
				<div>
					<p className="text-center md:text-left mb-8 text-base text-gray-600 dark:text-gray-300">
						I&apos;m always excited to collaborate on innovative
						projects, explore new opportunities, or discuss creative
						ideas. Feel free to reach out—I&apos;d love to hear from
						you!
					</p>

					<ul className="space-y-6">
						{contactData.map((item, idx) => (
							<li
								key={idx}
								className="flex items-center space-x-4 text-gray-800 dark:text-gray-200"
							>
								<a
									href={item.path}
									target="_blank"
									rel="noopener noreferrer"
									className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-600 flex items-center justify-center text-purple-500 dark:text-white"
								>
									{item.icon}
								</a>

								<div>
									<h4 className="text-lg font-medium">
										{item.title}
									</h4>
									<p className="text-sm">{item.info}</p>
								</div>
							</li>
						))}
					</ul>
				</div>

				{/* Contact Form */}
				<div className="space-y-6">
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-base font-medium text-gray-700 dark:text-gray-300"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="block w-full px-4 py-2 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-purple-500 focus:border-purple-500 text-gray-800 dark:text-gray-200"
							placeholder="Your email"
							value={formData.email}
							onChange={handleChange}
						/>
					</div>

					<div>
						<label
							htmlFor="subject"
							className="block mb-2 text-base font-medium text-gray-700 dark:text-gray-300"
						>
							Subject
						</label>
						<input
							type="text"
							id="subject"
							name="subject"
							className="block w-full px-4 py-2 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-purple-500 focus:border-purple-500 text-gray-800 dark:text-gray-200"
							placeholder="Subject"
							value={formData.subject}
							onChange={handleChange}
						/>
					</div>

					<div>
						<label
							htmlFor="message"
							className="block mb-2 text-base font-medium text-gray-700 dark:text-gray-300"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							rows="4"
							className="block w-full px-4 py-2 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-purple-500 focus:border-purple-500 text-gray-800 dark:text-gray-200"
							placeholder="Your message"
							value={formData.message}
							onChange={handleChange}
						></textarea>
					</div>

					<button
						type="submit"
						onClick={handleSubmit}
						className="w-full py-2 text-white bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-lg shadow-md hover:opacity-90 transition-transform transform hover:scale-105"
					>
						Send Message
					</button>

					{alert && (
						<div className="mt-4 text-center text-lg text-green-400">
							{alert}
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Contact;
