import axios from "axios";
export function createUser(userData) {
  return new Promise(async (resolve) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/users",
        userData,
        { headers: { "Content-Type": "application/json" } }
      );

      resolve({ data: response.data });
    } catch (error) {
      // Handle errors if necessary
      console.error("Error fetching products:", error);
      resolve({ data: [] }); // You can provide a default value or handle the error in a different way
    }
  });
}
export function checkUser(LoginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = LoginInfo.email;
    const password = LoginInfo.password;
    try {
      const response = await axios.get(
        `http://localhost:8080/users?email=` + email
      );
      console.log(response);
      //   console.log({ data: response.data });
      if (response.data.length) {
        if (password === response.data[0].password) {
          resolve({ data: response.data[0] });
          //   console.log(response.data[0]);
        } else {
          reject({ message: "wrong credentials" });
        }
      } else {
        reject({ message: "user not found" });
      }
    } catch (error) {
      // Handle errors if necessary
      console.error("Error fetching products:", error);
      resolve({ data: [] }); // You can provide a default value or handle the error in a different way
    }
  });
}
// export function updateUser(update) {
//   return new Promise(async (resolve) => {
//     try {
//       const response = await axios.patch(
//         "http://localhost:8080/users/",
//         +update.id,
//         update,
//         { headers: { "Content-Type": "application/json" } }
//       );

//       resolve({ data: response.data });
//     } catch (error) {
//       // Handle errors if necessary
//       console.error("Error fetching products:", error);
//       resolve({ data: [] }); // You can provide a default value or handle the error in a different way
//     }
//   });
// }
export function signOut(userId) {
  return new Promise(async (resolve) => {
    // TODO: on server we will remove user session info
    resolve({ data: "success" });
  });
}
