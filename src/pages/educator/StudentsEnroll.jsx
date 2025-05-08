import React from 'react';

const StudentsEnroll = () => {
  const dummyEnrollments = [
    { student: "Alice", course: "Introduction to JavaScript" },
    { student: "Bob", course: "Introduction to cybersecurity" },
    // { student: "James", course: "Web Development Bootcamp" },
    // { student: "Peter", course: "Advanced Python Programming" },
  ];

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Student Enrollments</h2>
      <ul className="space-y-2">
        {dummyEnrollments.map((entry, index) => (
          <li key={index} className="border p-3 rounded bg-gray-100">
            <strong>{entry.student}</strong> enrolled in <em>{entry.course}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsEnroll;

