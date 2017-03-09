/**
 * Created by piotr on 02.03.2017.
 */
define (
    ['Data'],
    function (Data) {
        Data.$button.click(function () {
            Data.$answear.val(Data.$answear.val() + $(this).val());
        });
        Data.$cancel.click(function () {
            Data.$answear.val(" ");
        });
        Data.$delete.click(function () {
           var delete_number = Data.$answear.val().slice(0, -1);
           Data.$answear.val(delete_number);
        });

    }
);