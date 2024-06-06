import React from 'react';
import Topic from './Topic';

const Unit = ({ unit, subjectName, subjects, setSubjects }) => {
  console.log('Rendering Unit:', unit);
  return (
    <div className="mb-2 p-2 border rounded">
      <h3 className="text-lg font-bold mb-1">{unit.name}</h3>
      {unit.topics.map((topic, index) => (
        <Topic
          key={index}
          topic={topic}
          subjectName={subjectName}
          unitName={unit.name}
          subjects={subjects}
          setSubjects={setSubjects}
        />
      ))}
    </div>
  );
};

export default Unit;
