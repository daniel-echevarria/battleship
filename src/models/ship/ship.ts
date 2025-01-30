const shipFactory = () => {
  let id = 0;

  const ship = (coordinates: string[]) => {
    const shipId: number = ++id;
    let hits: string[] = [];
    const getHits = () => hits;
    const getCoordinates = () => coordinates;
    const receiveHit = (hit: string) => {
      if (coordinates.includes(hit)) {
        hits = [...hits, hit];
        return hit;
      }
    };
    const isDestroyed = () => {
      return coordinates.length === getHits().length;
    };
    return { shipId, getHits, isDestroyed, receiveHit, getCoordinates };
  };
  return ship;
};

export default shipFactory;
