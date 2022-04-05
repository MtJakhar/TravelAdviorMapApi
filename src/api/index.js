import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary";

const options = {
  url: "https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary",
  params: {
    tr_longitude: "109.262909",
    tr_latitude: "12.346705",
    bl_longitude: "109.095887",
    bl_latitude: "12.113245",
  },
  headers: {
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    "X-RapidAPI-Key": "faf59a1276mshc793650f201d596p1c27fbjsnb98cdd28d64b",
  },
};

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);

    return data;
  } catch (error) {
    console.log(error);
  }
};
