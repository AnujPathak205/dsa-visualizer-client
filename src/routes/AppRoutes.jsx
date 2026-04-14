import {Routes,Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage';
import TopicListPage from '../Pages/TopicListPage';
import AboutPage from '../Pages/AboutPage';
import PageNotFoundPage from '../Pages/PageNotFoundPage';
import TopicPageDS from '../Pages/TopicPageDS';
import TopicPageAlgo from '../Pages/TopicPageAlgo';
import SubTopicPageAlgo from '../Pages/SubTopicPageAlgo';
import VisualPageDS from '../Pages/VisualPageDS';
import LoginPage from '../Pages/LoginPage';
import SignupPage from '../Pages/SignupPage';
import VisualPageAlgo from '../Pages/VisualPageAlgo';

export default function AppRoutes() {
  return (
    <>
        <Routes>
            <Route path='/'
                   element={<HomePage />}
            />

            <Route path='/login'
                   element={<LoginPage />}
            />

            <Route path='/register'
                   element={<SignupPage />}
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
                   element={<VisualPageDS />}
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

             <Route path='/topics/algorithms/:topicId/:subTopicId/visual'
                  element={<VisualPageAlgo />}
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
