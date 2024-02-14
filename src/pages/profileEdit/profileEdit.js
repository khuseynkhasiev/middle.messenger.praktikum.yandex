import Handlebars from 'handlebars';
import './profileEdit.scss';
import profileEdit from './profileEdit.hbs?raw';

export default (props = {}) => {
    return Handlebars.compile(profileEdit)({...props, avatarIcon: props.avatarIcon})
}
