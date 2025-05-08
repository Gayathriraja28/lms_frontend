import React from 'react'

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Educator Menu</h2>
      <ul>
        <li className="mb-4">
          <Link to="/educator/dashboard" className="hover:text-blue-300">Dashboard</Link>
        </li>
        <li className="mb-4">
          <Link to="/educator/mycourses" className="hover:text-blue-300">My Courses</Link>
        </li>
        <li className="mb-4">
          <Link to="/educator/add-course" className="hover:text-blue-300">Add Course</Link>
        </li>
        <li className="mb-4">
          <Link to="/educator/studentsenrollments" className="hover:text-blue-300">Student Enrollments</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
