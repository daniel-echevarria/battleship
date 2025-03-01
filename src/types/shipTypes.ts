type Ship = {
  shipId: number;
  getHits: () => string[];
  getCoordinates: () => string[];
  isDestroyed: () => boolean;
  receiveHit: (value: string) => string | false;
};

type ShipClass = {
  id: number;
  name: string;
  length: number;
  isPlaced: boolean;
};

export { Ship, ShipClass };
