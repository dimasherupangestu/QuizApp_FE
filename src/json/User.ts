export interface UserGame {
  id: number;
  avatar: string;
  name: string;
}
[];

export const UserGame: UserGame[] = [
  {
    id: 1,
    avatar: require("../../assets/avatar/avatar1.jpg"),
    name: "Dimasheru",
  },

  {
    id: 2,
    avatar: require("../../assets/avatar/avatar2.jpg"),
    name: "Navila_Ayu",
  },

  {
    id: 3,
    avatar: require("../../assets/avatar/avatar3.jpg"),
    name: "Molusca",
  },

  {
    id: 4,
    avatar: require("../../assets/avatar/avatar4.jpg"),
    name: "SahaAing",
  },

  {
    id: 5,
    avatar: require("../../assets/avatar/avatar5.jpg"),
    name: "Sandika",
  },
];