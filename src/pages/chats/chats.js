import Handlebars from 'handlebars';
import './chats.scss';
import chats from './chats.hbs?raw';

export default (props = {}) => {
    return Handlebars.compile(chats)(props)
}