import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminUmrahList = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUmrahData();
  }, []);

  const fetchUmrahData = async () => {
    try {
      const res = await axios.get('http://al-kiswa-backend-production.up.railway.app/api/admin/umrah/all');
      setApplications(res.data);
    } catch (err) {
      console.error('Error fetching Umrah data:', err);
    } finally {
      setLoading(false);
    }
  };

  const renderImage = (filename, alt) => {
    if (!filename) return 'N/A';
    return (
      <a
        href={`http://al-kiswa-backend-production.up.railway.app/uploads/umrah/${filename}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`http://al-kiswa-backend-production.up.railway.app/uploads/umrah/${filename}`}
          alt={alt}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '6px',
            objectFit: 'cover',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        />
      </a>
    );
  };

  if (loading) return <p className="text-center my-5">Loading Umrah Applications...</p>;

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Umrah Applications</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '1000px' }}>
          <thead style={{ backgroundColor: '#004d66', color: '#fff' }}>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Phone</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Package</th>
              <th style={thStyle}>Adults</th>
              <th style={thStyle}>Children</th>
              <th style={thStyle}>Room</th>
              <th style={thStyle}>Passport Front</th>
              <th style={thStyle}>Passport Back</th>
              <th style={thStyle}>Emirates ID</th>
              <th style={thStyle}>Photo</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={app.id} style={index % 2 === 0 ? trEven : trOdd}>
                <td style={tdStyle}>{app.id}</td>
                <td style={tdStyle}>{app.email}</td>
                <td style={tdStyle}>{app.country_code}-{app.phone}</td>
                <td style={tdStyle}>{app.title} {app.first_name} {app.last_name}</td>
                <td style={tdStyle}>{app.package_type}</td>
                <td style={tdStyle}>{app.adults}</td>
                <td style={tdStyle}>{app.children}</td>
                <td style={tdStyle}>{app.room_type}</td>
                <td style={tdStyle}>{renderImage(app.passport_front, 'Passport Front')}</td>
                <td style={tdStyle}>{renderImage(app.passport_back, 'Passport Back')}</td>
                <td style={tdStyle}>{renderImage(app.emirates_id, 'Emirates ID')}</td>
                <td style={tdStyle}>{renderImage(app.photo, 'Photo')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Styles
const thStyle = {
  padding: '10px',
  textAlign: 'left',
  borderBottom: '2px solid #ccc',
  whiteSpace: 'nowrap'
};

const tdStyle = {
  padding: '10px',
  borderBottom: '1px solid #eee',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap'
};

const trEven = { backgroundColor: '#f9f9f9' };
const trOdd = { backgroundColor: '#fff' };

export default AdminUmrahList;
