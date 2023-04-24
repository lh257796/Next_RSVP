import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import DetailsComponent from "@/components/home/detailsComponent";

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
        {/* <motion.a
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          href="https://twitter.com/steventey/status/1613928948915920896"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Twitter Here
          </p>
        </motion.a> */}
        {/* <motion.h1
          className="bg-gradient-to-r from-yellow-50 to-orange-500 bg-clip-text text-center font-display text-3xl font-bold tracking-[-0.01em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
<p>Reservation</p>
        </motion.h1> */}
        {/* <motion.p
          className="mt-6 text-center text-gray-500 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
        </motion.p>
        <motion.div
          className="mx-auto mt-6 flex items-center justify-center space-x-5"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
           <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href={DEPLOY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-4 w-4 group-hover:text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L20 20H4L12 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div> */}
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
    eventDescription:`Join us for a spooktacular night at our Halloween Dance Party! Unleash your inner ghoul on October 31st, from 8 PM to midnight, at the Bowery Ballroom.`,
    demo: <DetailsComponent />,
    venue: "Bowery Ballroom",
    date: new Date(2023, 9, 31),
    timeSlot: "6:00 PM - 11:00 PM",
  },
  {
    title: "Input field form",
    form: true,
    // large: true,
    demo: <WebVitals />,
    // venue: "hello",
  },
  // {
  //   title: "One-click Deploy",
  //   venueDescription:
  //     "Vercel",
  //   demo: (
  //     <a href={DEPLOY_URL}>
  //       {/* eslint-disable-next-line @next/next/no-img-element */}
  //       <img
  //         src="https://vercel.com/button"
  //         alt="Deploy with Vercel"
  //         width={120}
  //       />
  //     </a>
  //   ),
  // },

  // {
  //   title: "Built-in Auth + Database",
  //   venueDescription:
  //     "venueDescription here",
  //   demo: (
  //     <div className="flex items-center justify-center space-x-20">
  //       <Image alt="Auth.js logo" src="/authjs.webp" width={50} height={50} />
  //     </div>
  //   ),
  // },

  // {
  //   title: "Hooks, utilities, and more",
  //   venueDescription:
  //     "Precedent offers a collection of hooks, utilities, and `@vercel/og`",
  //   demo: (
  //     <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
  //       <span className="font-mono font-semibold">useIntersectionObserver</span>
  //       <span className="font-mono font-semibold">useLocalStorage</span>
  //       <span className="font-mono font-semibold">useScroll</span>
  //       <span className="font-mono font-semibold">nFormatter</span>
  //       <span className="font-mono font-semibold">capitalize</span>
  //       <span className="font-mono font-semibold">truncate</span>
  //     </div>
  //   ),
  // },
];
