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

const comp = Handlebars.compile(main);
const res = comp({})
document.getElementById('root').innerHTML = res;

// Обработчик клика на все элементы <a>
document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        const href = event.target.getAttribute('href');
        if (href === '/login') {
            event.preventDefault(); // Предотвращаем стандартное действие перехода по ссылке
            const loginContent = login();
            document.getElementById('root').innerHTML = loginContent;
        }
        if (href === '/signin') {
            event.preventDefault(); // Предотвращаем стандартное действие перехода по ссылке
            const loginContent = signin();
            document.getElementById('root').innerHTML = loginContent;
        }
        if (href === '/profile') {
            event.preventDefault(); // Предотвращаем стандартное действие перехода по ссылке
            const loginContent = profile();
            document.getElementById('root').innerHTML = loginContent;
        }
        if (href === '/profile-edit') {
            event.preventDefault(); // Предотвращаем стандартное действие перехода по ссылке
            const loginContent = profileEdit();
            document.getElementById('root').innerHTML = loginContent;
        }
        if (href === '/profile-edit-password') {
            event.preventDefault(); // Предотвращаем стандартное действие перехода по ссылке
            const loginContent = profileEditPassword();
            document.getElementById('root').innerHTML = loginContent;
        }
        if (href === '/chats') {
            event.preventDefault(); // Предотвращаем стандартное действие перехода по ссылке
            const loginContent = chats();
            document.getElementById('root').innerHTML = loginContent;
        }
        if (href === '/500') {
            event.preventDefault(); // Предотвращаем стандартное действие перехода по ссылке
            const loginContent = error();
            document.getElementById('root').innerHTML = loginContent;
        }
        if (href === '/404') {
            event.preventDefault(); // Предотвращаем стандартное действие перехода по ссылке
            const loginContent = notFound();
            document.getElementById('root').innerHTML = loginContent;
        }
    }
});