/**
 * Created by dan on 6/23/17.
 */

var byProperty = [];

$("input[name=fl-colour]").on("change", function () {
    if (this.checked) byProperty.push("[data-category~='" + $(this).attr("value") + "']");
    else removeA(byProperty, "[data-category~='" + $(this).attr("value") + "']");
});


$("input").on("change", function () {
    var str = "Include items \n";
    var selector = '', cselector = '', nselector = '';

    var $lis = $('.theses > div'),
        $checked = $('input:checked');

    if ($checked.length) {

        if (byProperty.length) {
            if (str == "Include items \n") {
                str += "    " + "with (" + byProperty.join(',') + ")\n";
                $($('input[name=fl-colour]:checked')).each(function (index, byProperty) {
                    if (selector === '') {
                        selector += "[data-category~='" + byProperty.id + "']";
                    } else {
                        selector += ",[data-category~='" + byProperty.id + "']";
                    }
                });
            } else {
                str += "    AND " + "with (" + byProperty.join(' OR ') + ")\n";
                $($('input[name=fl-size]:checked')).each(function (index, byProperty) {
                    selector += "[data-category~='" + byProperty.id + "']";
                });
            }
        }

        $lis.hide();
        console.log(selector);
        console.log(cselector);
        console.log(nselector);

        if (cselector === '' && nselector === '') {
            $('.theses > div').filter(selector).show();
        } else if (cselector === '') {
            $('.theses > div').filter(selector).filter(nselector).show();
        } else if (nselector === '') {
            $('.theses > div').filter(selector).filter(cselector).show();
        } else {
            $('.theses > div').filter(selector).filter(cselector).filter(nselector).show();
        }

    } else {
        $lis.show();
    }

    $("#result").html(str);

});

function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax = arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}
