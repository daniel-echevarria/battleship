type Ship = {
  shipId: number;
  getHits: () => string[];
  isDestroyed: () => boolean;
  receiveHit: (value: string) => string | undefined;
};

type Board = {
  boardId: number;
  getBoard: () => string[][];
  getMissed: () => string[];
};

type ShipClass = {
  name: string;
  size: number;
};

export { Ship, ShipClass, Board };
