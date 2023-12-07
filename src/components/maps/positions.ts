interface Positions {
  colombia: {
    [city: string]: {
      lat: number;
      lng: number;
    };
  };
}

export const positions: Positions = {
  colombia: {
    cali: {
      lat: 3.4516,
      lng: -76.532,
    },
    bogota: {
      lat: 4.710989,
      lng: -74.072092,
    },
    medellin: {
      lat: 6.2442,
      lng: -75.5819,
    },
    buenaventura: {
      lat: 3.8726,
      lng: -77.0186,
    },
    santa_marta: {
      lat: 11.2408,
      lng: -74.199,
    },
    cartagena: {
      lat: 10.391,
      lng: -75.4794,
    },
  },
};
