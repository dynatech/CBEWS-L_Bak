import axios from "axios"

const API_URL='http://192.168.150.237:5000'

const getEvent = (data,callback) => {
    console.log("API_URL", API_URL)
    axios.get(`${API_URL}/api/events/get_all_events`, data).then((response) => {
        callback(response.data)
    }).catch((error) => {
        console.error("Error while getting activity:", error);
    });
}

const addEvent = (data,callback) => {
    console.log("API_URL", API_URL)
    axios.post(`${API_URL}/api/events/save_activity`, data).then((response) => {
        callback(response.data)
    }).catch((error) => {
        console.error("Error while adding activity:", error);
    });
}

const deleteEvent = (data,callback) => {
    axios.post(`${API_URL}/api/events/delete_activity`, data).then((response) => {
        callback(response.data)
    }).catch((error) => {
        console.error("Error while deleting activity:", error);
    });
}

export { getEvent, addEvent, deleteEvent }