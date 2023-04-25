import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
// import { Github, Twitter } from "@/components/shared/icons";
// import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
// import Image from "next/image";
import DetailsComponent from "@/components/home/detailsComponent";
import InputComponent from "@/components/home/inputComponent";

export default function Home() {
  return (
    <Layout>
      <motion.div
        className="max-w-xl px-5 xl:px-0"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
      </motion.div>
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(
          ({
            title,
            venueDescription,
            eventDescription,
            demo,
            date,
            timeSlot,
            large,
            venue,
            inputForm
          }) => (
            <Card
              key={title}
              title={title}
              venueDescription={venueDescription}
              demo={
                title === "Beautiful, reusable components" ? (
                  <ComponentGrid />
                ) : (
                  demo
                )
              }
              eventDescription={eventDescription}
              large={large}
              venue={venue}
              date={date}
              timeSlot={timeSlot}
              inputForm={inputForm}
            />
          ),
        )}
      </div>
    </Layout>
  );
}

const features = [
  // {
  //   title: "Beautiful, reusable components",
  //   venueDescription:
  //     "Uses [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), [Framer Motion](https://framer.com/motion)",
  //   // large: true,
  //   // demo:
  // if title name is Beautiful, Reusable Components display <ComponentGrid/>
  // },
  {
    title: "Halloween Dance Party!!!!!",
    venueDescription:
      "The Bowery Ballroom is a historic music venue located in the Lower East Side of Manhattan, New York City. This intimate, three-level space boasts a capacity of 575, offering patrons an up-close experience with their favorite artists.",
    large: true,
    eventDescription:`Join us for a spooktacular night at our Halloween Dance Party! Unleash your inner ghoul on October 31st at the Bowery Ballroom.`,
    demo: <DetailsComponent />,
    venue: "Bowery Ballroom",
    date: new Date(2023, 9, 31),
    timeSlot: "6:00 PM - 11:00 PM",
  },
  {
    // large: true,
    inputForm: <InputComponent />,
    // venue: "hello",
  },
]
