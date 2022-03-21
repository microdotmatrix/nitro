'use strict';

import { Component, EventListener, GondelBaseComponent, startComponents } from '@gondel/core';

@Component('Example')
class Example extends GondelBaseComponent {
	start() {
		/* eslint-disable no-console */
		console.warn('Example #start(): remove or implement component');
		console.log(
			'everything ok?'.startsWith('every')
				? 'ES2015/ES6 startWith string method works'
				: 'broken ES2015/ES6 startWith string method'
		);
		console.log(
			[2, 4, 16, 256].includes(16)
				? 'ES2016/ES7 includes array method works'
				: 'broken ES2016/ES7 includes array method'
		);
		/* eslint-enable no-console */
	}

	sync() {
		/* eslint-disable no-console */
		console.warn('Example #sync(): remove or implement component');
		/* eslint-enable no-console */
	}
}

export default Example;
