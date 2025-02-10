const shipFactory = () => {
  let id = 0;

  const ship = (coordinates: string[]) => {
    const shipId: number = ++id;
    let hits: string[] = [];
    const getHits = () => hits;
    const getCoordinates = () => coordinates;
    const receiveHit = (hit: string) => {
      if (coordinates.includes(hit)) {
        hits.push(hit);
        return hit;
      }
      return false;
    };
    const isDestroyed = () => {
      return coordinates.length === hits.length;
    };
    return { shipId, getHits, isDestroyed, receiveHit, getCoordinates };
  };
  return ship;
};

export default shipFactory;
