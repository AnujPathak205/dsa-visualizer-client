import { useParams } from 'react-router-dom' 

import Array from '../features/data-structure/Array';
import LinkedList from '../features/data-structure/LinkedList';
import Stack from '../features/data-structure/Stack';
import Queue from '../features/data-structure/Queue';

export default function VisualPage() {
  const {topicId} = useParams();

  const topics = ['array','linkedlist','stack','queue'];
  const visuals = [<Array />,<LinkedList />,<Stack />,<Queue />];

  const index = topics.indexOf(topicId);

  if(index === -1){
    return <PageNotFoundPage />;
  }

  return (
    <div>
      {visuals[index]}
    </div>
  )
}
