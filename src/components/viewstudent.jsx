import Observer from "./observer";

const ViewStudent = () => {
  return (
    <>
      <h1>Student Detail</h1>
      <Observer></Observer>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Roll no</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Semester</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>7</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>6</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>3</td>
    </tr>
  </tbody>
</table>
    </>
  );
};

export default ViewStudent;
