import { useParams, Link } from "react-router-dom";
import { topics } from "../data/algorithm/topics";
import PageNotFoundPage from "./PageNotFoundPage";
import TopicContentAlgo from "../components/TopicContentAlgo";

import {bubbleSortData} from "../data/algorithm/sorting/bubbleSortData"
import { selectionSortData } from "../data/algorithm/sorting/selectionSortData";
import {insertionSortData} from "../data/algorithm/sorting/insertionSortData"

export default function SubTopicPageAlgo() {
  const {topicId,subTopicId} = useParams();
  const data = [
    null,
    null,
    bubbleSortData,
    selectionSortData,
    insertionSortData,
    null,
    null,
    null,
    null
  ]

  const filteredTopics = topics.filter((t) => t.id === subTopicId && t.type === topicId );
  
  if (!filteredTopics.length) {
    return <PageNotFoundPage />;
  }

  const index = topics.indexOf(filteredTopics[0]);

  return (
    <>
       <TopicContentAlgo data={data[index]} algoName={topicId} visualPath={subTopicId} />
    </>
  )
}
