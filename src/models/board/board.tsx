const boardFactory = () => {
  const board = (size: number) => {
    let board = Array(size)
      .fill(0)
      .map((x) => Array(size).fill(""));
    const getBoard = () => {
      return board;
    };

    return { getBoard };
  };

  return board;
};

export default boardFactory;
