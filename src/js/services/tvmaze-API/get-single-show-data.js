const getSingleShowData = async (showId) => {
  const showData = await fetch(`http://api.tvmaze.com/shows/${showId}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));

  return showData;
};

export default getSingleShowData;
