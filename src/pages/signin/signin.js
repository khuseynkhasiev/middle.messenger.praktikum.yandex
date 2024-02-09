import Handlebars from 'handlebars';
import './signin.scss';
import signin from './signin.hbs?raw';

export default (props = {}) => {
    return Handlebars.compile(signin)(props)
}
