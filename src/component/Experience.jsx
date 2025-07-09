import React from "react";
import experienceData from "./experienceData";

const SkillCategory = ({ title, skills }) => (
  <div className="bg-card p-8 rounded-lg">
    <h3 className="text-2xl font-bold font-heading text-primary-accent mb-6">{title}</h3>
    <ul className="space-y-4">
      {skills.map(skill => (
        <li key={skill.id} className="text-lg text-text-light border-b border-muted-text/30 pb-2">
          {skill.item}
        </li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  // ... (sisa kode sama)
  const frontendSkills = experienceData.filter(skill => ["React Js", "Javascript", "Tailwind", "Bootstrap"].includes(skill.item));
  const backendSkills = experienceData.filter(skill => ["Laravel", "Node Js", "Express Js"].includes(skill.item));
  const cmsSkills = experienceData.filter(skill => ["Wordpress"].includes(skill.item));

  return (
    <div className="bg-background py-20 md:py-32 font-body" id="experience">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-accent mb-4">
          Keahlian & Teknologi
        </h2>
        <p className="text-lg text-muted-text mb-12 max-w-2xl mx-auto">
          Teknologi yang saya gunakan untuk mengubah ide menjadi produk digital yang nyata.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <SkillCategory title="Frontend" skills={frontendSkills} />
          <SkillCategory title="Backend" skills={backendSkills} />
          <SkillCategory title="CMS" skills={cmsSkills} />
        </div>
      </div>
    </div>
  );
};

export default Experience;