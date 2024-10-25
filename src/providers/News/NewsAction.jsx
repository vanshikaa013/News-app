const getCrurrentDate = () => {
  const requiredDate = new Date(Date.now()).toLocaleDateString("en-IN");

  const day = requiredDate.split("/")[0];
  const month = requiredDate.split("/")[1] - 1;
  const year = requiredDate.split("/")[2];
  return `${year} - ${month}-${day}`;
};

const currentDate = getCrurrentDate();

const fetchNews = async (Topic) => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${Topic}&from=${currentDate}&sortBy=publishedAt&apiKey=7f91e6722ed44fe0b11811fb3b506fd4`
  );
  const data = await res.json();
  return data.articles;
};

export default fetchNews;
