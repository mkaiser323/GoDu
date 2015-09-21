if (Meteor.isClient) {
	  // This code only runs on the client
	  Template.body.helpers({
		  events:[ 
		  	{
			   
				event_name: "St. John's School",
				date: "5/12/2015",
				time: "3:23pm",
				position: "Nurse",
				description: "Volunteer to handle blood work",
				org: "Red Cross",
				phone: "777-455-4543",
				address: "101 Blueberry Drive, Bronx, NY 10468",
			},

			{
				event_name: "Nepal Clothes Drive",
				date: "6/23/2015",
				position: "Inventory Volunteer",
				description: "Volunteer to assist with inventory",
				org: "YMCA",
				phone: "234-423-4540",
				address: "234 Strawberry Drive, Manhattan, NY 10032",
			},

			{
				event_name: "Animal Shelter",
				date: "8/29/2015",
				time: "2:20pm",
				position: "Volunteer Vet",
				description: "Volunteer to help care for animals",
				org: "ASPCA",
				phone: "123-334-2345",
				address: "112 Blackberry Drive, Manhattan, NY 10035",

			  },

			 
			  {
			   
				event_name: "Food Pantry Saturday",
				date: "5/12/2015",
				time: "5:00pm",
				position: "Server",
				description: "The food pantry needs 10 people at 5pm to serve free dinner to our patrons, needy men and women. ",
				org: "Food Pantry of the Bronx",
				phone: "120-242-4534",
				address: "234 Blank Street, Queens, NY 10345"
			   
			  },
			 
			{
			   
				event_name: "Community Cleanup",
				position: "Volunteer",
				date: "5/20/2015",
				time : "2:00pm",
				description: "Help us cleanup the neighborhood",
				org: "Red Cross",
				phone: "234-342-4543",
				address: "33 Varick Street, Brooklyn, NY 10343"
			   
			  },

			 {
	
				event_name: "After School",
				position : "tutor",
				date: "5/23/2015",
				time : "1:40pm",
				description: "We need math tutors for our 5th graders.",
				org: "St. Johns School",
				address: "777 Street, Brooklyn, NY 12324",
				phone: "324-343-6765",
			   
			  }
			]
	  });
	}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Router.route('/', function(){
	this.render('button');
});




