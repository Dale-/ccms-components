/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2016-01-19
 */
import angular from 'angular';

// 引入迁移adaptor
import adaptor from './common/utils/adaptor';

import LogicComponents from './common/utils';
import UIComponents from './components';

export default angular
	.module('ccms.components', [UIComponents, LogicComponents, adaptor])
	.name;
