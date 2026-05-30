import { useDispatch, useSelector } from 'react-redux';
import {
  loginUser as loginUserAction,
  logout as logoutAction,
  updateUser as updateUserAction,
} from '../store/slices/authSlice';

export function AuthProvider({ children }) {
  return children;
}

export const useAuth = () => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);

  return {
    token,
    user,
    loginUser: (data) => dispatch(loginUserAction(data)),
    logout: () => dispatch(logoutAction()),
    updateUser: (updatedUser) => dispatch(updateUserAction(updatedUser)),
  };
};
