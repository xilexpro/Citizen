jQuery(document).ready(function ($) {
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
            //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
            offset_opacity = 1200,
            //duration of the top scrolling animation (in ms)
            scroll_top_duration = 700,
            //grab the "back to top" link
            $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration
                );
    });

    var pageurl = window.location.href;
    var index1 = pageurl.indexOf("price");
    if (index1 > -1) {
        var fromEnd = pageurl.indexOf("-", index1);
        var fromval = pageurl.substring(index1 + 6, fromEnd);

        var isparams = pageurl.indexOf("&", index1)
        if (isparams > -1) {
            var toval = pageurl.substring(fromEnd + 1, isparams - 1);
        } else {
            var toval = pageurl.substring(fromEnd + 1);
        }
    } else {
        var fromval = 0;
        var toval = 20000;
    }
    $("#price").ionRangeSlider({
        type: "double",
        min: 0,
        max: 20000,
        from: fromval,
        to: toval,
        step: 100,
        prettify_separator: ",",
        onFinish: function (data) {
            var to = data.to;
            var from = data.from;
            var currenturl = window.location.href;
            currenturl = currenturl.replace('#', '');
            var pagenumber = $('#pagenumber').attr('pagenumber');
            if (pagenumber > 1) {
                currenturl = currenturl.replace('/' + pagenumber, '');
            }
            if (currenturl.indexOf("?") > -1) {
                var n = currenturl.indexOf("price");
                if (n > -1) {
                    var end = currenturl.indexOf("&", n)
                    if (end > -1) {
                        var priceparam = currenturl.substring(n, end);
                        alert(priceparam);
                    } else {
                        var priceparam = currenturl.substring(n);
                    }
                    var newurl = currenturl.replace(priceparam, "price=" + from + "-" + to);
                } else {
                    var newurl = currenturl + "&price=" + from + "-" + to;
                }
            } else {
                var newurl = currenturl + "?price=" + from + "-" + to;
            }
            window.location.href = newurl;
        }
    });
    var filterfiels = {'style': '.style',
        'sorting': '.sorting',
        'case-material': '.case-material',
        'bracelet': '.bracelet',
        'case-size': '.case-size',
        'water-resistance': '.water-resistance',
        'glass': '.glass',
        'clasp': '.clasp',
        'movement': '.movement',
        'power-reserve': '.power-reserve',
        'decorative-jewels': '.decorative-jewels',
        'gender': '.gender',
        'trending-models': '.trending-models',
        'price': '.price1',
        'functions': '.functions',
    };
    $.each(filterfiels, function (key, value) {
        $(value).change(function () {
            var currenturl = window.location.href;
            currenturl = currenturl.replace('#', '');
            var pagenumber = $('#pagenumber').attr('pagenumber');
            if (pagenumber > 1) {
                currenturl = currenturl.replace('/' + pagenumber, '');
            }
            var newstyle = $(value + ' option:selected').val();
            if (currenturl.indexOf("?") > -1) {
                var m = currenturl.indexOf(key);
                if (m > -1) {
                    var end = currenturl.indexOf("&", m)
                    if (end > -1) {
                        var priceparam = currenturl.substring(m, end);
                    } else {
                        var priceparam = currenturl.substring(m);
                    }
                    var newurl = currenturl.replace(priceparam, key + "=" + newstyle);
                } else {
                    var newurl = currenturl + "&" + key + "=" + newstyle;
                }
            } else {
                var newurl = currenturl + "?" + key + "=" + newstyle;
            }
            window.location.href = newurl;
        });
    });

    var searchfiels = {'gender': '#gender',
        'movement': '#movement',
        'case-material': '#case-material',
        'bracelet': '#bracelet',
        'style': '#style',
        'water-resistance': '#water-resistance',
    };

    $.each(searchfiels, function (key, value) {
        $(value).change(function () {
            var currenturl = window.location.href;
            currenturl = currenturl.replace('#', '');
            var pagenumber = $('#pagenumber').attr('pagenumber');
            if (pagenumber > 1) {
                currenturl = currenturl.replace('/' + pagenumber, '');
            }
            if (currenturl.indexOf("search=true") == -1) {
                var paramstart = currenturl.indexOf("/");
                currenturl = currenturl.substring(0, paramstart);
                currenturl = currenturl + "/select-watch?search=true";
            }
            var newstyle = $(value + ' option:selected').val();
            var m = currenturl.indexOf(key);
            if (m > -1) {
                var end = currenturl.indexOf("&", m);
                if (end > -1) {
                    var priceparam = currenturl.substring(m, end - 1);
                } else {
                    var priceparam = currenturl.substring(m);
                }
                var newurl = currenturl.replace(priceparam, key + "=" + newstyle);
            } else {
                var newurl = currenturl + "&" + key + "=" + newstyle;
            }

            window.location.href = newurl;
        });
    });


    $("#frmaddtocart").submit(function (e) {
        var formURL = $(this).attr("action");
        var model = $('.model_Code').attr('value');
        var postData = $(this).serialize() + '&model_Code=' + model;
        $.ajax({
            url: formURL,
            type: "POST",
            data: postData,
            success: function ()
            {
                currenturl = window.location.href;
                if (currenturl.indexOf("addtocart=true") > -1)
                {
                    window.location.href = currenturl;
                } else {
                    window.location.href = currenturl + "?addtocart=true";

                }
            }
        });
        e.preventDefault(); //STOP default action
    });



    $(".frmremovefromcart").submit(function (e) {
        var formURL = $(this).attr("action");
        var model = $(this).children('.model_Code').val();
        var postData = $(this).serialize() + '&model_Code=' + model;
        $.ajax({
            url: formURL,
            type: "POST",
            data: postData,
            success: function ()
            {
                window.location.reload();
            }
        });
        e.preventDefault(); //STOP default action
    });



    /*  var formURL = $(this).attr("url");
     var postData = $(this).serialize();
     $.ajax({
     url: formURL,
     type: "GET",
     data: postData,
     success: function (data)
     {
     var obj = jQuery.parseJSON(data);
     $('#area').empty();
     $('#area').append('<option selected="true" disabled="disabled">Select Area</option>');
     $('#area').append('<option value="">None</option>');
     $('#nsArea').empty();
     $('#nsArea').append('<option selected="true" disabled="disabled">Select Area</option>');
     $('#nsArea').append('<option value="">None</option>');
     $('#aramexAddr').empty();
     $('#aramexAddr').append('<option selected="true" disabled="disabled">Select Area</option>');
     $('#aramexAddr').append('<option value="">None</option>');
     $.each(obj, function (key, value) {
     if (value.is_serviceable == "1") {
     $('#area').append('<option value="' + value.area_id + '">' + value.area_name + '</option>');
     } else {
     $('#nsArea').append('<option value="' + value.area_id + '">' + value.area_name + '</option>');
     }
     });
     }
     });
     });
     
     $('#nsArea').change(function () {
     var formURL = $(this).attr("url");
     var postData = $(this).serialize();
     $.ajax({
     url: formURL,
     type: "GET",
     data: postData,
     success: function (data)
     {
     var obj = jQuery.parseJSON(data);
     $('#aramexAddr').empty();
     $('#aramexAddr').append('<option selected="true" disabled="disabled">Select Area</option>');
     $('#aramexAddr').append('<option value="">None</option>');
     $.each(obj, function (key, value) {
     $('#aramexAddr').append('<option value="' + value.location_id + '">' + value.location_name + '</option>');
     });
     }
     });
     });
     
     $('.scity').change(function () {
     var formURL = $(this).attr("url");
     var postData = $(this).serialize();
     $.ajax({
     url: formURL,
     type: "GET",
     data: postData,
     success: function (data)
     {
     var obj = jQuery.parseJSON(data);
     $('#area2').empty();
     $('#area2').append('<option selected="true" disabled="disabled">Select Area</option>');
     $('#area2').append('<option value="">None</option>');
     $('#nsArea2').empty();
     $('#nsArea2').append('<option selected="true" disabled="disabled">Select Area</option>');
     $('#nsArea2').append('<option value="">None</option>');
     $('#aramexAddr2').empty();
     $('#aramexAddr2').append('<option selected="true" disabled="disabled">Select Area</option>');
     $('#nsArea2').append('<option value="">None</option>');
     $.each(obj, function (key, value) {
     if (value.is_serviceable == "1") {
     $('#area2').append('<option value="' + value.area_id + '">' + value.area_name + '</option>');
     } else {
     $('#nsArea2').append('<option value="' + value.area_id + '">' + value.area_name + '</option>');
     }
     });
     }
     });
     }); 
     
     $('#nsArea2').change(function () {
     var formURL = $(this).attr("url");
     var postData = $(this).serialize();
     $.ajax({
     url: formURL,
     type: "GET",
     data: postData,
     success: function (data)
     {
     var obj = jQuery.parseJSON(data);
     $('#aramexAddr2').empty();
     $('#aramexAddr2').append('<option selected="true" disabled="disabled">Select Area</option>');
     $('#aramexAddr2').append('<option value="">None</option>');
     
     $.each(obj, function (key, value) {
     $('#aramexAddr2').append('<option value="' + value.location_id + '">' + value.location_name + '</option>');
     });
     }
     });
     }); */

    $(".additional_functions").on('click', function () {
        $(".additional_functions .mutliSelect").slideDown('fast');
    });


    $('.chkfunctions').on('click', function () {
        var currenturl = window.location.href;
        currenturl = currenturl.replace('#', '');
        var pagenumber = $('#pagenumber').attr('pagenumber');
        if (pagenumber > 1) {
            currenturl = currenturl.replace('/' + pagenumber, '');
        }
        var newfunc = $(this).val();
        if (currenturl.indexOf("?") > -1) {
            var m = currenturl.indexOf('functions');
            if (m > -1) {
                var end = currenturl.indexOf("&", m);
                if (end > -1) {
                    var funcparam = currenturl.substring(m, end);
                } else {
                    var funcparam = currenturl.substring(m);
                }
                if ($(this).attr('checked'))
                {
                    var newurl = currenturl.replace(funcparam, funcparam + ',' + newfunc);
                } else {
                    var funcvalues = funcparam.replace('functions=', '');
                    var funcarray = funcvalues.split(',');
                    var i = funcarray.indexOf(newfunc);
                    if (i != -1) {
                        funcarray.splice(i, 1);
                        var n = $(funcarray).length;
                        if (n > 0) {
                            var newfuncvalues = funcarray.join(', ');
                            var newurl = currenturl.replace(funcparam, 'functions=' + newfuncvalues);
                        } else {
                            if ((currenturl.indexOf("&functions=")) > -1) {
                                var newurl = currenturl.replace('&' + funcparam, '');
                            } else if ((currenturl.indexOf("?" + funcparam + "&")) > -1) {
                                var newurl = currenturl.replace(funcparam + '&', '');
                            } else if ((currenturl.indexOf("?" + funcparam)) > -1) {
                                var newurl = currenturl.replace('?' + funcparam, '');
                            }
                        }
                    }
                }
            } else {
                var newurl = currenturl + "&functions=" + newfunc;
            }
        } else {
            var newurl = currenturl + "?functions=" + newfunc;
        }
        window.location.href = newurl;
    });

    $('#select_country').change(function () {

        var selectedOption = $('#select_country option:selected').val();
        if (selectedOption == 'locator')
        {
            window.open($('#select_country option:selected').attr('url'));
        } else {
            window.location.href = $('#select_country option:selected').attr('url');
        }
    });

    $("#newsletter").submit(function (e) {
        var formURL = $(this).attr("action");
        var postData = $(this).serialize();
        $.ajax({
            url: formURL,
            type: "GET",
            data: postData,
            success: function (data)
            {
                $('.newsletter_data').html(data);
            }
        });
        e.preventDefault(); //STOP default action
    });

    $("#returnorder").submit(function (e) {
        var formURL = $(this).attr("action");
        var postData = $(this).serialize();
        $.ajax({
            url: formURL,
            type: "POST",
            data: postData,
            success: function (data)
            {
                if (data == "true") {
                    alert("Your request has been submitted successfully. We will get back to you shortly.");
                } else {
                    alert("Error while submitted request! Please fill the Order Id correctly.");
                }
            }
        });
        e.preventDefault(); //STOP default action
    });



    $("#sub-category").change(function () {
        document.location.href = $(this).val();
    });

    $("#frmcontactus").submit(function (e) {
        var formURL = $(this).attr("action");
        var postData = $(this).serialize();
        $.ajax({
            url: formURL,
            type: "POST",
            data: postData,
            success: function (data)
            {
                if (data == "true") {
                    alert("You request has been submitted successfully!");
                    window.location.reload();
                } else {
                    alert("Error! Please verify that you are not a robot.");

                }
            }
        });
        e.preventDefault(); //STOP default action
    });
});