

const changeThenum = (state=0,action) => {
  if(action.type==="INCEMENT"){
    return state + action.payload
  }else if(action.type==="DECREMENT"){
    return state - action.payload
  }else{
    return state;
  }

}

export default changeThenum;