import axios from "axios";

export const getUser = async () => {
  try {
    const response = await axios.get(
      "https://6333cc47433198e79dc95f94.mockapi.io/users"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
