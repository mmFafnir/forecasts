import Bookmakers from "@/components/Widgets/Bookmakers";
import Leagues from "@/components/Widgets/Leagues";
import Countries from "@/components/Widgets/Countries";
import StatisticsOld from "@/components/Widgets/StatisticsOld";

export const widgets = {
  left: [<Leagues key={1} />, <Countries key={2} />],
  right: [<StatisticsOld key={3} />, <Bookmakers key={4} />],
};