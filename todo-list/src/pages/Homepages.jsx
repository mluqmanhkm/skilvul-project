import HomepagesLayout from "../layout/Homepages";
import CreateTodo from "../components/CreateTodo";
import FilterTodo from "../components/FilterTodo";
import ListTodo from "../components/ListTodo";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Homepages = () => {
  const TodoData = useSelector((state) => state.Todo.ListTodo);
  const [editBtn, setEditBtn] = useState(false)

  useEffect(() => {}, []);

  useEffect(() => {
    // console.log(TodoData);
    console.log(editBtn)
  }, [TodoData, editBtn]);


  const buttonSaveEdit = () => {
    console.log("test");
  };

  return (
    <>
      <HomepagesLayout>
        <section id="homepages" className="row">
          <div className="col-12 title-box text-center">
            <h1>What's the plan for today?</h1>
          </div>
          <div className="col-12 create-box py-4">
            <CreateTodo />
          </div>
          <div className="d-flex justify-content-center btn-filter mt-4">
            <FilterTodo />
          </div>
          <div className="col-12 list-todo-box mt-5 d-flex flex-column justify-content-center align-items-center">
            {TodoData?.map((data, index) => {
              // console.log(data);
              return <ListTodo key={index} valueData={data.value} idData={data.id} checkListData={data.checkList} editStatus={editBtn} clickEditButton={setEditBtn} clickSaveEditButton={buttonSaveEdit} />;
            })}
          </div>
        </section>
      </HomepagesLayout>
    </>
  );
};

export default Homepages;
