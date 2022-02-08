const Scholarship = () => {
  return (
    <>
      <div class="mb-3 row">
        <h3 style={{ justify: "center" }}>Composite</h3>
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
        <label for="fee" class="col-sm-2 col-form-label">
          Semester Fee
        </label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="fee" />
        </div>
      </div>

      <div class="mb-3 row justify-content-end">
        <div className="col-3">
          <button className="form-control btn btn-primary" type="button">
            Calculate New Fee
          </button>
        </div>
      </div>
    </>
  );
};

export default Scholarship;
