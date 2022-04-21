import React from "react";
import Table from 'react-bootstrap/Table';

function UserDatabase() {
  return(
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Specialty</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Tincidut</td>
          <td>Tincidut@email.com</td>
          <td>Oslo</td>
          <td>Cows</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Ullamcorper</td>
          <td>Ullamcorper@email.com</td>
          <td>Bergen</td>
          <td>Mud</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Pretium</td>
          <td>Pretium@email.com</td>
          <td>Oslo</td>
          <td>Sand castles</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Libero</td>
          <td>Libero@email.com</td>
          <td>Bergen</td>
          <td>Puppets</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default UserDatabase;