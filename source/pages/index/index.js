import '../../components/base/base';
import './styles.scss';
import createMenu from '../../components/menu/menu';

var menu = createMenu(['Главная','Блог'], 'menu');
document.body.appendChild(menu);
