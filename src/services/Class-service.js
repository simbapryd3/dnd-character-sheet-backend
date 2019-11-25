const fetch = require('node-fetch');

module.exports = {
    async findAll() {
      try {
        const options = { method: "GET", headers: {"Accept": "application/json"}}
        const url = `http://dnd5eapi.co/api/classes/`;
        const rawResponse = await fetch(url, options);
        const dndClasses = await rawResponse.json();
        console.log(dndClasses)
        return dndClasses;

      } catch (err) {
        return err
    }
  },
  
    async findById(id) {
      const url = `http://dnd5eapi.co/api/classes/${id}`;
      const rawResponse = await fetch(url);
      const dndClass = await rawResponse.json();
      return dndClass;
    }
};