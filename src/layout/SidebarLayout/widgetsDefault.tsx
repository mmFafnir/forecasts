import Bookmakers from "@/modules/Widgets/Bookmakers";
import Leagues from "@/modules/Widgets/Leagues";
import Countries from "@/modules/Widgets/Countries";
import StatisticsOld from "@/modules/Widgets/StatisticsOld";

export const widgetsDefault = {
  left: [<Leagues key={1} />, <Countries key={2} />],
  right: [<StatisticsOld key={3} />, <Bookmakers key={4} />],
};
