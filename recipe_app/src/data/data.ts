export const recipeList = [
  {
    code: 'AMS',
    name: 'Amsterdam',
    flights: [
      {
        code: 'HV74',
        destinationAirportCode: 'JFK',
        adultPrice: 800,
        childPrice: 500,
      },
      {
        code: 'KL23',
        destinationAirportCode: 'LHR',
        adultPrice: 200,
        childPrice: 150,
      },
      {
        code: 'UA99',
        destinationAirportCode: 'LHR',
        adultPrice: 190,
        childPrice: 140,
      },
    ],
  },
  {
    code: 'LHR',
    name: 'London, Heathrow',
    flights: [
      {
        code: 'UA57',
        destinationAirportCode: 'JFK',
        adultPrice: 600,
        childPrice: 350,
      },
    ],
  },
  {
    code: 'JFK',
    name: 'New York, JFK',
    flights: [
      {
        code: 'HV74',
        destinationAirportCode: 'AMS',
        adultPrice: 900,
        childPrice: 550,
      },
      {
        code: 'UA57',
        destinationAirportCode: 'LHR',
        adultPrice: 590,
        childPrice: 240,
      },
    ],
  },
]
