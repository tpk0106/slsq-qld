import './index.css';

import { Route, Routes } from 'react-router-dom';

import Header from './navigation/header.component';
import AboutUs from './about-us/about-us.component';
import ContactUs from './contact-us/contact-us.component';
import Home from './home/home.component';
import NoticeBoard from './notice-board/notice-board.component';
import CommitteeMembers from './committee-members/committee-members.component';
import PastEvents from './past-events/past-events.component';
import UpcomingEvents from './upcoming-events/upcoming-events.component';
import Publications from './publications/publications.component';
import PhotoGallery from './photo-gallery/photo-gallery.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="notice-board" element={<NoticeBoard />} />
        <Route path="committee" element={<CommitteeMembers />} />
        <Route path="past-events" element={<PastEvents />} />
        <Route path="upcoming-events" element={<UpcomingEvents />} />
        <Route path="publications" element={<Publications />} />
        <Route path="photo-gallery" element={<PhotoGallery />} />
      </Route>
    </Routes>
  );
}

export default App;
