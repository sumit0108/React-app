export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    },
  };


  export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key':  process.env.REACT_APP_RAPID_API_KEY
    }
  };

export const fetchData = async(url, Options) => {
    const responsen = await fetch(url, Options);
    const data = await responsen.json();

    return data;
}