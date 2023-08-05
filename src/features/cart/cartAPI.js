import axios from "axios";
export function addToCart(item) {
  return new Promise(async (resolve) => {
    try {
      const response = await axios.post("http://localhost:8080/cart", item, {
        headers: { "Content-Type": "application/json" },
      });

      resolve({ data: response.data });
    } catch (error) {
      // Handle errors if necessary
      console.error("Error fetching products:", error);
      resolve({ data: [] }); // You can provide a default value or handle the error in a different way
    }
  });
}
export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/cart?user=" + userId
      );
      resolve({ data: response.data });
    } catch (error) {
      // Handle errors if necessary
      console.error("Error fetching products:", error);
      resolve({ data: [] }); // You can provide a default value or handle the error in a different way
    }
  });
}
export function updateCart(update) {
  return new Promise(async (resolve) => {
    try {
      const response = await axios.patch(
        "http://localhost:8080/cart/" + update.id,
        update,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      resolve({ data: response.data });
    } catch (error) {
      // Handle errors if necessary
      console.error("Error fetching products:", error);
      resolve({ data: [] }); // You can provide a default value or handle the error in a different way
    }
  });
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    try {
      const response = await axios.delete(
        "http://localhost:8080/cart/" + itemId,

        {
          headers: { "Content-Type": "application/json" },
        }
      );

      resolve({ data: { id: itemId } });
    } catch (error) {
      // Handle errors if necessary
      console.error("Error fetching products:", error);
      resolve({ data: [] }); // You can provide a default value or handle the error in a different way
    }
  });
}
export async function resetCart(userId) {
  return new Promise(async (resolve, reject) => {
    const response = await fetchItemsByUserId(userId);
    const items = response.data;
    for (let item of items) {
      await deleteItemFromCart(item.id);
    }
    resolve({ status: "success" });
  });
}
