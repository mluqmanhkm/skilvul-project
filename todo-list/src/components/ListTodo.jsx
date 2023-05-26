import { deleteTodoData, checkListTodoData } from "../redux/reducers/Todo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ListTodo = (props) => {
  const TodoData = useSelector((state) => state.Todo.ListTodo);
  const dispatch = useDispatch();

  useEffect(() => {}, [TodoData]);

  const CheckListData = (id) => {
    let statusChecked = document.querySelector(`#checkboxNoLabel-${id}`).checked;
    console.log(id, statusChecked);
    let newList = [];
    let newCheckedList = {};
    TodoData.map((data) => {
      if (data.id !== id) newList.push(data);
      if (data.id === id) {
        for (let i in data) {
          newCheckedList[i] = data[i];
        }
      }
    });

    newCheckedList.checkList = statusChecked;
    newList.push(newCheckedList);
    dispatch(checkListTodoData(newList));
  };

  const DeleteData = (id) => {
    let newList = [];
    TodoData.map((data) => {
      if (data.id !== id) newList.push(data);
    });
    dispatch(deleteTodoData(newList));
  };

  return (
    <>
      <div className="row card py-3 px-2 col-8 mt-3">
        <div className="col-1 radio-box">
          <input onChange={() => CheckListData(props?.idData)} className="form-check-input" type="checkbox" id={`checkboxNoLabel-${props?.idData}`} defaultChecked={false} />
        </div>
        <div className="col-8 wp-value">
          <span id={`value-data-${props?.idData}`} className={`value-text ${props?.checkList ? 'checked' : ''}`}>
            <div className={props?.editStatus ? "d-none" : "d-flex"}>{props?.valueData}</div>

            <div className="d-none">
              <input className="form-control me-2" defaultValue="asd" />
              <button onClick="saveBtn" className="btn btn-success">
                save
              </button>
            </div>
          </span>
        </div>
        <div className="col-3 wp-action">
          <button
            className="btn btn-secondary"
            onClick={() => {
              props?.clickEditButton(!props?.editStatus);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              DeleteData(props?.idData);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default ListTodo;
