
import startAllIdeas from './js/idejos.js';
import startHomeIdea from './js/ideja.js';
import Calendar from './js/calendar.js';
import Album from './js/album.js';
import Events from './js/events.js';
import ImageUploade from './js/uploade_image';
import LightBox from './js/lightBox';
import FrontMenu from './js/frontmenu.js';
import Pagination from './js/pagination.js';



new Calendar('.calendar');
new Album('.inner');
new FrontMenu('.navMenu');
new Events('.eventsHome');
new ImageUploade("loadeGallery");

new LightBox("showGallery")



