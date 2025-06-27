import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewTours = () => {
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    const res = await axios.get('http://localhost:5001/api/admin/tours/all');
    setTours(res.data);
  };

  const handleDelete = async (id) => {
  if (window.confirm('Are you sure to delete this tour?')) {
    try {
      await axios.delete(`http://localhost:5001/api/admin/tours/${id}`);
      alert('✅ Tour deleted successfully!');
      fetchTours(); // refresh list
    } catch (err) {
      console.error('❌ Delete error:', err);

      // 👇 Handle backend validation message (like foreign key constraint)
      if (err.response && err.response.data && err.response.data.error) {
        alert(err.response.data.error); // e.g., "Cannot delete: This tour is already booked by a user."
      } else {
        alert('❌ Failed to delete tour. Please try again later.');
      }
    }
  }
};


  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div className="container py-4">
      <h3>All Tours</h3>
      <div className="row">
        {tours.map((tour) => (
          <div className="col-md-4 mb-3" key={tour.id}>
            <div className="card">
              <img src={`http://localhost:5001/uploads/${tour.image}`} alt={tour.title} className="card-img-top" />
              <div className="card-body">
                <h5>{tour.title}</h5>
                <p>{tour.description}</p>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(tour.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewTours;
