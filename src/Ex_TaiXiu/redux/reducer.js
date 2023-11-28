let initialState = {
  mangXucXac: [
    {
      img: "./img_xuc_xac/1.png",
      giaTri: 1,
    },
    {
      img: "./img_xuc_xac/1.png",
      giaTri: 1,
    },
    {
      img: "./img_xuc_xac/1.png",
      giaTri: 1,
    },
  ],
  luaChon: "",
  soLuotThang: 0,
  soLuotChoi: 0,
};

export let xucXacReducer = (state = initialState, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};
