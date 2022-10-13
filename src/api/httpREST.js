export const sendPostAuthRequest = async (url, inputData) => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(inputData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  try {
    if (res.ok) {
      return await res.json().then((data) => {
        return data;
      });
    } else {
      let errorMessage = "Authentication failed!!";
      await res.json().then((data) => {
        //show error modal
        if (data && data.error && data.error.message) {
          // console.log(data);
          // console.log(data.error.message);
          errorMessage = data.error.message;
        }
        throw new Error(errorMessage);
      });
    }
  } catch (errMsg) {
    alert(errMsg);
  }
};

