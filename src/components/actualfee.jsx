const ActualFee = () => {
  return (
    <>
      <div class="mb-3 row">
        <h3 style={{ justify: "center" }}>Adapter</h3>
      </div>

      <div class="mb-3 row">
        <label for="fee" class="col-sm-2 col-form-label">
          Academics Fee
        </label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="fee" />
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

export default ActualFee;
