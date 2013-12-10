if(typeof Simmetrix == 'undefined') { Simmetrix = {};}

Simmetrix.QGram = {

    similarity:function ( string1, string2 ) {

	if (typeof string1 == 'undefined' 
	    || typeof string2 == 'undefined' 
            || string1.length == 0 
            || string2.length == 0 ) {
	    return 0;
	}

        var str1Tokens = this.tokenizer3extented(string1.toLowerCase());
        var str2Tokens = this.tokenizer3extented(string2.toLowerCase());

        var maxQGramsMatching = Math.min(str1Tokens.length,str2Tokens.length);

        //return
        if (maxQGramsMatching == 0) {
            return 0.0;
        } else {
       	    return 1 - (maxQGramsMatching - this._notNormalisedQGrammSimilarity(str1Tokens, str2Tokens)) /  maxQGramsMatching;
        }
    },

    /**
     * gets the un-normalised similarity measure of the metric for the given strings.
     *
     * @param string1
     * @param string2
     *
     * @return returns the score of the similarity measure (un-normalised)
     */
    _notNormalisedQGrammSimilarity:function(str1Tokens, str2Tokens) {
        
        if (str1Tokens.length > str2Tokens.length) {
        	var allTokens = str2Tokens;
            var compareTokens = str1Tokens;}
        else
        	{var allTokens = str1Tokens;
        	 var compareTokens = str1Tokens;}
        	
        var common = 0;
       
        for (var i=0; i < allTokens.length; i++) {
        	//document.write("->");
        	var token = allTokens[i];
        	        	      
            if (compareTokens.indexOf(token) >= 0) {
                     common++;
                     
            }
           
        }

        return common;
    },

	onlyUnique : function(value, index, self) { 
    		return self.indexOf(value) === index;
	},

	tokenizer3extented:function(input) {
	
	    var QGRAMSTARTPADDING = '#';
	    var QGRAMENDPADDING = '#';
	
	    var returnVect = new Array();
	    
	    var adjustedString = QGRAMSTARTPADDING+input+QGRAMENDPADDING;
	
	    var curPos = 0;
	    var length = adjustedString.length - 2;
	    var newAdjustedString = adjustedString;
	    
	    while (curPos < length) {
	        var term = newAdjustedString.substring(0, 2);
	        returnVect.push(term);
		newAdjustedString = newAdjustedString.substring(1);
	        curPos++;
	    }
	
	    return returnVect.filter( this.onlyUnique );
	}
};
