import { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  addTodo,
  addTodoLoading,
  addTodoSuccess,
  getTodoLoading,
  getTodoSuccess,
  getTodos,
} from "../redux/Todos/actions";
import axios from "axios";

export const Todos = () => {
  const { loading, data, error } = useSelector(
    (store) => store.todos,
    shallowEqual
    // function equalityFn(prev, curr) {
    //   if (prev.loading === curr.loading && prev.error === curr.error) {
    //     return true;
    //   }
    //   return false; // means prev and curr are same.
    // }
  ); // {counte: 1, todos: [...]}
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  useEffect(() => {
    getTodosData();
  }, []);

  const getTodosData = () => {
    dispatch(getTodos());
  }
  //   axios
  //     .get("http://localhost:3001/todos")
  //     .then(({ data }) => {
  //       dispatch(getTodoSuccess(data));
  //     })
  //     .catch(() => {
  //       // dispath error
  //     });
  // };

 // console.log("re-rendered Todos");

  return loading ? (
    "Loading...."
  ) : (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          dispatch(addTodoLoading());
          axios
            .post("http://localhost:3001/todos", {
              title: text,
              status: false,
            })
            .then(() => {
              dispatch(addTodoSuccess());
              getTodos();
            })
            .catch(() => {
              // dispatch(error)
            });
        }}
      >
        Add todo
      </button>
      <div>
        {data.map((e) => (
          <div key={e.id}>{e.title}</div>
        ))}
      </div>
    </div>
  );
};
