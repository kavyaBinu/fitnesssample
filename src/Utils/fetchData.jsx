 export const exerciseOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': 'f1fac3f698msh04ea9a597f44621p1d9adcjsn969e50e837f1',
      },
    };
    
    export const youtubeOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
      },
    };
    
    export const fetchData = async (url, options) => {
      const res = await fetch(url, options);
      const data = await res.json();
    
      return data;
    };