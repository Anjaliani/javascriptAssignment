	        var output = [];
	        var output1 = [];
	        var obj = {}
	        var c = [[0],[0],[0],[0],[0],[0]]
	        var g = [[0],[0],[0],[0],[0],[0]]
	          
	        var arr = ["Australia", "European", "South America", "Asia", "Africa", "North America"]
	    
	        var fs= require('fs');
	        var lineReader = require('readline').createInterface({
	          input: fs.createReadStream('../Table_1.3.csv')     
	        });

	        lineReader.on('line', function (line) {
	          var jsonLine = {};
	          var jsonFromLine = {};
	          var lineSplit = line.split(',');
	        
	         jsonFromLine.CountryName = lineSplit[0];

	            if (jsonFromLine.CountryName == 'World' || jsonFromLine.CountryName == 'European Union') {
	            	obj=null

	        } else if(jsonFromLine.CountryName=='Australia') {
	 
	                c[0][0]+=parseFloat(lineSplit[5])
	                g[0][0]+=parseFloat(lineSplit[11])
	               jsonLine.Continent="Australia"               
	        }

	        else if(jsonFromLine.CountryName=='United Kingdom' || jsonFromLine.CountryName=='France' || jsonFromLine.CountryName=='Russia'||jsonFromLine.CountryName=='Turkey' ) {
	              
	                	
	                    c[1][0]+=parseFloat(lineSplit[5])
	                g[1][0]+=parseFloat(lineSplit[11])

	                    jsonLine.Continent="European";
	            }
	            else if(jsonFromLine.CountryName=='Argentina' || jsonFromLine.CountryName=='Brazil') {
	                	
	                c[2][0]+=parseFloat(lineSplit[5])
	                g[2][0]+=parseFloat(lineSplit[11])
	                   jsonLine.Continent="South America";
	                }
	                else if(jsonFromLine.CountryName=='China' || jsonFromLine.CountryName=='India' || jsonFromLine.CountryName=='Indonesia'||jsonFromLine.CountryName=='Japan'||jsonFromLine.CountryName=='Saudi Arabia'||jsonFromLine.CountryName=='Republic of Korea' ) {

	                    c[3][0]+=parseFloat(lineSplit[5])
	                g[3][0]+=parseFloat(lineSplit[11])
	            
	                    jsonLine.Continent="Asia";

	            }
	           else if(jsonFromLine.CountryName=='South Africa' ) {
	        	
	                    c[4][0]+=parseFloat(lineSplit[5])
	                g[4][0]+=parseFloat(lineSplit[11])
	                jsonLine.Continent="Africa"
	          
	          }
	         else if(jsonFromLine.CountryName=='Mexico' || jsonFromLine.CountryName=='USA'  ) {
	                	
	                    c[5][0]+=parseFloat(lineSplit[5])
	                g[5][0]+=parseFloat(lineSplit[11])
	                jsonLine.Continent="North America"
	           
	          }
	    });
	         lineReader.on('close', function (line) {
	           	for(let j=0;j<6;j++)
	        	{
	        		
	        	obj1 = {
	        		continent: arr[j],
	        		population_2013: c[j][0],
	                   }
	            obj2 = {
	                continent: arr[j],
	                GDP2013: g[j][0],
	            }
	            output.push(obj1);
	            output1.push(obj2);
	}
	            var json = JSON.stringify(output, null, 2);
	            
	            fs.writeFileSync('../json/aggre1.json',json);
	            var json = JSON.stringify(output1, null, 2);
	            
	            fs.writeFileSync('../json/aggre2.json',json);
	});


