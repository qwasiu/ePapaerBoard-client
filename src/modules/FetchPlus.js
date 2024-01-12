export const fetchPlus = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        reject(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      resolve(data);
    } catch (error) {
      console.error(`An error occurred while fetching data from ${url}:`, error);
      reject(error);
    }
  });
};

export default fetchPlus;