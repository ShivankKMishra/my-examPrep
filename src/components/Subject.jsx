import React from 'react';
import Unit from './Unit';

const Subject = ({ subject, subjects, setSubjects }) => {
  console.log('Rendering Subject:', subject);
  return (
    <div className="mb-4 p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">{subject.name}</h2>
      {subject.units.map((unit, index) => (
        <Unit key={index} unit={unit} subjectName={subject.name} subjects={subjects} setSubjects={setSubjects} />
      ))}
    </div>
  );
};

export default Subject;
