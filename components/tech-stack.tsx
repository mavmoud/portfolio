import React from "react";
import Tag from "./tag";
import content from "@/data/content.json";

const TechStack: React.FC = () => {
  const { techStack } = content;
  const { languages, frameworks, databases, tools, other } = techStack;

  return (
    <div className={`w-[46.5rem] flex justify-between flex-col gap-8`}>
      <div className={`text-[28px] font-switzer font-semibold`}>Tech Stack</div>

      <div className={`flex justify-between flex-col gap-5`}>
        <div className={`flex items-center`}>
          <div className={`text-xl font-switzer text-gray w-[184px] `}>
            Languages
          </div>
          <div className={`flex gap-3`}>
            {languages.map((lang) => (
              <Tag key={lang} type="tech" category="languages" tagKey={lang} />
            ))}
          </div>
        </div>

        <div className={`flex items-center`}>
          <div className={`text-xl font-switzer text-gray w-[184px]`}>
            Frameworks
          </div>
          <div className={`flex gap-3`}>
            {frameworks.map((framework) => (
              <Tag
                key={framework}
                type="tech"
                category="frameworks"
                tagKey={framework}
              />
            ))}
          </div>
        </div>

        <div className={`flex items-center`}>
          <div className={`text-xl font-switzer text-gray w-[184px]`}>
            Databases
          </div>
          <div className={`flex gap-3`}>
            {databases.map((db) => (
              <Tag key={db} type="tech" category="databases" tagKey={db} />
            ))}
          </div>
        </div>

        <div className={`flex items-center`}>
          <div className={`text-xl font-switzer text-gray w-[184px]`}>
            Tools
          </div>
          <div className={`flex gap-3`}>
            {tools.map((tool) => (
              <Tag key={tool} type="tech" category="tools" tagKey={tool} />
            ))}
          </div>
        </div>

        <div className={`flex items-center`}>
          <div className={`text-xl font-switzer text-gray w-[184px]`}>
            Other
          </div>
          <div className={`flex gap-3`}>
            {other.map((item) => (
              <Tag key={item} type="tech" category="other" tagKey={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
