import { NextPage } from "next";
import React from "react";
import styles from "./match.module.scss";
import BreadCrumbs from "@/components/UI/BreadСrumbs";
import TextAnalysis from "@/components/TextAnalysis";
import EventList from "@/components/EventList";
import EventSlider from "@/components/EventSlider";
import TimeIcon from "@/components/UI/Icons/TimeIcon";
import SidebarLayout from "@/layout/SidebarLayout";
import { links } from "@/assets/data/links";
import { headers } from "next/headers";
import { getOneMatch } from "@/api/matches/get/getOneMathc";
import { redirect } from "next/navigation";
import Image from "@/components/UI/Custom/Image";
import { getImageSrc } from "@/utils/getImageSrc";

interface IProps {
  params: {
    slug: string;
    matchId: string;
  };
}

const MatchPage: NextPage<IProps> = async ({ params }) => {
  const headersList = headers();

  const data = await getOneMatch({
    command: params.matchId,
    sport: params.slug,
  });

  if (!data) return redirect("/");

  const title = ` Прогноз на матч: ${data.home_team.team_name} - ${data.away_team.team_name}`;
  const namePrevLink = links.find(
    (link) => link.href === (params.slug == "soccer" ? "/" : "/" + params.slug)
  )!.name;
  const hrefPrevLink = params.slug === "soccer" ? "/" : `/${params.slug}`;

  const bredCrumbs = [
    {
      name: namePrevLink,
      href: hrefPrevLink,
    },

    {
      name: title,
      href: `/${params.slug}/${params.matchId}`,
    },
  ];

  return (
    <>
      <div className={styles.match}>
        <div className={styles.wrapper}>
          <h1>{title}</h1>
          <BreadCrumbs crumbs={bredCrumbs} />
          <SidebarLayout>
            <div className={styles.body}>
              <div className={styles.content}>
                <div className={styles.flex}>
                  <div className={styles.team}>
                    <Image
                      src={getImageSrc(data.home_team.team_id + ".png")}
                      alt={"Манчестер Юнайтед (Manchester United)"}
                      height={92}
                      width={100}
                    />
                    <h2>{data.home_team.team_name}</h2>
                  </div>
                  <div className={styles.date}>
                    <p>{data.real_date}</p>
                    <p>
                      <span>{data.real_time}</span>
                      {/* <span>UTC+3</span> */}
                    </p>
                    <p className={styles.left}>
                      <TimeIcon />
                      {/* TODO: Посчитать разницу */}
                      <span>Осталось: 5 часов</span>
                    </p>
                  </div>
                  <div className={styles.team}>
                    <Image
                      src={getImageSrc(data.away_team.team_id + ".png")}
                      alt={data.away_team.team_name}
                      height={92}
                      width={100}
                    />
                    <h2>{data.away_team.team_name}</h2>
                  </div>
                </div>
                <button className="btn btn--pur ">
                  <span>Сделать ставку</span>
                </button>
              </div>
              <div className={styles.text}>
                {data.game_analize && <TextAnalysis text={data.game_analize} />}
              </div>
              <EventList />

              <div className="desc-text desc-text--center">
                <p>
                  Ищете точный бесплатный прогноз на футбольный матч Галатасарай
                  (Galatasaray) - Копенгаген (København), который состоится 20
                  сентября 2023 года? На данной странице вы точно найдете самый
                  актуальный бесплатный прогноз на футбольный матч Галатасарай
                  (Galatasaray) - Копенгаген (København). Ставка на футбольный
                  матч - это всегда риск, но с нашим бесплатным прогнозом от ИИ
                  на матч Галатасарай (Galatasaray) и Копенгаген (København)
                  ваши шансы на успех значительно увеличиваются. Бесплатный
                  прогноз ставки на футбольный матч между командами Галатасарай
                  (Galatasaray) и Копенгаген (København), который пройдет 20
                  сентября 2023 года. Футбол прогноз. Бесплатный прогноз на
                  матчи.
                </p>
              </div>
            </div>
          </SidebarLayout>
        </div>
      </div>
      <EventSlider />
    </>
  );
};

export default MatchPage;
