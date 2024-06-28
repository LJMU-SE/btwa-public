import { Container } from "@/components/Containers";
import TeamMemberCard from "@/components/TeamMemberCard";
import TeamMembers from "@/lib/team";

export default function AboutUs() {
    return (
        <section id="meet-the-team" className="lg:min-h-dvh pt-5">
            <Container>
                <h1 className="text-4xl text-center font-semibold">Meet the Team</h1>
                <p className="text-center mt-5">Meet the members of our team here at Liverpool John Moores University!</p>
                <div className="w-full my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {TeamMembers.map((member, index) => (
                        <TeamMemberCard key={index} member={member} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
