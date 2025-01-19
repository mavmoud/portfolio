import React from "react";
import content from "@/data/content.json";

const Experience: React.FC = () => {
  const { about } = content;

  return (
    <div className={`w-[46.5rem] flex justify-between flex-col gap-8`}>
      <div className={`text-[1.75rem] font-switzer font-semibold`}>About</div>
      <div className={`text-xl font-switzer text-silver`}>
        {about.description}
      </div>
    </div>
  );
};

export default Experience;
