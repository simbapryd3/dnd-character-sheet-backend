module.exports = {
  async findAll() {
    const url = `http://dnd5eapi.co/api/classes/`;
    const rawResponse = await fetch(url);
    const dndClasses = await rawResponse.json();
    return dndClasses;
  },

  async findById(id) {
    const url = `http://dnd5eapi.co/api/classes/${id}`;
    const rawResponse = await fetch(url);
    const dndClass = await rawResponse.json();
    return dndClass;
  }
};
