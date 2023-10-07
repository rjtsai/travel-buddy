import axios from "axios";
const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    },
    headers: {
      'X-RapidAPI-Key': '935d1ddf9amshf2182da3c47d436p13ad22jsn3ee08d46f2e1',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  
 
export const getPlacesData = async () => {
    try {
        const { data: { data }} = await axios.get(url, options);
        return data
    } catch (error) {
        console.log(error);
    }
}