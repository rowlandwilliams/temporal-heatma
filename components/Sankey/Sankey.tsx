import { NodeObj, RawFlow } from "../../types/types";
import { sankeyDataRaw } from "./data/sankeyDataRaw";
import { getLinksFromRawData, getNodesFromRawData } from "./utils/utils";

const Sankey = () => {
  const nodes = getNodesFromRawData(sankeyDataRaw);
  const links = getLinksFromRawData(nodes, sankeyDataRaw);
  console.log(links);
  return (
    <div className="bg-green-200">
      <svg width="200px" height="200px"></svg>
    </div>
  );
};

export default Sankey;
