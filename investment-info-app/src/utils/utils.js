export const addIndexToJsonArray = (data) => {
  const updatedResponse = data.map((item, index) => ({
    ...item,
    id: index + 1,
  }));

  return updatedResponse;
};
