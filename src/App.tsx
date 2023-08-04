/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// import { onAuthStateChanged } from "firebase/auth";
import MainLayout from "./layout/MainLayout"
// import { setLoading, setUser } from "./redux/features/user/userSlice";
// import { useAppDispatch } from "./redux/hooks";
// import { auth } from "./utils/firebase"
// import {useEffect} from 'react'

function App() {

  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(setLoading(true));

  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       dispatch(setUser(user.email!));
  //       dispatch(setLoading(false));
  //     } else {
  //       dispatch(setLoading(false));
  //     }
  //   });
  // }, [dispatch]);

  return (
    <div className="overflow-y-hidden overflow-x-hidden">
      <MainLayout></MainLayout>
    </div>
  )
}

export default App
