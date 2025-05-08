import React from 'react';

const MyCourses = () => {
  const dummyCourses = [
    { id: 1, title: "Introduction to JavaScript", enrolled: 12 },
    { id: 2, title: "Web Development Bootcamp", enrolled: 8 },
  ];

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">My Courses</h2>
      <ul className="space-y-2">
        {dummyCourses.map((course) => (
          <li key={course.id} className="border p-3 rounded bg-gray-100">
            <strong>{course.title}</strong> - {course.enrolled} students enrolled
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyCourses;
