import React, { useCallback, useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import { useHttp } from "./hooks/useHttp";

function App() {
  const [tasks, setTasks] = useState([]);

  const transformedData = (taskObj) => {
    const loadedTasks = [];
    for (const taskKey in taskObj) {
      loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
    }
    setTasks(loadedTasks);
  };

  const httpRequestConfig = {
    url: "https://leaningreact-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
  };

  const { isLoading, error, sendHttpRequest: fetchTasks } = useHttp();

  useEffect(() => {
    fetchTasks(httpRequestConfig, transformedData);
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
