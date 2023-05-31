import { devtools } from 'zustand/middleware';
import { create } from 'zustand';
import Cookies from 'js-cookie';

import api from '@/api';

interface UserStore {
  user: User | null;
  isLoggedIn: boolean;
  setUser: (user: User) => void;
  checkWhoIAm: () => Promise<void>;
  logout: () => void;
}

const useUserStore = create<UserStore>()(
  devtools(
    (set) => ({
      user: null,
      isLoggedIn: false,
      checkWhoIAm: async () => {
        try {
          const { data } = await api.get('/user/me');

          set(() => ({ user: data, isLoggedIn: true }), false, {
            type: 'check-who-i-am',
          });
        } catch (error) {
          console.log('error :>> ', error);
        }
      },
      setUser: (user) => {
        set(() => ({ user }), false, { type: 'set-user' });

        set(() => ({ isLoggedIn: true }), false, { type: 'logged-in' });

        Cookies.set('token', user.token);
      },
      logout: () => {
        set(() => ({ user: null, isLoggedIn: false }), false, {
          type: 'logout',
        });
      },
    }),
    { name: 'user-store', store: 'app/user' }
  )
);

export default useUserStore;
