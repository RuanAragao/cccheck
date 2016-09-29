/*!
 * jquery.cccheck v1.0.0
 * measure password strength
 * https://github.com/RuanAragao/cccheck
 * MIT License
 * by Ruan Aragão
 */

 function getCCLabel(cc_number_mask) {

    var regexVisa = /^4[0-9]{5}(?:[0-9]{3})?/; // 12
    var regexMaster = /^5[1-5][0-9]{4}/; // 14
    var regexAmex = /^3[47][0-9]{4}/; // 13
    var regexDiners = /^3(?:0[0-5]|[68][0-9])[0-9]{3}/; // 11
    var regexDiscover = /^6(?:011|5[0-9]{2})[0-9]{4}/; // 12
    var regexJCB = /^(?:2131|1800|35\d{3})\d{3}/; // 11
    var regexHiper = /^(?:38|60)\d{4}/;
    var regexElo = /^(?:636368|636369|438935|504175|451416|636297|5067|4576|4011|506699)\d{4}/;

    cc_number = cc_number_mask.replace(/-/gi, '');

    if(regexVisa.test(cc_number)) {
        return 'visa';
    }
    if(regexMaster.test(cc_number)) {
        return 'master';
    }
    if(regexAmex.test(cc_number)) {
        return 'amex';
    }
    if(regexDiners.test(cc_number)) {
        return 'diners';
    }
    if(regexDiscover.test(cc_number)) {
        return 'discover';
    }
    if(regexJCB.test(cc_number)) {
        return 'jcb';
    }
    if(regexHiper.test(cc_number)) {
        return 'hipercard';
    }
    if(regexElo.test(cc_number)) {
        return 'elo';
    }

    return false;

 }

;(function ( $, window, document, undefined ) {
    $.cccheck = function(settings){
        var config = {
            // Config local
            'input_cc_number'     :   '#cc-number',
            'element_show_label'  :   '#show-cc-label'
        };
        if (settings){settings = jQuery.extend(config, settings);}

        // variables
        var nodeNumber  = $(config.input_cc_number);
        var nodeLabel   = $(config.element_show_label);

        nodeNumber.keyup(function(e) {
            card_label = getCCLabel(nodeNumber.val());
            nodeLabel.html('<i class="i-icon-payment i-icon-card-' + card_label + '"></i>');
            //console.log(card_label);
        });

        return this;
    };
})( jQuery, window, document );
