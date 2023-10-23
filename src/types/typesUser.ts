export type TUser = {
  name: string;
  surname: string;
  gender: string;
  email: string;
  date_of_birth: string;
  nickname: string;
  avatar: string;
};

export type TUserRegister = {
  name: string;
  surname: string;
  gender: string;
  email: string;
  nickname: string;
  date_of_birth: string;
  password: string;
  password_confirmation: string;
};
