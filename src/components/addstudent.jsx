const AddStudent = () => {
  return (
    <>
      <div class="mb-3 row">
        <h3>Creational design Pattern</h3>
      </div>
      <div class="mb-3 row">
        <h3>Add Student</h3>
      </div>
      <div class="mb-3 row">
        <label for="id" class="col-sm-2 col-form-label">
          ID
        </label>
        <div class="col-sm-10">
          <input type="number" class="form-control" id="id" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="name" class="col-sm-2 col-form-label">
          Name
        </label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="Name" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="age" class="col-sm-2 col-form-label">
          Age
        </label>
        <div class="col-sm-10">
          <input type="number" class="form-control" id="age" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="roll" class="col-sm-2 col-form-label">
          Roll Number
        </label>
        <div class="col-sm-10">
          <input type="number" class="form-control" id="roll" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="sem" class="col-sm-2 col-form-label">
          Semester
        </label>
        <div class="col-sm-10">
          <input type="number" class="form-control" id="sem" />
        </div>
      </div>

      <div class="mb-3 row justify-content-end">
        <div className="col-3">
          <button className="form-control btn btn-primary" type="button">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default AddStudent;
