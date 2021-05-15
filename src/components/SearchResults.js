import React from "react";

function SearchResults(props) {
  let employees = props.results;
  //map employees for row in the table

  let rows = employees.map((employee) => (
    <tr>
      <td>{<img alt="employee" src={employee.picture.thumbnail} />}</td>
      <td>{employee.name.first + employee.name.last}</td>
      <td>{employee.phone}</td>
      <td>{employee.email}</td>
      <td>{employee.dob.date}</td>
    </tr>
  ));

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default SearchResults;
