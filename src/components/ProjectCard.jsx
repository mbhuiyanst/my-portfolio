import React from 'react';

export default function ProjectCard({ title, description }) {
  return (
    <div className="border border-gray-300 rounded-xl p-4 bg-white shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
