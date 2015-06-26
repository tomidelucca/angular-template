'use strict';

angular.module('tlapp.version', [
  'tlapp.version.interpolate-filter',
  'tlapp.version.version-directive'
])

.value('version', '0.1');
