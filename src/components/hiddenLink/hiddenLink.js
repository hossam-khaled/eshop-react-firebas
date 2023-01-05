import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/slice/authSlice";

const ShowOnLoggedIn = (props) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <> {props.children} </>;
  }
  return false;
};
export const ShowOnLogOut = (props) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    return <> {props.children} </>;
  }
  return false;
};

export default ShowOnLoggedIn;
