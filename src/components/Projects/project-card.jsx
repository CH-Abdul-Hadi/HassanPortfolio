import * as React from "react";

function ProjectCard({ project }) {
  return (
    <div className="relative rounded-lg border border-[#00FFEE] bg-[#0F0F0F] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full flex-shrink-0 bg-gradient-to-r from-transparent via-[#FF4081] to-[#00FFEE]"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-[#00FFEE] to-transparent"></div>
      </div>
      {/*  */}
      <div className="px-4 lg:px-8 mb-4 pt-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-[#FF4081]"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-[#FF6EC7]"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-[#00FFEE]"></div>
        </div>
        {/*  */}
        <p className="text-center ml-3 text-[#FFFFFF] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-[#00FFEE] px-4 lg:px-8 py-4 lg:py-8 bg-[#0B0B0B]">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-[#FF4081]">const </span>
            <span className="mr-2 text-[#FFFFFF]">project</span>
            <span className="mr-2 text-[#FF4081]">=</span>
            <span className="text-[#FFFFFF]">{"{"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-[#FFFFFF]">name:</span>
            <span className="text-[#FFFFFF]">{`'`}</span>
            <span className="text-[#FF6EC7]">{project.name}</span>
            <span className="text-[#FFFFFF]">{`',`}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-[#FFFFFF]">tools:</span>
            <span className="text-[#FFFFFF]">{` ['`}</span>
            {project.tools.map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-[#FF6EC7]">{tag}</span>
                {project.tools.length - 1 !== i && (
                  <span className="text-[#FFFFFF]">{`', '`}</span>
                )}
              </React.Fragment>
            ))}
            <span className="text-[#FFFFFF]">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-[#FFFFFF]">myRole:</span>
            <span className="text-[#FF6EC7]">{project.role}</span>
            <span className="text-[#FFFFFF]">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-[#FFFFFF]">Description:</span>
            <span className="text-[#00FFEE]">{" " + project.description}</span>
            <span className="text-[#FFFFFF]">,</span>
          </div>
          <div>
            <span className="text-[#FFFFFF]">{`};`}</span>
          </div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
