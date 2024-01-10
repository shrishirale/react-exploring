const initialState = {
  cakecount: 10,
};

const cakereducer = (preState = initialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...preState,
        cakecount: preState.cakecount - 1,
      };
    default:
      return preState;
  }
};

export default cakereducer;
