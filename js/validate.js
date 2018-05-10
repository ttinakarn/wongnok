$(function(){
    $('#mainform').click(function(event){

        //ดึงตัวแปร $('#mainform') มาเก็บไว้ใน form
        var form = $('#mainform')[0];

        //checkValidity() เอาไว้เช็คเงื่อนไขใน html เช่น min max required
        if(form.checkValidity() == false)
        {
            //Cancel submition
            event.preventDefault();
            $('#searchresult').hide();
            console.log('hide');
        }
        else
        {
            $('#searchresult').show();
            console.log('show');
        }
        //เพิ่ม class was-validated ใน form
        $(this).addClass('was-validated');
    });
});