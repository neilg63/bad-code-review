// moved from component
export const getSecrets = async () => {
  // fetch does not return data directly but a response object that can then parse as json
  // use catch in promise
  let results = [];
  await fetch('https://api.openbrewerydb.org/breweries')
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        return [];
      }
    }).then(data => {
      /// make sure you get back an array
      // extra validation may be requird to guard against API changes.
      if (data instanceof Array) {
        results = data;
      }
    })
    .catch(e => console.log(e));
  return results;
}