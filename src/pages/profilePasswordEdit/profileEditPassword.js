import Handlebars from 'handlebars';
import './profileEditPassword.scss';
import profileEditPassword from './profileEditPassword.hbs?raw';

export default (props = {}) => {
    return Handlebars.compile(profileEditPassword)(props)
}