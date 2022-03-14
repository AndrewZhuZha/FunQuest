    function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }

    function date_time()
    {
        var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth()+1);
        var year = current_datetime.getFullYear();
        var hours = zero_first_format(current_datetime.getHours());
        var minutes = zero_first_format(current_datetime.getMinutes());
        var seconds = zero_first_format(current_datetime.getSeconds());

        return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
    }
        setInterval(function () {
        document.getElementById('time').innerHTML = date_time();
    }, 1000);

    const item1 = document.getElementById('item1');
    const item2 = document.getElementById('item2');
    const form = document.getElementById('quest1');
    const button = document.getElementById('enter');
    var table = document.getElementById('table');
    var main = document.getElementById('main');
    var question = document.getElementById('question');
            
$(main).click(function(e)
{
main.style.backgroundColor = '#228B22'
question.style.backgroundColor = '#29c5e6'
e.preventDefault();
form1 = document.getElementById('quest').hidden = false;
form.hidden=true;
})

$(question).click(function(e)
{
main.style.backgroundColor = '#29c5e6';
question.style.backgroundColor = '#228B22';
e.preventDefault();
form1 = document.getElementById('quest').hidden = true;
form.hidden=false;
})

$(button).click(function(e)
{        

e.preventDefault();
$.ajax({
        method: "POST",
        url: "Fun.php",
        dataType: 'json',
        data: { 
                i:item1.value.trim(),
                j:item2.value.trim(),
        }
    })
        .done (function(msg)                                        
        {
            if (msg['Info'] ==='No')
            {
                alert("Введите корректно данные!")
            }
            else
            {
        for (var i=0; i<msg.length; i++){
                var tr = document.createElement('tr');
                for(var j=0; j<msg.length; j++){
                    var td = document.createElement('td');
                    td.innerHTML = msg[i][j];
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }
        }
    })
    
})