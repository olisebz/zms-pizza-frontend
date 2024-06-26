// src/pages/admin/CustomerList.js
import React from 'react';

function CustomerList({ customers, editCustomer, deleteCustomer }) {
  return (
    <div className="customer-list">
      <h2>Kunden Liste</h2>
      {customers.map((customer, index) => (
        <div key={index} className="customer">
          <div>
            <div>{customer.firstName} {customer.lastName}</div>
            <div>{customer.street}</div>
            <div>{customer.phoneNumber}</div>
          </div>
          <div className="customer-buttons">
            <button className="edit-button" onClick={() => editCustomer(index)}>Bearbeiten</button>
            <button className="delete-button" onClick={() => deleteCustomer(index)}>Löschen</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CustomerList;