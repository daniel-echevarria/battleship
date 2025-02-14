type Ship = {
  shipId: number;
  getHits: () => string[];
  getCoordinates: () => string[];
  isDestroyed: () => boolean;
  receiveHit: (value: string) => string | false;
};

type ShipClass = {
  name: string;
  length: number;
  isPlaced: false;
};

export { Ship, ShipClass };
