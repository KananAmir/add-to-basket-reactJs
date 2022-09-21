import axios from 'axios';

// const REACT_APP_BASE_URL = 'https://northwind.vercel.app/api/';

const axiosInstance = axios.create({
    baseURL: "https://northwind.vercel.app/api/",
    timeout: 2000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

// export const getProducts = async () => {
//     try {
//         let response = await axios.get(`${REACT_APP_BASE_URL}products`);
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// }
export const getProducts = async () => {
    return await axiosInstance.get(`products`);

}

// export const getProductDetail = async (id) => {
//     try {
//         let response = await axios.get(`${REACT_APP_BASE_URL}products/${id}`);
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// }
export const getProductDetail = async (id) => {
    return await axiosInstance.get(`products/${id}`);
};

