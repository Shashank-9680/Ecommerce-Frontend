// A mock function to mimic making an async request for data
import axios from "axios";
export function fetchCount(amount = 1) {
  return new Promise(async (resolve) => {
    try {
      const data = await axios.get("http://localhost:8080");
      resolve({ data });
    } catch (error) {
      // Handle any errors that might occur during the API call
      // For example, you might want to reject the promise with an error message.
      resolve({ error: "An error occurred while fetching data." });
    }
  });
}
