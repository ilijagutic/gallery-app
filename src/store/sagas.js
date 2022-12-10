// const sagas = {};
import * as authSagas from "./auth/saga";

// export default sagas;
const sagas = {
    ...authSagas,
  };
  
  export default sagas;