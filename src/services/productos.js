const basePath = "https://fakestoreapi.com/products";

export const getProductos = async () => {
  try {
    const response = await fetch(basePath);
    return await response.json();
  } catch (error) {
    throw error;
  }
};
export const getProductById = async (id) => {
  try {
    const response = await fetch(`${basePath}/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
