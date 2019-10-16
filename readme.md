# CCCheck - Credit Card Check :credit_card: :heavy_check_mark:

[![GitHub version](https://badge.fury.io/gh/RuanAragao%2Fcccheck.svg)](https://badge.fury.io/gh/RuanAragao%2Fcccheck)
[![npm version](https://badge.fury.io/js/cccheck.svg)](https://badge.fury.io/js/cccheck)
[![GitHub issues](https://img.shields.io/github/issues/RuanAragao/cccheck)](https://github.com/RuanAragao/cccheck/issues)
[![GitHub forks](https://img.shields.io/github/forks/RuanAragao/cccheck)](https://github.com/RuanAragao/cccheck/network)
[![GitHub stars](https://img.shields.io/github/stars/RuanAragao/cccheck)](https://github.com/RuanAragao/cccheck/stargazers)
[![GitHub contributors](https://img.shields.io/badge/dynamic/json?url=https://api.github.com/repos/RuanAragao/cccheck/contributors&query=length&label=contributors)](https://github.com/RuanAragao/cccheck/graphs/contributors)
[![GitHub license](https://img.shields.io/github/license/RuanAragao/cccheck)](https://github.com/RuanAragao/cccheck/blob/master/LICENSE)

## To Use:
- Add CSS link: `cccheck/dist/css/cccheck.css`.  
- Add JavaScript link: `cccheck/dist/js/jquery.cccheck.js`.
- You need to have jQuery in your project, of course.

## To Configure:
```java
$(document).ready(function() {
  $.cccheck({
    // Config local
    'input_cc_number'     :   '#cc-number',
    'element_show_label'  :   '#show-cc-label'
  });
})
```

## To Contribute:
1. Fork this repository.
2. `git clone github.com/[you]/cccheck.git`
3. `cd cccheck`
4. `yarn`
5. `yarn watch` (for development) or `yarn build` (for production)

### Files for plugin 
- The *scripts* into *./js*
- The *styles* SCSS into *./scss*
- *No* edit *./dist*

### Files non-plugin
For styles and scripts exclusive of the example page, add directory in *index.html*.

## Question / Bug / Idea
[Open an issue](https://github.com/RuanAragao/cccheck/issues)
