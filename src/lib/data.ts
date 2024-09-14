import bloodSVG from "@/assets/blood.png";
import chatSVG from "@/assets/chat.png";
import appointmentSVG from "@/assets/appointment.png";
import medicineSVG from "@/assets/medicine.png";

export const navItems = [
    { label: "Home", link: "/", value: 0 },
    { label: "About", link: "/about", value: 1 },
    { label: "Contact Us", link: "/contact", value: 2 },
    { label: "Application", link: "/application", value: 3 },
]

export const heroServices = [
    {
        img: bloodSVG,
        title: "Blood Pressure Check",
        description:
            "Monitor your blood pressure easily with our quick and accurate blood pressure check service. Stay informed about your health.",
    },
    {
        img: chatSVG,
        title: "Online Consultation",
        description:
            "Get personalized medical advice from certified doctors online. Schedule a video consultation and get health insights from home.",
    },
    {
        img: medicineSVG,
        title: "Buy Medicine",
        description:
            "Conveniently order your medications online and have them delivered to your doorstep. Easy and reliable service for all your needs.",
    },
    {
        img: appointmentSVG,
        title: "Appointment Booking",
        description:
            "Schedule appointments with top healthcare providers at your convenience. Never miss a checkup with our easy booking process.",
    },
];