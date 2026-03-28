import React from 'react'
import {linkedListData} from '../data/LinkedList';
import TopicContent from '../components/TopicContent'

export default function LinkedList() {
  return (
    <div>
      <TopicContent data={linkedListData} />
    </div>
  )
}