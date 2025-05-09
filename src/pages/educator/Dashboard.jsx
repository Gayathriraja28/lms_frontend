// import React from 'react';

// const Dashboard = () => {
//   return (
//     <div>
//       <h2 className="text-xl font-semibold">Welcome, Educator!</h2>
//       <p>Use the navigation above to manage your courses and students.</p>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [educator, setEducator] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userType = localStorage.getItem('userType');

    if (userType !== 'educator') {
      navigate('/');
    } else {
      // Simulate fetching educator data (can be replaced with API call)
      const educatorData = {
        name: localStorage.getItem('userName') || 'Dr. Emily Parker',
        email: 'emily.parker@example.com',
        department: 'Computer Science',
        joined: 'August 2022',
      };
      setEducator(educatorData);
    }
  }, [navigate]);

  if (!educator) return null;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-4">Welcome, {educator.name}!</h2>

      <div className="text-gray-700 space-y-2">
        <p><strong>Email:</strong> {educator.email}</p>
        <p><strong>Department:</strong> {educator.department}</p>
        <p><strong>Joined:</strong> {educator.joined}</p>
      </div>
    </div>
  );
};

export default Dashboard;
