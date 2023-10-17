import Bookmakers from "@/components/Widgets/Bookmakers";
import Statistics from "@/components/Widgets/Statistics";
import Leagues from "@/components/Widgets/Leagues";
import Countries from "@/components/Widgets/Countries";

export const widgetsDefault = {
  left: [<Leagues key={1} />, <Countries key={2} />],
  right: [<Statistics key={3} />, <Bookmakers key={4} />],
};
