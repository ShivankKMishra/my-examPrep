import React from 'react';

const Topic = ({ topic, subjectName, unitName, subjects, setSubjects }) => {
  const toggleCompletion = () => {
    const newSubjects = subjects.map((s) =>
      s.name === subjectName
        ? {
            ...s,
            units: s.units.map((u) =>
              u.name === unitName
                ? {
                    ...u,
                    topics: u.topics.map((t) =>
                      t.name === topic.name ? { ...t, completed: !t.completed } : t
                    ),
                  }
                : u
            ),
          }
        : s
    );
    setSubjects(newSubjects);
  };

  return (
    <div className="flex items-center justify-between mb-1">
      <span className={topic.completed ? 'line-through' : ''}>{topic.name}</span>
      <button
        onClick={toggleCompletion}
        className={`p-1 ml-2 rounded ${
          topic.completed ? 'bg-green-500 text-white' : 'bg-gray-300'
        }`}
      >
        {topic.completed ? '✓' : '○'}
      </button>
    </div>
  );
};

export default Topic;
