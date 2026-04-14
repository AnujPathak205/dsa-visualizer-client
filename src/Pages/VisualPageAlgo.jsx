import { useParams } from "react-router-dom";
import { topics } from "../data/algorithm/topics";

import SortingVisual from "../features/algorithm/sorting/SortingVisual";
import { div } from "framer-motion/client";

export default function VisualPageAlgo() {
  const {topicId,subTopicId} = useParams();
  
    const filteredTopics = topics.filter((t) => t.id === subTopicId && t.type === topicId );
    
    if (!filteredTopics.length) {
      return <PageNotFoundPage />;
    }

  return (
    <>
        {
            topicId === "sorting" ?
                <SortingVisual /> :
                <div>
                    <h1>Working on it</h1>
                </div>
        }
    </>
  )
}
