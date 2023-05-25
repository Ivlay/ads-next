import { create } from 'zustand';
import Cookies from 'js-cookie';

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

const useUserStore = create<UserStore>()((set) => ({
  user: null,
  setUser: (user) => {
    set(() => ({ user }));

    Cookies.set('token', user.token);
  },
  logout: () => {
    set(() => ({ user: null }));
  },
}));

export default useUserStore;
