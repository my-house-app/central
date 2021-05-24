import axios from 'axios';

const { REACT_APP_API_BASE_ENDPOINT } = process.env;

// DETALLES DE UNA RESERVA
export async function getBookingService(bookingId) {
    const endpoint = `${REACT_APP_API_BASE_ENDPOINT}/booking/${bookingId}`;
    return await axios.get(endpoint);
}

// AGREGAR UNA RESERVA
export async function addBookingService(booking) {
    const endpoint = `${REACT_APP_API_BASE_ENDPOINT}/booking`;
    return await axios.post(endpoint, booking);
}

// EDITAR UNA RESERVA
export async function editBookingService(bookingId, booking) {
    const endpoint = `${REACT_APP_API_BASE_ENDPOINT}/booking/${bookingId}`;
    return await axios.put(endpoint, booking);
}

// ELIMINAR UNA RESERVA
export async function deleteBookingService(bookingId) {
    const endpoint = `${REACT_APP_API_BASE_ENDPOINT}/booking/${bookingId}`;
    return await axios.delete(endpoint);
}

