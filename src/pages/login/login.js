import Handlebars from 'handlebars';
import './login.scss';
import login from './login.hbs?raw';

export default (props = {}) => {
    return Handlebars.compile(login)(props)
}
