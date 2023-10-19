import { ReactNode } from "react";
import EyeIcon from "../../UI/Icons/EyeIcon";

export type TLinkUser = {
  title: string;
  href: string;
  svg?: ReactNode;
};

export const links: TLinkUser[] = [
  {
    title: "Мои прогнозы",
    svg: <EyeIcon />,
    href: "/user/forecast",
  },
  {
    title: "Личные данные",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
      >
        <path
          d="M16.6673 18V16.3333C16.6673 15.4493 16.3161 14.6014 15.691 13.9763C15.0659 13.3512 14.218 13 13.334 13H6.66732C5.78326 13 4.93542 13.3512 4.31029 13.9763C3.68517 14.6014 3.33398 15.4493 3.33398 16.3333V18"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.99935 9.66667C11.8403 9.66667 13.3327 8.17428 13.3327 6.33333C13.3327 4.49238 11.8403 3 9.99935 3C8.1584 3 6.66602 4.49238 6.66602 6.33333C6.66602 8.17428 8.1584 9.66667 9.99935 9.66667Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    href: "/user",
  },
  {
    title: "Безопасность",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
      >
        <path
          d="M15.8333 9.66699H4.16667C3.24619 9.66699 2.5 10.4132 2.5 11.3337V17.167C2.5 18.0875 3.24619 18.8337 4.16667 18.8337H15.8333C16.7538 18.8337 17.5 18.0875 17.5 17.167V11.3337C17.5 10.4132 16.7538 9.66699 15.8333 9.66699Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83399 9.66631V6.33297C5.83295 5.29968 6.21589 4.30286 6.90846 3.53603C7.60104 2.7692 8.55384 2.28706 9.58191 2.18321C10.61 2.07937 11.6399 2.36123 12.4719 2.97407C13.3038 3.58691 13.8784 4.48701 14.084 5.49964"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    href: "/user/security",
  },
];
