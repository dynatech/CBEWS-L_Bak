import axios from "axios"

const API_URL='http://192.168.150.110:5000'
// import { API_URL } from "@config";


export function getRainfallPlotData(input, callback) {
    const { site_code, ts_end, days_diff } = input;
    const api_link = `${API_URL}/api/rainfall/get_rainfall_plot_data/${site_code}/${ts_end}/${days_diff}`;

    axios.get(api_link)
        .then(response => {
            const { data } = response;
            console.log("Rainfall Plot Data", data);
            callback(data);
        })
        .catch(error => {
            console.error(error);
        });
}
