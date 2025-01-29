const charactersList = () => {
  fetch('https://swapi.dev/api/people/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      const names = data.results.map(character => {
        return character.name;
      });
      console.log(names);
      return names;
    })
    .catch((err) => {
      console.error('Ошибка:', err);
      return [];
    });
}

export default charactersList;