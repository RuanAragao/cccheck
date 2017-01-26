jQuery plugin cccheck (Credit Card Check)
========================================

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
