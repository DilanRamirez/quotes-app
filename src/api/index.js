import axios from "axios";

export const getImages = async () => {
  try {
    const response = await axios.get(
      // "https://picsum.photos/v2/list?page=2&limit=100?blur=2"
      "https://picsum.photos/v2/list?limit=100?blur=2"
    );
    const parsedData = {
      url: response.data.map((item) => item.download_url),
      author: response.data.map((item) => item.author),
    };

    // console.log(response.data);
    console.log(parsedData);

    return parsedData;
  } catch (error) {}
};

export const getQuotes = async () => {
  try {
    const response = await axios.get("https://type.fit/api/quotes");
    // console.log(response.data);
    const parsedData = {
      text: response.data.slice(0, 100).map((quote) => quote.text),
      author: response.data.slice(0, 100).map((quote) => quote.author),
    };

    console.log(parsedData);
    return parsedData;

    //   return parsedData;
  } catch (error) {}
};
