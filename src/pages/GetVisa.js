import React from 'react';
import { Link } from 'react-router-dom';

const GetVisa = () => {
  return (
    <div className="bg-light">
      <div className="container py-5">
        {/* Required Documents */}
        <div className="bg-white p-4 mb-4 rounded shadow">
          <h5 className="bg-primary text-white px-3 py-2 rounded">Required Documents:</h5>
          <ol className="mt-3 ps-4 text-muted">
            <li>Passport Copy</li>
            <li>Passport Signature Page</li>
            <li>CNIC</li>
            <li>White Background Picture</li>
            <li>Passport should be valid for a minimum period of 6 months on the date of travel.</li>
            <li>The passport should be machine readable and in good condition.</li>
            <li>If you are applying for a visa on behalf of your family, you must have a valid UAE Residence with minimum 3 months of validity at the time of application.</li>
          </ol>
        </div>

        {/* Traveler Details */}
        <div className="bg-white p-4 rounded shadow mb-4">
          <h5 className="bg-primary text-white px-3 py-2 rounded">Traveler(s) Details</h5>

          {/* Contact Details */}
          <div className="bg-warning bg-opacity-75 text-dark fw-bold px-3 py-2 mt-3 rounded">Contact Details</div>
          <div className="row mt-3">
            <div className="col-md-4"><label>Email</label><input className="form-control" /></div>
            <div className="col-md-4"><label>Country Code</label><select className="form-select"><option>Enter country</option></select></div>
            <div className="col-md-4"><label>Phone</label><input className="form-control" /></div>
          </div>

          {/* Lead Traveller */}
          <div className="bg-warning bg-opacity-75 text-dark fw-bold px-3 py-2 mt-4 rounded">Adult 1 ( Lead Traveller )</div>
          <div className="row mt-3">
            <div className="col-md-2"><label>Title</label><select className="form-select"></select></div>
            <div className="col-md-2"><label>Gender</label><select className="form-select"></select></div>
            <div className="col-md-2"><label>First Name</label><input className="form-control" /></div>
            <div className="col-md-2"><label>Middle Name</label><input className="form-control" /></div>
            <div className="col-md-2"><label>Last Name</label><input className="form-control" /></div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3"><label>Mother Name</label><input className="form-control" /></div>
            <div className="col-md-3"><label>Date of Birth</label><input type="date" className="form-control" /></div>
            <div className="col-md-2"><label>Birth Country</label><select className="form-select"></select></div>
            <div className="col-md-2"><label>Marital Status</label><select className="form-select"></select></div>
            <div className="col-md-2"><label>Education</label><select className="form-select"></select></div>
          </div>
          <div className="mt-3 col-md-3">
            <label>Profession</label>
            <select className="form-select"></select>
          </div>

          {/* Passport Details */}
          <div className="bg-secondary text-white fw-bold px-3 py-2 mt-4 rounded">Passport Details</div>
          <div className="row mt-3">
            <div className="col-md-3"><label>Passport Number</label><input className="form-control" /></div>
            <div className="col-md-3"><label>Nationality</label><select className="form-select"></select></div>
            <div className="col-md-3"><label>City</label><input className="form-control" /></div>
            <div className="col-md-3"><label>Address</label><input className="form-control" /></div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3"><label>Passport Copy</label><select className="form-select"></select></div>
            <div className="col-md-3"><label>Photograph</label><select className="form-select"></select></div>
          </div>
        </div>

        {/* Review Your Plan */}
        <div className="bg-white p-4 rounded shadow mb-4">
          <h5 className="bg-primary text-white px-3 py-2 rounded">Review Your Plan</h5>
          <div className="table-responsive mt-3">
            <table className="table table-bordered">
              <thead>
                <tr className="table-light">
                  <th>Plan</th>
                  <th>Type</th>
                  <th>Fare</th>
                  <th>Service Fee</th>
                  <th>Vat %</th>
                  <th>Vat Amount</th>
                  <th>Count</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="8" className="text-center">No plan selected</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Type */}
        <div className="bg-white p-4 rounded shadow mb-4">
          <div className="bg-warning bg-opacity-75 text-dark fw-bold px-3 py-2 rounded">Payment Type</div>
          <div className="form-check mt-3">
            <input type="radio" className="form-check-input" name="payment" />
            <label className="form-check-label">Credit/Debit Card</label>
          </div>
          <div className="form-check">
            <input type="radio" className="form-check-input" name="payment" />
            <label className="form-check-label">Tabby</label>
          </div>

          <div className="form-check mt-3">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">I have Read & Accept Terms and Conditions.</label>
          </div>

          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-warning">Back To Review</button>
            <button className="btn btn-warning text-white">Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetVisa;
