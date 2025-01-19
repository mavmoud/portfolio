import React from "react";
import Tag from "./Tag";
import content from "@/data/content.json";
import { LinkPreview } from "@/components/ui/LinkPreview";

const Experience: React.FC = () => {
  const { experience } = content;

  return (
    <div className={`w-[46.5rem] flex justify-between flex-col gap-8`}>
      <div className={`text-[1.75rem] font-switzer font-semibold`}>
        Experience
      </div>

      <div className={`flex justify-between flex-col gap-5`}>
        {experience.map((exp, index) => (
          <div key={index} className={`flex items-center`}>
            <div className={`text-xl font-switzer text-gray w-[184px] `}>
              {exp.date}
            </div>
            <div
              className={`flex gap-3 items-center text-xl font-switzer text-silver`}
            >
              {exp.position} at
              <LinkPreview url={exp.url}>
                <Tag type="companies" tagKey={exp.company} />
              </LinkPreview>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
