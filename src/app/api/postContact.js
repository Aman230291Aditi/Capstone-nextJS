export const postContact = async (contactData, token) => {
  try {
    const response = await fetch(
      "https://capstone.applicone.com/blog/postcontact/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`, // Include token here
        },
        body: JSON.stringify(contactData)
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result
  } catch (error) {
    console.log(error, "Error in APi");
    throw error;
  }
};
