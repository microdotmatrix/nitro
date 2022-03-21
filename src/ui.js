/* global module */

import { hot } from '@gondel/plugin-hot';

import './scss/toolkit/_tools.scss';

import './scss/_variables.scss';
import './scss/core/_functions.scss';
import './scss/core/_mixins.scss';
import './scss/core/_flex-grid.scss';

import './scss/config/_reset.scss';
import './scss/config/_normalize.scss';

import './scss/utilities/_layout.scss';
import './scss/utilities/_transitions.scss';
import './scss/utilities/_animations.scss';

import './scss/views/_global.scss';

import './scss/components/_typography.scss';
import './scss/components/_header.scss';
import './scss/components/_nav.scss';
// import './scss/components/_media.scss';
// import './scss/components/_buttons.scss';
// import './scss/components/_hero.scss';
// import './scss/components/_slider.scss';
// import './scss/components/_footer.scss';

import './scss/toolkit/luge/_luge.scss';

hot(module);

// custom code
console.log("I'm from the entry point ui"); // eslint-disable-line
