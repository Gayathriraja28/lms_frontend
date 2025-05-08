// // src/components/Educator/Educator.jsx
// import React from 'react';
// import { Link, Routes, Route } from 'react-router-dom';
// import Dashboard from './Dashboard';
// import AddCourse from './AddCourse';
// import MyCourses from './MyCourses';
// import StudentsEnroll from './StudentsEnroll';

// const Educator = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">Educator Dashboard</h1>

//       <nav className="mb-6 space-x-4">
//         <Link to="home" className="text-blue-600">Home</Link>
//         <Link to="add-course" className="text-blue-600">Add Course</Link>
//         <Link to="my-courses" className="text-blue-600">My Courses</Link>
//         <Link to="students" className="text-blue-600">Students Enrolled</Link>
//       </nav>

//       <Routes>
//         <Route path="home" element={<Dashboard />} />
//         <Route path="add-course" element={<AddCourse />} />
//         <Route path="my-courses" element={<MyCourses />} />
//         <Route path="students" element={<StudentsEnroll />} />
//       </Routes>
//     </div>
//   );
// };

// export default Educator;
// src/components/Educator/Educator.jsx
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import AddCourse from './AddCourse';
import MyCourses from './MyCourses';
import StudentsEnroll from './StudentsEnroll';

const Educator = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Educator Dashboard</h1>

      <nav className="mb-6 space-x-4">
        <Link to="home" className="text-blue-600">Home</Link>
        <Link to="add-course" className="text-blue-600">Add Course</Link>
        <Link to="my-courses" className="text-blue-600">My Courses</Link>
        <Link to="students" className="text-blue-600">Students Enrolled</Link>
      </nav>

      <Routes>
        <Route path="home" element={<Dashboard />} />
        <Route path="add-course" element={<AddCourse />} />
        <Route path="my-courses" element={<MyCourses />} />
        <Route path="students" element={<StudentsEnroll />} />
      </Routes>
    </div>
  );
};

export default Educator;
