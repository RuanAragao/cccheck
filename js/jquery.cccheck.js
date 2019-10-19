/*!
 * jquery.cccheck v1.0.10
 * measure password strength
 * https://github.com/RuanAragao/cccheck
 * MIT License
 * by Ruan Aragão
 */
/**
 * @description Gets Credit Card Label
 * @param {number} ccNumberMask cc number
 */
function getCCLabel(ccNumberMask) {

    var creditCardsRegex = {
        visa: /^4[0-9]{5}(?:[0-9]{3})?/,
        master: /^5[1-5][0-9]{4}/,
        amex: /^3[47][0-9]{4}/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{3}/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{4}/,
        jcb: /^(?:2131|1800|35\d{3})\d{3}/,
        hiper: /^(?:38|60)\d{4}/,
        elo: /^(?:636368|636369|438935|504175|451416|636297|5067|4576|4011|506699)\d{4}/,
        cup: /^62[0-5]\d{13,16}$/,
        maestro: /^(5018|5081|5044|5020|5038|603845|6304|6759|676[1-3]|6799|6220|504834|504817|504645)[0-9]{8,15}$/
    },
        creditCards = [
            'visa',
            'master',
            'amex',
            'diners',
            'discover',
            'jcb',
            'hiper',
            'elo',
            'cup',
            'maestro'   
        ],
        regexes = [],
        ccNumber = ccNumberMask.replace(/-/gi, '');

    creditCards.map((cc) => {
        var ccRegex = {
            regex: creditCardsRegex[cc],
            label: cc
        };
        regexes.push(ccRegex);
    });

    for (var i = 0; i < regexes.length; i++) {
        if (regexes[i].regex.test(ccNumber)) return regexes[i].label;
    }
    return false;
}

(function ($) {
    $.cccheck = function cccheck(settings) {
        var config = {
            // Config local
            'inputCCNumber': '#cc-number',
            'elementShowLabel': '#show-cc-label'
        },
        nodeNumber = $(config.inputCCNumber),
        nodeLabel = $(config.elementShowLabel);

        if (settings) { 
            settings = jQuery.extend(config, settings); 
        }

        nodeNumber.keyup(function (e) {
            var cardLabel = getCCLabel(nodeNumber.val());
            nodeLabel.html('<i class="i-icon-payment i-icon-card-' + cardLabel + '"></i>');
        });

        return this;
    };
})(jQuery);
