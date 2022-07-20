const imgAPI = [];

for (let i = 0; i < 5; i++) {
  imgAPI[i] = {
    url: `https://picsum.photos/200?${i}`,
    id: i,
  };
}

export default imgAPI;
