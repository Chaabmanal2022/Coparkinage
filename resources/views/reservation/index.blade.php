<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>index</title>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>
    <div></div>
    <div id="aeropots-container"></div>
    <div id="aller"></div>
    <div id="aller2"></div>

    
<script>
    var selectElement;

    $(document).ready(function(){
        var Aeroports = {!! json_encode($aeroports->toArray(), JSON_HEX_TAG) !!};


        var DataContainer = $('#aeropots-container');
        var DataContainer2 = $('#aller');
        DataContainer .append('<h1>Hello AJAX !!!</h1>');

            selectElement = document.createElement('select');
            selectElement.id = 'mySelect';
            selectElement.setAttribute('onchange', 'getValue()');

        if (Aeroports.length > 0) {
        
            var optionElement = document.createElement('option');
             optionElement.innerHTML = '<b>Aéroports</b>';

               selectElement.append(optionElement);

               Aeroports.forEach(function(category) {
               var optionElement = document.createElement('option');
               optionElement.value = category.id;
               optionElement.text = category.nom;
               selectElement.append(optionElement);

  });
                DataContainer.append(selectElement);


        }


    });


    var newSelectElement = document.createElement('select');
    newSelectElement.id = 'newSelect';
    var Parkings = {!! json_encode($parkings->toArray(), JSON_HEX_TAG) !!};
    var ParkingAeroport = {!! json_encode($ParkingAeroport->toArray(), JSON_HEX_TAG) !!};
    function getValue() {
        resultsArray = [];

    if (selectElement) {  
        if (ParkingAeroport.length > 0){
            var selectedValue = selectElement.value;
            ParkingAeroport.forEach(function(category2){
                if(category2.aeroport_id === selectedValue){
                    resultsArray.push(category2.aeroport_id);
            }
                var option = document.createElement('option');
                option.value = category2.aeroport_id ;
                option.text = category2.aeroport_id ;
                newSelectElement.appendChild(option);

            });

        }
        var allerContainer = document.getElementById('aller2');
        allerContainer.innerHTML = '';
        allerContainer.appendChild(newSelectElement);
    } else {
        console.error('selectElement is not defined.');
    }
    console.log(resultsArray);
}


</script>
</body>
</html>
