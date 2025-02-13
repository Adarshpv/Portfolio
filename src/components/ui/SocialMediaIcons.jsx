import FramerMagnetic from "../ui/FramerMagnetic";
import { motion } from "framer-motion";
import {
	FaLinkedin,
	FaGithub,
	FaEnvelope,
	FaCalendarAlt,
} from "react-icons/fa"; // Icons
import { Link } from "react-router-dom";

export const SocialMediaIcons = () => {
	const staggerVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.2,
			},
		}),
	};

	return (
		<div className="flex gap-8 max-w-4xl mx-auto pb-2">
			{socialMediaLinks.map((link, index) => (
				<motion.div
					key={index}
					custom={index}
					variants={staggerVariants}
					initial="hidden"
					animate="visible"
				>
					<FramerMagnetic>
						<Link
							to={link.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							{link.iconComponent}
						</Link>
					</FramerMagnetic>
				</motion.div>
			))}
		</div>
	);
};

const socialMediaLinks = [
	{
		url: "https://www.linkedin.com/in/adarsh-pathange/",
		iconComponent: (
			<FaLinkedin
				className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
				size={25}
			/>
		),
	},
	{
		url: "https://github.com/Adarshpv",
		iconComponent: (
			<FaGithub
				className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
				size={25}
			/>
		),
	},
	{
		url: "mailto:adarsh.patz@gmail.com",
		iconComponent: (
			<FaEnvelope
				className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
				size={25}
			/>
		),
	},
	{
		url: "https://calendly.com/adarshpathange",
		iconComponent: (
			<FaCalendarAlt
				className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
				size={25}
			/>
		),
	},
];
