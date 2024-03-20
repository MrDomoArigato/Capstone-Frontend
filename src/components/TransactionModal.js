import React, { useState } from 'react';
import axios from 'axios';
export default function TransactionModal() { // addTransaction added
    const [formData, setFormData] = useState({
      transactionDate: '',
      description: '',
      transactionType: 'Select One',
      transactionAmount: ''
    });
  
    const [validationErrors, setValidationErrors] = useState({});
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Perform validation
      const errors = {};
      if (!formData.transactionDate) {
        errors.transactionDate = 'Transaction Date is required.';
      }
      if (formData.transactionType === 'Select One') {
        errors.transactionType = 'Transaction Type is required.';
      }
      if (!formData.transactionAmount) {
        errors.transactionAmount = 'Transaction Amount is required.';
      }
  
      // Update validation errors state
      setValidationErrors(errors);
  
      // If there are validation errors, prevent form submission
      if (Object.keys(errors).length === 0) {
        // Proceed with form submission logic
        console.log('Form submitted successfully:', formData);

      } else {
        console.log('Form submission prevented due to validation errors.');
      }
    };
  
    function countCharacters() {
      var text = document.getElementById('description').value;
      var maxLength = 80;
      var remaining = maxLength - text.length;
      document.getElementById('counter').textContent = remaining;
    }
  
    const handleModalClose = () => {
       // Clear validation errors
      setValidationErrors({});
      formData.transactionDate=''
      formData.transactionType='Select One'
      formData.transactionAmount=''
      document.getElementById('transactionForm').reset(); // Reset form controls
      document.getElementById('counter').textContent = 80;
    };
  
    return (
      <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add Transaction
      </button>
  
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Add Transaction</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleModalClose}></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} id="transactionForm">
                <div className="mb-3">
                  <label className="control-label requiredField" htmlFor="transactionDate">
                    Transaction Date:
                    <span className="asteriskField">*</span>
                  </label>
                  <input
                    type="date"
                    id="transactionDate"
                    name="transactionDate"
                    value={formData.transactionDate}
                    onChange={handleInputChange}
                  />
                  <div className="text-danger">{validationErrors.transactionDate}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="Description" className="col-form-label">Description:</label>
                  <input type="text" className="form-control" id="description" maxLength={80} onInput={countCharacters}></input>
                  <p><small>Remaining characters: <span id="counter">80</span></small></p>
                </div>
                <div className="mb-3">
                  <label className="control-label requiredField" htmlFor="Description">
                    Transaction Type:
                    <span className="asteriskField">*</span>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="transactionType"
                    value={formData.transactionType}
                    onChange={handleInputChange}
                  >
                  <option value="Select One">Select One</option>
                  <option value="auto">Auto</option>
                  <option value="bills & utilities"> Bills & utilities</option>
                  <option value="education">Education</option>
                  <option value="movies">Movies, Music & News</option>
                  <option value="fees">Fees</option>
                  <option value="food">Restaurants, Groceries, Bars & Alcohol</option>
                  <option value="gifts">Gifts</option>
                  <option value="health">Health & Well Being</option>
                  <option value="home">Home & Furnishings</option>
                  <option value="mortgage">Mortgage & Rent</option>
                  <option value="income">Income</option>
                  <option value="hygiene">Hygiene</option>
                  <option value="pets">Pets</option>
                  <option value="shopping">Shopping</option>
                  <option value="taxes">Taxes</option>
                  <option value="transfer">Transfer</option>
                  <option value="travel">Travel</option>
                  <option value="other">Other</option>
                  </select>
                  <div className="text-danger">{validationErrors.transactionType}</div>
                </div>
                <div className="mb-3">
                  <label className="control-label requiredField" htmlFor="amount">
                    Transaction Amount:
                    <span className="asteriskField">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="transactionAmount"
                    step="0.01"
                    min="0"
                    value={formData.transactionAmount}
                    onChange={handleInputChange}
                  />
                  <div className="text-danger">{validationErrors.transactionAmount}</div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleModalClose}>Close</button>
                  <button type="submit" className="btn btn-primary">Save changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
  
export function Trans() {
const [quote, setQuote] = useState('');

const getQuote = async () => {
    try {
    const response = await axios.get('http://localhost:5160/Transaction/4');
    console.log(response.data);
    setQuote(response.data);
    } catch (error) {
    console.error('Error fetching data from the database', error);
    setQuote('Error fetching data');
    }
};

return (
    <div className="app">
    <button onClick={getQuote}>Get Data</button>
    {quote && (
        <div>
        <p>Received Data:</p>
        <pre>{JSON.stringify(quote, null, 2)}</pre>
        </div>
    )}
    </div>
);
}



