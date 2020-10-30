
        function showInput() {

            var myTitle = document.getElementById('myTitle').value;
            var myText = document.getElementById('myText').value;
        
        
            var title = document.createTextNode(myTitle); 
            var text = document.createTextNode(myText); 
        
        
            var li = document.createElement('li'); 
        
            var div_col_mb_4 = document.createElement('div'); 
            div_col_mb_4.classList.add('col-md-4');
        
            var div_card = document.createElement('div'); 
            div_card.classList.add('card-body');
        
          
        
            var h2 = document.createElement('h2');
            h2.classList.add('card-title');
        
            var p = document.createElement('p');
            p.classList.add('card-text');
        
            h2.appendChild(title); //Display on output
            p.appendChild(text); //Display on output
        
            div_card.appendChild(h2);
            div_card.appendChild(p);
            div_col_mb_4.appendChild(div_card);
            li.appendChild(div_col_mb_4);
        
            if (myTitle === '' || myText === '') {
                alert('Please enter the required fields');
            } else {
                document.getElementById('myList').appendChild(li);
                document.getElementById('myTitle').value = '';
                document.getElementById('myText').value = '';
            }
        
        
        }