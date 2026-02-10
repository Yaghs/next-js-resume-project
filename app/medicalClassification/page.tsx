import Image from "next/image";
export default function MedicalClassification(){
    return(
        <main>
            <Image 
                src="/FDA_Logo.png"
                alt="FDA_Logo"
                width={300}
                height={300}
            />
            <section className="bg-white rounded-2xl text-center text-[1rem] p-[1rem]">
                <p>
                    This project was internally developed as part of my second internship at the United States Food and Drug Administration (FDA).<br /><br />
                    <strong>Timeline:</strong> January 2025 – May 2025<br /><br />
                    I worked on building the foundations necessary for FDA’s Medical Classification Model, which utilized embedded VBA automation tools within Excel to streamline data input, validation, and classification processes.<br /><br />
                    <span style={{ color: "#007acc", fontWeight: 500 }}>
                     The result: Significantly reduced manual workload and improved efficiency for the ECON Staff within the organization.
                </span>
                </p>
                <ul>
                    <li>Conducted regular SCRUM meetings and collaborated with team members to promote problem-solving and accelerate project milestones.</li>
                    <li>Partnered with the FDA’s Economics team to gather domain-specific requirements and deliver a fully functional prototype aligned with analytical and regulatory objectives.</li>
                    <li>Designed user-friendly interfaces and modular code structures to enhance usability and facilitate future updates across teams.</li>
                </ul>
            </section>
        </main>
    )
}