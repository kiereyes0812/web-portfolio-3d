import React from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";
import { flatSkills } from "../constants/index.js";

const categoryColors = {
  Frontend: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Backend: "bg-green-500/10 text-green-400 border-green-500/20",
  Database: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  DevOps: "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

const AnimatedCounter = () => {
  const categories = [...new Set(flatSkills.map((s) => s.category))];

  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      {/* Stats row */}
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div
            key={item.label} // ← key moved here
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              {/* ↑ fixed: text-5xl not text-5x; */}
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Skills row */}
      <div className="mx-auto grid-4-cols mt-10">
        {categories.map((cat) => (
          <div
            key={cat} // ← key moved here
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-start gap-4"
            // ↑ justify-start so all category labels pin to top, tags don't drift
          >
            <p className="text-white font-bold text-lg">{cat}</p>
            {/* ↑ removed the nested counter-number div, just a plain label */}
            <div className="flex flex-wrap gap-2">
              {flatSkills
                .filter((s) => s.category === cat)
                .map((skill) => (
                  <span
                    key={skill.name}
                    className={`text-xs font-medium px-3 py-1 rounded-full border ${categoryColors[cat]}`}
                  >
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
