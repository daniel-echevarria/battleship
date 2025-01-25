type Ship = {
  shipId: number;
  getHits: () => string[];
  isDestroyed: () => boolean;
  receiveHit: (value: string) => string | undefined;
};

export { Ship };
