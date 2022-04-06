import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      url: "https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary",
      params: {
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        bl_latitude: sw.lat,
      },
      headers: {
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
