/*!
 * jquery.cccheck v1.0.0
 * measure password strength
 * https://github.com/RuanAragao/cccheck
 * MIT License
 * by Ruan Aragão
 */

 function getCCLabel(ccNumberMask) {

    var regexVisa = /^4[0-9]{5}(?:[0-9]{3})?/; // 12
    var regexMaster = /^5[1-5][0-9]{4}/; // 14
    var regexAmex = /^3[47][0-9]{4}/; // 13
    var regexDiners = /^3(?:0[0-5]|[68][0-9])[0-9]{3}/; // 11
    var regexDiscover = /^6(?:011|5[0-9]{2})[0-9]{4}/; // 12
    var regexJCB = /^(?:2131|1800|35\d{3})\d{3}/; // 11
    var regexHiper = /^(?:38|60)\d{4}/;
    var regexElo = /^(?:636368|636369|438935|504175|451416|636297|5067|4576|4011|506699)\d{4}/;

    var ccNumber = ccNumberMask.replace(/-/gi, '');

    var regexes = [
        {
            regex: regexVisa,
            label: 'visa'
        },
        {
            regex: regexMaster,
            label: 'master'
        },
        {
            regex: regexAmex,
            label: 'amex'
        },
        {
            regex: regexDiners,
            label: 'diners'
        },
        {
            regex: regexDiscover,
            label: 'discover'
        },
        {
            regex: regexJCB,
            label: 'jcb'
        },
        {
            regex: regexHiper,
            label: 'hipercard'
        },
        {
            regex: regexElo,
            label: 'elo'
        }
    ];
   
    for(var i = 0 ; i < regexes.length ; i++) {
        if (regexes[i].regex.test(ccNumber)) return regexes[i].label;
    }

    return false;

 }

;(function ( $, window, document, undefined ) {
    $.cccheck = function(settings){
        var config = {
            // Config local
            'inputCCNumber'     :   '#cc-number',
            'elementShowLabel'  :   '#show-cc-label'
        };
        if (settings){settings = jQuery.extend(config, settings);}

        // variables
        var nodeNumber  = $(config.inputCCNumber);
        var nodeLabel   = $(config.elementShowLabel);

        nodeNumber.keyup(function(e) {
            cardLabel = getCCLabel(nodeNumber.val());
            nodeLabel.html('<i class="i-icon-payment i-icon-card-' + cardLabel + '"></i>');
            // console.log(cardLabel)
        });

        return this;
    };
})( jQuery, window, document );
