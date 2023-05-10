export const fetchChartData = async () => {
  const response = await fetch(
    "https://task-keeper-5fba9-default-rtdb.firebaseio.com/tasks.json"
  );
  const data = await response.json();
  return data;
};
