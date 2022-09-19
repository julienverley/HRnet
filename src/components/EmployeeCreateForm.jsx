import React from "react";

const EmployeeCreateForm = () => {
  return (
    <form className="form-container">
      {/* First inputs */}
      <div className="container-first-inputs">
        <div className="firstname input-container">
          <label htmlFor="firstname">First Name</label>
          <input type="text" autoComplete="off" id="firstname" />
        </div>

        <div className="lastname input-container">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" autoComplete="off" id="lastname" />
        </div>
        <div className="birthdate input-container">
          <label htmlFor="birthdate">Date of Birth</label>
          <input type="date" autoComplete="off" id="birthdate" />
        </div>
        <div className="startdate input-container">
          <label htmlFor="startdate">Start Date</label>
          <input type="date" autoComplete="off" id="startdate" />
        </div>
      </div>

      {/* Address */}
      <div className="container-address">
        {/* Street */}
        <div className="street input-container">
          <label htmlFor="street">Street</label>
          <input type="text" autoComplete="off" id="street" />
        </div>
        {/* City */}
        <div className="city input-container">
          <label htmlFor="city">City</label>
          <input type="text" autoComplete="off" id="city" />
        </div>

        {/* State - select (pas input) */}
        <div className="state input-container">
          <label htmlFor="state">State</label>
          <select name="state" id="state">
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            {/* etc. A rendre dynamique */}
          </select>
        </div>

        {/* Zip Code */}
        <div className="zipcode input-container">
          <label htmlFor="zipcode">Zip Code</label>
          <input type="text" autoComplete="off" id="zipcode" />
        </div>
      </div>

      {/* Department */}
      <div className="department input-container">
        <label htmlFor="department">Department</label>
        <input type="text" autoComplete="off" id="department" />
      </div>

      {/* Submit */}
      <div>
        <input className="button" type="submit" value="Save" />
      </div>
    </form>
  );
};

export default EmployeeCreateForm;
