import { addTodoData } from "../redux/reducers/Todo";
import { useDispatch } from "react-redux";

function makeid(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const CreateTodo = () => {
  const dispatch = useDispatch();

  const clickAdd = () => {
    let getInputTodo = document.querySelector("#input-todo").value;
    // console.log(getInputTodo);
    dispatch(addTodoData({ id: makeid(20), checkList: false, value: getInputTodo,  }));
  };

  const onEnterInput = (event) => {
    if (event.key === "Enter") {
      //   console.log(event.currentTarget.value);
      dispatch(addTodoData({ id: makeid(20), checkList: false, value: event.currentTarget.value }));
    }
  };

  return (
    <>
      <div className="row wrapper-cb">
        <div className="col-12 col-sm-10 col-lg-10 input-box">
          <input onKeyDown={onEnterInput} className="form-control" id="input-todo" placeholder="What to do" />
        </div>
        <div className="col-12 col-sm-2 col-lg-2 btn-box">
          <button onClick={clickAdd} className="btn btn-primary" type="button">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateTodo;
