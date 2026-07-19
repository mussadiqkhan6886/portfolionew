import { projects } from "@/constants";
import Image from "next/image";
import TransitionLink from "./TransitionLink";
import { twMerge } from "tailwind-merge";

const ProjectShowCaseMobile = ({
  smaller,
  work,
  className,
}: {
  smaller?: boolean;
  work?: boolean;
  className?: string;
}) => {
  const displayedProjects = work ? projects : projects.slice(0, 4);

  return (
    <section
      className={twMerge(
        `px-5 grid ${
          smaller ? "grid-cols-1" : "grid-cols-2"
        } place-items-center gap-17 items-center justify-center`,
        className
      )}
    >
      {displayedProjects.map((item) => (
        <TransitionLink
          href={`/work/${item.link}`}
          key={item.link}
          className="h-[80vh] w-full block"
        >
          <div className="relative h-[78%] w-full">
            <Image
              src={item.thumbnail}
              alt={item.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="border-b border-gray py-5 text-4xl">
              {item.title}
            </h2>

            <div className="flex items-center justify-between py-3 text-sm">
              <p className="capitalize">{item.role}</p>
              <p className="capitalize">{item.location}</p>
            </div>
          </div>
        </TransitionLink>
      ))}

      {!work && (
        <TransitionLink
          href="/work"
          className="mt-2 block w-full max-w-40 rounded-full border border-border py-4 text-center"
        >
          More work
        </TransitionLink>
      )}
    </section>
  );
};

export default ProjectShowCaseMobile;