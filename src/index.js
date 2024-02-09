import Handlebars from 'handlebars';
import './style.scss';
import main from './index.hbs?raw';
import login from './pages/login/login';
import signin from "./pages/signin/signin.js";
import profile from "./pages/profile/profile.js";
import profileEdit from "./pages/profileEdit/profileEdit.js";
import profileEditPassword from "./pages/profilePasswordEdit/profileEditPassword.js";
import chats from "./pages/chats/chats.js";
import notFound from "./pages/notFound/notFound.js";
import error from "./pages/error/error.js";
import avatarIcon from './image/avatar-icon.png';

const comp = Handlebars.compile(main);
const res = comp({})
document.getElementById('root').innerHTML = res;

document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        const href = event.target.getAttribute('href');
        event.preventDefault();
        if (href === '/login') {
            const loginContent = login();
            document.getElementById('root').innerHTML = loginContent;
        }
        if (href === '/signin') {
            const loginContent = signin();
            document.getElementById('root').innerHTML = loginContent;
        }
        if (href === '/profile') {
            const loginContent = profile({avatarIcon});
            document.getElementById('root').innerHTML = loginContent;
        }
        if (href === '/profile-edit') {
            const loginContent = profileEdit({avatarIcon});
            document.getElementById('root').innerHTML = loginContent;
        }
        if (href === '/profile-edit-password') {
            const loginContent = profileEditPassword({avatarIcon});
            document.getElementById('root').innerHTML = loginContent;
        }
        if (href === '/chats') {
            const loginContent = chats();
            document.getElementById('root').innerHTML = loginContent;
        }
        if (href === '/500') {
            const loginContent = error();
            document.getElementById('root').innerHTML = loginContent;
        }
        if (href === '/404') {
            const loginContent = notFound();
            document.getElementById('root').innerHTML = loginContent;
        }
    }
});