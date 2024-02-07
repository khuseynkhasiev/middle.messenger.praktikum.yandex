import Handlebars from 'handlebars';
import './error.scss';
import error from './error.hbs?raw';

export default (props = {}) => {
    return Handlebars.compile(error)(props)
}