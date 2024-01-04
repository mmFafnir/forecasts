import Bookmakers from "@/modules/Widgets/Bookmakers";
import Leagues from "@/modules/Widgets/Leagues";
import Countries from "@/modules/Widgets/Countries";
import Statistics from "@/modules/Widgets/Statistics";

export const widgets = {
  left: [<Leagues key={1} />, <Countries key={2} />],
  right: [<Statistics key={3} />, <Bookmakers key={4} />],
};
