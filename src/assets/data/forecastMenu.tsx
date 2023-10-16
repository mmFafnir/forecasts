import { TPointsItem } from "@/components/UI/PointsMenu";

export const forecastMenuItems: TPointsItem[] = [
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M7 11.6665H12.25"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.625 2.04164C9.85706 1.80957 10.1718 1.6792 10.5 1.6792C10.6625 1.6792 10.8234 1.71121 10.9735 1.77339C11.1237 1.83558 11.2601 1.92673 11.375 2.04164C11.4899 2.15654 11.5811 2.29296 11.6432 2.44309C11.7054 2.59322 11.7374 2.75413 11.7374 2.91664C11.7374 3.07914 11.7054 3.24005 11.6432 3.39018C11.5811 3.54032 11.4899 3.67673 11.375 3.79164L4.08333 11.0833L1.75 11.6666L2.33333 9.3333L9.625 2.04164Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "Редактировать",
    onclick: () => {},
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M1.75 3.5H2.91667H12.25"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.0837 3.49984V11.6665C11.0837 11.9759 10.9607 12.2727 10.742 12.4915C10.5232 12.7103 10.2264 12.8332 9.91699 12.8332H4.08366C3.77424 12.8332 3.47749 12.7103 3.2587 12.4915C3.03991 12.2727 2.91699 11.9759 2.91699 11.6665V3.49984M4.66699 3.49984V2.33317C4.66699 2.02375 4.78991 1.72701 5.0087 1.50821C5.22749 1.28942 5.52424 1.1665 5.83366 1.1665H8.16699C8.47641 1.1665 8.77316 1.28942 8.99195 1.50821C9.21074 1.72701 9.33366 2.02375 9.33366 2.33317V3.49984"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "Удалить",
    onclick: () => {},
  },
];
