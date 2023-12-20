import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  githubLink: string;
  demoWebLink: string;
}

const ProjectCard = ({
  src,
  title,
  description,
  githubLink,
  demoWebLink,
}: Props) => {
  return (
    <div className="w-[400px] relative rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 line-clamp-3">{description}</p>
        <p className="mt-2 text-gray-300 text-sm">
          View source code:{" "}
          <span className="text-blue-400 hover:underline hover:cursor-pointer line-clamp-1">
            {githubLink}
          </span>
        </p>
        <p className="mt-2 text-gray-300 text-sm">
          Demo Website:{" "}
          <span className="text-blue-400 hover:underline hover:cursor-pointer line-clamp-1">
            {demoWebLink}{" "}
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
