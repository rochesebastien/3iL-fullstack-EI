import axios from "axios";

const API_URL = "http://localhost:3000"


export async function getAllTickets() {
    try {
        const response = await axios.get(`${API_URL}/ticket`);
        return response.data;
    //   return data
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  export async function deleteTicket(id: number) {
    try {
        const response = await axios.delete(`${API_URL}/ticket/${id}`);
        return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  export async function createTicket(titre : string, description : string) {
    try {
        const response = await axios.post(`${API_URL}/ticket/`,{
            titre,
            description,
        });
        return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  export async function getTicketByID(id : number) {
    try {
        const response = await axios.get(`${API_URL}/ticket/${id}`);
        return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  export async function updateTicket(id : number,titre : string, desc : string) {
    try {
        const response = await axios.put(`${API_URL}/ticket/${id}`,{
            titre,
            desc,
        });
        return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  export async function updateStatusTicket(id : number,status : string) {
    try {
        const response = await axios.put(`${API_URL}/ticket/status/${id}`,{
            status,
        });
        return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }