import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const dayOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function Card({
  title,
  venue,
  date,
  timeSlot,
  venueDescription,
  eventDescription,
  demo,
  large,
  inputForm,
}: {
  title?: string;
  venue?: string;
  date?: Date;
  timeSlot?: string;
  venueDescription?: string;
  eventDescription?: string;
  demo?: ReactNode;
  large?: boolean;
  inputForm?: ReactNode;
}) {
  return (
    <div
      className={`relative col-span-1 rounded-xl border border-gray-200 bg-black px-3 shadow-md ${
        large ? "md:col-span-2" : ""
      }`}
    >
        <div className="flex flex-wrap text-left items-center justify-center">
          {inputForm}
          </div>

      <div className="mb-20 mt-20">
        <div className="relative mx-auto flex h-60 items-center justify-center">
          {demo}
        </div>

      </div>
      <div
        className={`relative mx-auto mt-5 max-w-2xl ${
          date ? "text-left" : "text-center"
        }`}
      >
        <h2 className="mx-1 bg-gradient-to-br from-gray-100 to-orange-300 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
          <Balancer>{title}</Balancer>
        </h2>

        <div className="mx-1 -mt-1.5 leading-normal text-white">
          <Balancer>
            {date && (
              <>
                <div className="mt-2 text-xl md:text-2xl">{venue} </div>
                <div className="mt-1 mb-1 text-gray-400">
                  <em>
                    <div style={{ display: "inline", marginRight: "21%" }}>
                      {dayOfWeek[date?.getDay()]}, {months[date?.getMonth()]}{" "}
                      {date?.getDate()}, {date?.getFullYear()}
                    </div>
                    {timeSlot}
                  </em>
                </div>
              </>
            )}

            <div className="mt-2 text-sm">{eventDescription}</div>
            <br />
          </Balancer>
          <em className="text-xs">
            <div>{venueDescription}</div>
          </em>
        </div>
      </div>
    </div>
  );
}
