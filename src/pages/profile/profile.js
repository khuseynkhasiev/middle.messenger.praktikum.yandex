import Handlebars from 'handlebars';
import './profile.scss';
import profile from './profile.hbs?raw';

export default (props = {}) => {
    return Handlebars.compile(profile)({...props, avatarIcon: props.avatarIcon})
}
