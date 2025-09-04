import React, { useState } from "react";
import './Allcar.css'

function Allcar (){
  const [price, setPrice] = useState(50000);

  return(
    <div className="search-container">
      <h2>Search Cars</h2>

      <div className="form-row">
        <select>
          <option>Make & Model</option>
          <option>Toyota</option>
          <option>Honda</option>
        </select>

        <select>
          <option>Brand</option>
          <option>Lexus</option>
          <option>Nissan</option>
        </select>
      </div>

      <div className="form-row">
        <select>
          <option>Type</option>
          <option>SUV</option>
          <option>Sedan</option>
        </select>

        <div className="slider-group">
          <label htmlFor="price">
            Max Price: <span id="price-value">${price.toLocaleString()}</span>
          </label>
          <input
            type="range"
            id="price"
            min="10000"
            max="100000"
            step="1000"
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="form-footer">
        <select>
          <option>Sort By</option>
          <option>Price</option>
          <option>Year</option>
        </select>

        <button className="reset-btn">Reset Filters</button>
      </div>

      <p className="results">🔍 6 results found</p>
    </div>
  )
}
  export default Allcar