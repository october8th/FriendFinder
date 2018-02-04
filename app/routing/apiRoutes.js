var muppets = require("../data/friends");
var path = require("path");

module.exports = function(app) 
{
	app.get("/api/friends", function(req,res) 
	{
   		res.json(muppets);
   	});

    app.post("/api/submitSurvey", function(req,res) 
    {
   		console.log(req.body);
   		//console.log(JSON.parse(req.body));
    	var newMatch = req.body;
    	var matchDelta = 500;
    	var myMuppet = {};
    	//console.log("json stringify: " + JSON.stringify(newMatch));
    	//console.log("type of: " + typeof newMatch);
    	console.log("length of my matches:" + muppets.length);
        for (var i=0; i<muppets.length; i++)
        {
        	var newDelta = 0;
        	//console.log(JSON.parse(newMatch))
        	console.log(muppets[0].scores.length);
        	console.log(muppets[0].scores[0]);
        	console.log(newMatch.name);
        	console.log(newMatch.photo);
        	console.log(Object.keys(newMatch));
        	console.log(newMatch.scores[0]);
        	
      		for (var j=0; j < muppets[i].scores.length; j++)
      		{
         		newDelta += (Math.abs(parseInt(newMatch.scores[j])-parseInt(muppets[i].scores[j])));
      		}
      		if (newDelta < matchDelta)
      		{
      			myMuppet = muppets[i];
      		}
     	}
     	muppets[i].matches.push([newMatch.name,newMatch.photo]);
     	return(myMuppet);
   });
};