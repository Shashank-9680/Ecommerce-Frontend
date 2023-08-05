// A mock function to mimic making an async request for data
import axios from "axios";
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    try {
      const response = await axios.get("http://localhost:8080/products");
      resolve({ data: response.data });
    } catch (error) {
      // Handle errors if necessary
      console.error("Error fetching products:", error);
      resolve({ data: [] }); // You can provide a default value or handle the error in a different way
    }
  });
}
export function fetchAllProductsByFilters(filter, sort, pagination) {
  let queryString = "";
  for (let key in filter) {
    let categoryValues = filter[key];
    if (categoryValues.length > 0) {
      let lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  return new Promise(async (resolve) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/products?" + queryString
      );
      const totalItems = await response.headers.get("X-Total-Count");
      resolve({ data: { products: response.data, totalItems: +totalItems } });
    } catch (error) {
      // Handle errors if necessary
      console.error("Error fetching products:", error);
      resolve({ data: [] }); // You can provide a default value or handle the error in a different way
    }
  });
}
export function fetchCategories() {
  return new Promise(async (resolve) => {
    try {
      const response = await axios.get("http://localhost:8080/categories");
      resolve({ data: response.data });
    } catch (error) {
      // Handle errors if necessary
      console.error("Error fetching products:", error);
      resolve({ data: [] }); // You can provide a default value or handle the error in a different way
    }
  });
}
export function fetchProductsById(id) {
  return new Promise(async (resolve) => {
    try {
      const response = await axios.get("http://localhost:8080/products/" + id);
      resolve({ data: response.data });
    } catch (error) {
      // Handle errors if necessary
      console.error("Error fetching products:", error);
      resolve({ data: [] }); // You can provide a default value or handle the error in a different way
    }
  });
}
export function createProduct(product) {
  return new Promise(async (resolve) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/products/",
        product,
        { "content-type": "Application-json" }
      );
      resolve({ data: response.data });
    } catch (error) {
      // Handle errors if necessary
      console.error("Error fetching products:", error);
      resolve({ data: [] }); // You can provide a default value or handle the error in a different way
    }
  });
}
export function updateProduct(update) {
  return new Promise(async (resolve) => {
    try {
      const response = await axios.patch(
        "http://localhost:8080/products/" + update.id,
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
export function fetchBrands() {
  return new Promise(async (resolve) => {
    try {
      const response = await axios.get("http://localhost:8080/brands");
      resolve({ data: response.data });
    } catch (error) {
      // Handle errors if necessary
      console.error("Error fetching products:", error);
      resolve({ data: [] }); // You can provide a default value or handle the error in a different way
    }
  });
}
