jQuery plugin cccheck (Credit Card Check)
========================================
[![npm version](https://badge.fury.io/js/cccheck.svg)](https://badge.fury.io/js/cccheck)
[![GitHub issues](https://img.shields.io/github/issues/RuanAragao/cccheck)](https://github.com/RuanAragao/cccheck/issues)
[![GitHub forks](https://img.shields.io/github/forks/RuanAragao/cccheck)](https://github.com/RuanAragao/cccheck/network)
[![GitHub stars](https://img.shields.io/github/stars/RuanAragao/cccheck)](https://github.com/RuanAragao/cccheck/stargazers)
[![GitHub contributors](https://img.shields.io/badge/dynamic/json?url=https://api.github.com/repos/RuanAragao/cccheck/contributors&query=length&label=contributors)](https://github.com/RuanAragao/cccheck/graphs/contributors)
[![GitHub license](https://img.shields.io/github/license/RuanAragao/cccheck)](https://github.com/RuanAragao/cccheck/blob/master/LICENSE)

## to usage:
add link css `cccheck/dist/css/cccheck.css`
add link script `cccheck/dist/js/jquery.cccheck.js`

You need to have jquery in your project, of course.

## to configure:
```javascript
$(document).ready(function() {
  $.cccheck({
    // Config local
    'input_cc_number'     :   '#cc-number',
    'element_show_label'  :   '#show-cc-label'
  });
})
```

## to contribute:
1. fork this repository
2. `git clone git@github.com:[you]/cccheck.git`
3. `cd cccheck`
4. `npm install`
5. `gulp` or `gulp watch`
6. tuts tuts tuts
