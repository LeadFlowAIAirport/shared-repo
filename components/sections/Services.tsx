import {
  PhoneOutgoing,
  Headset,
  Zap,
  RefreshCw,
  CalendarClock,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import type { Service } from "@/lib/content";

// Fixed order matches the services copy.
const icons: LucideIcon[] = [
  PhoneOutgoing, // Missed-Call Recovery
  Headset, // AI Receptionist
  Zap, // Instant Lead Response
  RefreshCw, // Automated Follow-Up
  CalendarClock, // Appointment Setting
  MapPin, // Local Visibility
];

type Props = {
  heading: string;
  services: Service[];
  bg?: "paper" | "mist";
};

export default function Services({ heading, services, bg = "paper" }: Props) {
  return (
    <Section bg={bg}>
      <Reveal>
        <h2 className="text-center text-3xl font-bold sm:text-4xl">{heading}</h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = icons[i] ?? Zap;
          return (
            <Reveal key={service.title} delay={(i % 3) * 80}>
              <Card className="h-full">
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon aria-hidden className="size-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-slate">{service.body}</p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
