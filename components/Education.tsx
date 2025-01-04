import React from "react";
import Tag from "./Tag";
import content from "@/data/content.json";
import { LinkPreview } from "@/components/ui/link-preview";

const Education: React.FC = () => {
  const { education } = content;

  return (
    <div className={`flex justify-between flex-col gap-8`}>
      <div className={`text-[28px] font-switzer font-semibold`}>Education</div>

      <div className={`flex justify-between flex-col gap-5`}>
        {education.map((edu, index) => (
          <div key={index} className={`flex items-center`}>
            <div className={`text-xl font-switzer text-gray w-[184px] `}>
              {edu.date}
            </div>
            <div
              className={`flex gap-3 items-center text-xl font-switzer text-silver`}
            >
              {edu.degree} at
              <LinkPreview url={edu.url}>
                <Tag type="institutions" tagKey={edu.institution} />
              </LinkPreview>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
