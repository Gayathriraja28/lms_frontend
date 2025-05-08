
// import React from 'react';

// const AddCourse = () => {
//   return (
//     <div>
//       <h2 className="text-xl font-semibold">Add a New Course</h2>
//       <p>Form for adding a course will go here.</p>
//     </div>
//   );
// };

// export default AddCourse;
import React, { useState } from 'react';

const AddCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !category) {
      setMessage('Please fill in all fields.');
      return;
    }

    // Simulate submission
    console.log('Course Added:', { title, description, category });
    setMessage('Course added successfully!');
    setTitle('');
    setDescription('');
    setCategory('');
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Add New Course</h2>

      {message && <div className="mb-4 text-green-600">{message}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Course Title</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter course title"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            className="w-full border px-3 py-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter course description"
          ></textarea>
        </div>

        <div>
          <label className="block font-medium mb-1">Price</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter course price"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
