let initialState = {
  soLuong: 10,
};

export const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TANG": {
      state.soLuong = state.soLuong + action.payload;
      return { ...state };
    }
    case "GIAM": {
      state.soLuong -= action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};
