import Handlebars from 'handlebars';
import './notFound.scss';
import notFound from './notFound.hbs?raw';

export default (props = {}) => {
    return Handlebars.compile(notFound)(props)
}
