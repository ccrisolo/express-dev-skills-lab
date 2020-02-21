const sports = [
    {sport: 'Basketball', played: true},
    {sport: 'Football', played: true},
    {sport: 'Soccer', played: true},
    {sport: 'Baseball', played: true}
  ];

  function getAllSports (){
      return sports;
  }

  function getOneSport(id) {
      return sports[id];
  }

  module.exports = {
      getAllSports,
      getOneSport
  };