const FilterTodo = () => {
  return (
    <>
      <div className="wrapper-btn-filter">
        <button type="button" className="btn btn-secondary mx-2 mr-2">
          ALL
        </button>
        <button type="button" className="btn btn-secondary mx-2 mr-2">
          ACTIVE
        </button>
        <button type="button" className="btn btn-secondary mx-2 mr-2">
          COMPLETE
        </button>
      </div>
    </>
  );
};

export default FilterTodo;
