import { nanoid } from 'nanoid';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

export type Notification = {
  id: string;
  type: 'info' | 'warning' | 'success' | 'error';
  title: string;
  message?: string;
};

type NotificationStore = {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  dismissNotification: (id: string) => void;
};

export const useNotificationStore = create<NotificationStore>(
  devtools((set) => ({
    notifications: [],
    addNotification: (notification) =>
      set((state) => ({
        notifications: [...state.notifications, { id: nanoid(), ...notification }],
      })),
    dismissNotification: (id) =>
      set((state) => ({
        notifications: state.notifications.filter((notification) => notification.id !== id),
      })),
  }))
);
