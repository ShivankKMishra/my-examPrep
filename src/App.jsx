import React, { useState, useEffect } from 'react';
import Subject from './components/Subject';
import data from './data.json';

const App = () => {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');

  useEffect(() => {
    const savedSubjects = JSON.parse(localStorage.getItem('mySubjects'));
    if (savedSubjects && savedSubjects.length > 0) {
      console.log('Loaded from localStorage:', savedSubjects);
      setSubjects(savedSubjects);
    } else {
      console.log('Loaded from JSON file:', data);
      setSubjects(data);
    }
  }, []);

  console.log('Subjects:', subjects);

  useEffect(() => {
    if (subjects.length > 0) {
      console.log('Subjects state updated:', subjects);
      localStorage.setItem('mySubjects', JSON.stringify(subjects));
    }
  }, [subjects]);

 const handleSubjectChange = (event) => {
  const selected = event.target.value;
  console.log('Selected subject:', selected);
  setSelectedSubject(selected);
  
  // Check if the selected subject is already present in subjects
  const subjectExists = subjects.some(subject => subject.name === selected);
  
  // If the selected subject is not found in subjects, load it from JSON
  if (!subjectExists) {
    const subjectFromJSON = data.find(subject => subject.name === selected);
    if (subjectFromJSON) {
      setSubjects(prevSubjects => [...prevSubjects, subjectFromJSON]);
    }
  }
};


  console.log('Selected subject:', selectedSubject);

 const clearLocalStorage = () => {
  const updatedSubjects = subjects.filter(subject => subject.name !== selectedSubject);
  localStorage.setItem('mySubjects', JSON.stringify(updatedSubjects));
  setSubjects(updatedSubjects);
};

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Subject To-Do List</h1>
      <div className="mb-4">
        <label htmlFor="subject" className="mr-2">Select Subject:</label>
        <select id="subject" value={selectedSubject} onChange={handleSubjectChange}>
          <option value="">Select</option>
          {subjects.map((subject, index) => (
            <option key={index} value={subject.name}>{subject.name}</option>
          ))}
        </select>
      </div>
     <button onClick={clearLocalStorage} className="bg-red-500 text-white py-1 px-2 rounded-tr-lg absolute top-0 right-0 m-2">
  Clear
</button>

      {selectedSubject && (
        <Subject
          subject={subjects.find((subject) => subject.name === selectedSubject)}
          subjects={subjects}
          setSubjects={setSubjects}
        />
      )}
    </div>
  );
};

export default App;
