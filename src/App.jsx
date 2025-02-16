import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  const deleteAllHandler = () => {
    setMainTask([]);
  };

  let renderTask = <h2 className="text-center text-gray-500">No tasks available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex flex-col sm:flex-row items-center justify-between mb-6 p-3 bg-white shadow rounded w-full">
          <div className="flex flex-col sm:flex-row items-center w-full sm:w-2/3">
            <h5 className="text-xl font-semibold">{t.title}</h5>
            <h6 className="text-md font-medium text-gray-600 sm:ml-4">{t.desc}</h6>
          </div>
          <button
            onClick={() => deleteHandler(i)}
            className="bg-red-400 text-white px-4 py-2 mt-2 sm:mt-0 rounded font-bold w-full sm:w-auto"
          >
            Completed
          </button>
        </li>
      );
    });
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center">
      <h1 className="text-white text-2xl sm:text-3xl p-6 text-center">
        MY TODO LIST
      </h1>

      <form className="bg-sky-200 p-6 flex flex-col sm:flex-row gap-4 items-center w-full max-w-2xl" onSubmit={submitHandler}>
        <input
          type="text"
          className="px-3 py-2 border border-gray-700 w-full sm:w-auto"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="px-3 py-2 border border-gray-700 w-full sm:w-auto"
          placeholder="Enter description here"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded w-full sm:w-auto">
          Add
        </button>
        <button
          onClick={deleteAllHandler}
          type="button"
          className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded w-full sm:w-auto"
        >
          Clear All
        </button>
      </form>

      <div className="p-6 bg-gray-100 mt-4 rounded w-full max-w-2xl">
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
}

export default App;
