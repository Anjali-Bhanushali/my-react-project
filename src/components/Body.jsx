import React from "react";



const Body = () => {

    const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Next.js", level: 70 },
  { name: "Node.js", level: 60 },
];


  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-emerald-600 mb-8 text-center">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-300 rounded-full h-4">
                <div
                  className="bg-emerald-600 h-4 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">{skill.level}% proficiency</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Body;
