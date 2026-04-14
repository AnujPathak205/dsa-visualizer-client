import { useParams } from "react-router-dom";
import { topics } from "../data/algorithm/topics";
import PageNotFoundPage from "./PageNotFoundPage";

import SortingVisual from "../features/algorithm/sorting/SortingVisual";
import WorkingOnIt from "../components/WorkingOnIt";

export default function VisualPageAlgo() {
  const {topicId} = useParams();
  
    const filteredTopics = topics.filter((t) => t.type === topicId );
    
    if (!filteredTopics.length) {
      return <PageNotFoundPage />;
    }

  return (
    <>
        {
            topicId === "sorting" ?
                <SortingVisual /> :
                <WorkingOnIt />
        }
    </>
  )
}
