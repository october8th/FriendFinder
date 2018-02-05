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
   		//console.log(req.body);
   		//console.log(JSON.parse(req.body));
    	var newMatch = req.body;
    	var matchDelta = 500;
    	var myMuppet = {};
    	var myMuppetIndex = 0;
    	//console.log("json stringify: " + JSON.stringify(newMatch));
    	//console.log("type of: " + typeof newMatch);
    	//console.log("length of my matches:" + muppets.length);
        for (var i=0; i<muppets.length; i++)
        {
        	var newDelta = 0;
      		for (var j=0; j < muppets[i].scores.length; j++)
      		{
         		newDelta += (Math.abs(parseInt(newMatch.scores[j])-parseInt(muppets[i].scores[j])));
      		}
      		if (newDelta < matchDelta)
      		{
      			matchDelta = newDelta;
      			myMuppet = muppets[i];
      			myMuppetIndex = i;
      		}
     	}
     	muppets[myMuppetIndex].matches.push([newMatch.name,newMatch.photo]);
     	//console.log(muppets[myMuppetIndex]);
     	//res.json(true);
     	res.json(muppets[myMuppetIndex]);
   });
};