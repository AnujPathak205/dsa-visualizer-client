import {Routes,Route} from 'react-router-dom'
import HomePage from '../pages/HomePage';
import TopicListPage from '../pages/TopicListPage';
import AboutPage from '../pages/AboutPage';
import PageNotFoundPage from '../pages/PageNotFoundPage';
import TopicPageDS from '../pages/TopicPageDS';
import TopicPageAlgo from '../pages/TopicPageAlgo';
import SubTopicPageAlgo from '../pages/SubTopicPageAlgo';
import VisualPage from '../pages/VisualPage';

export default function AppRoutes() {
  return (
    <>
        <Routes>
            <Route path='/'
                   element={<HomePage />}
            />

            <Route path='/topics'
                   element={<TopicListPage filter="all" />}
            /> 

            <Route path='/topics/data-structures'
                  element={<TopicListPage filter="ds" />}
            /> 

            <Route path='/topics/data-structures/:topicId'
                   element={<TopicPageDS />}
            />

            <Route path='/topics/data-structures/:topicId/visual'
                   element={<VisualPage />}
            />
            
            <Route path='/topics/algorithms'
                  element={<TopicListPage filter="al" />}
            /> 

            <Route path='/topics/algorithms/:topicId'
                  element={<TopicPageAlgo />}
            />

             <Route path='/topics/algorithms/:topicId/:subTopicId'
                  element={<SubTopicPageAlgo />}
             />

            <Route path='/about'
                   element={<AboutPage />}
            />

            <Route path='*'
                   element={<PageNotFoundPage />}
            />

        </Routes>
    </>
  )
}
