// your code here
function handelSubmit(event){
          event.preventDefault();
          var h3Value="https://localhost:8080/";
          var name=nameElement.value;
          var year =yearElement.value;

          if(name && year){
            h3Value+="?name=" +name+"&year="+year;
          }else if(name && !year){
            h3Value+="?name="+name;
          }else if(!name && year){
            h3Value+="?year="+year;
          }
          h3Value.textContent=h3Value;
        }