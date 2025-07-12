import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VisaApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios.get('http://al-kiswa-backend-production.up.railway.app/api/admin/visa-applications')
      .then((res) => setApplications(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container py-4">
      <h3 className="mb-4">Visa Applications</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Full Name</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Nationality</th>
              <th>Passport #</th>
              <th>Profession</th>
              <th>Address</th>
              <th>Passport Copy</th>
              <th>Photograph</th>
              <th>Payment Method</th>
              <th>Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td>{app.id}</td>
                <td>{app.email}</td>
                <td>{app.first_name} {app.middle_name} {app.last_name}</td>
                <td>{app.phone}</td>
                <td>{app.gender}</td>
                <td>{app.dob}</td>
                <td>{app.nationality}</td>
                <td>{app.passport_number}</td>
                <td>{app.profession}</td>
                <td>{app.address}</td>
                <td>
                  <a href={`http://al-kiswa-backend-production.up.railway.app/uploads/${app.passport_copy}`} target="_blank" rel="noreferrer">
                    View
                  </a>
                </td>
                <td>
                  <a href={`http://al-kiswa-backend-production.up.railway.app/${app.photograph}`} target="_blank" rel="noreferrer">
                    View
                  </a>
                </td>
                <td>{app.payment_method}</td>
                <td>{new Date(app.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VisaApplications;
