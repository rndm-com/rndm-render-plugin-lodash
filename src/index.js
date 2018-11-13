import { use } from '@rndm/render';
import _ from 'lodash';

const plugin = {
  key: '_',
  methods: Object.keys(_).map(type => ({type, value: _[type]}))
};

use(plugin);

export default plugin;
