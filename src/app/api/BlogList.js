export const BlogList = async (token) => {
  try {
    const response = await fetch(
      "https://capstone.applicone.com/blog/getBlogList/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`, // Include token here
        },
        body: JSON.stringify(),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error, "Error in API");
  }
};

export const BlogDetails = async (token, blogID) => {
  try {
    const response = await fetch(
      `https://capstone.applicone.com/blog/getBlogDetail/${blogID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`, // Include token here
        },
        body: JSON.stringify(),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error, "Error in API");
  }
};
