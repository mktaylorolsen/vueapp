const events = [
    {
        eventType:'travel',
        subEventType:'flight',
        eventTitle:'Flight from CLT to FRA',
        eventTime:'TBD',
        eventLocal:
        `Charlotte Douglas International Airport
        Charlotte, NC`,
        eventMapLink:'https://www.google.com/maps/place/Charlotte+Douglas+International+Airport/@35.2144026,-80.9473146,15z/data=!4m2!3m1!1s0x0:0x1aba4a6f3cc4a737?ved=2ahUKEwicp6Kr3bfgAhUNUt8KHTZrDMQQ_BIwAHoECAkQDg',
        eventInfo:'Arrive at airport with enough time to go through security. Flight is approximately 8 hours from Charlotte to Frankfurt.',
        eventDay:'Saturday, May 11',
    },
    {
        eventType:'travel',
        subEventType:'flight',
        eventTitle:'Flight from FRA to FLR',
        eventTime:'TBD',
        eventLocal:`Frankfurt International Airport
        Frankfurt, Germany`,
        eventMapLink:'',
        eventInfo:'Arrive in Frankfurt. Grab a snack or a drink and enjoy the short layover before the final leg to Italy.',
        eventDay:'Sunday, May 12',
    },
    {
        eventType:'travel',
        subEventType:'van',
        eventTitle:'Shuttle from FLR to House',
        eventTime:'TBD',
        eventLocal:`Sant' Ambrogio
        Florence, Italy`,
        eventMapLink:'',
        eventInfo:'Check into AirBnb. Claim your rooms. Unpack.',
        eventDay:'Sunday, May 12',
    },
    {
        eventType:'free',
        subEventType:'',
        eventTitle:'Explore Surrounding Area',
        eventTime:'TBD',
        eventLocal:`Sant' Ambrogio
        Florence, Italy`,
        eventMapLink:'',
        eventInfo:'Step outside and explore your neighborhood!',
        eventDay:'Sunday, May 12',
    },
    {
        eventType:'food',
        subEventType:'',
        eventTitle:'Dinner at a Local Restaurant',
        eventTime:'TBD',
        eventLocal:`Sant' Ambrogio
        Florence, Italy`,
        eventMapLink:'',
        eventInfo:'Your first chance for some real, authentic, Italian cooking!',
        eventDay:'Sunday, May 12',
    },
    {
        eventType:'travel',
        subEventType:'van',
        eventTitle:'Private Minivan Transfer to Train Station',
        eventTime:'TBD',
        eventLocal:`Sant' Ambrogio
        Florence, Italy`,
        eventMapLink:'',
        eventInfo:'Make sure you have everything you need before getting in the van. Passport? Extra cash? Comfy shoes?',
        eventDay:'Monday, May 13',
    },
    {
        eventType:'travel',
        subEventType:'train',
        eventTitle:'Train to Venice',
        eventTime:'TBD',
        eventLocal:`Florence Train Station
        Florence, Italy`,
        eventMapLink:'',
        eventInfo:'First class train tickets and seat reservations. 2 hour and 5 minute train time.',
        eventDay:'Monday, May 13',
    },
] 

//DATA LIST
//iterate through objects printing out date
//on click of that date button, opens up itinerary for that date.

//when date list is showing, itinerary and cards hides
//when itinerary is showing, date list and card hides
//when card is showing, date list and intinerary are hiding
//depending on event type: changes picture at top of expanded card
//"": changes color of event type, directions and close button

//when date is clicked, itinerary should come up
// circle bg color and icon should appear based on event type
//when itinerary card is clicked, expanded card should pop up

new Vue({
    el:'#dataContainer',
    data:{
        events:events,
        seen:false,
        itinerary:'',
        itineraryDate:'',
        expandedCard:'', 
        typeIcon:'',
        expCardOpen:false,
        typeIconClasses:{
            "fa-glass-cheers":false,
            "fa-shuttle-van":false,
            "fa-landmark":false,
            "fa-utensils":false
        }
    },
    methods: {
        dateListToItinerary: function(date){
            this.itineraryDate = date;
            //make a new array to hold all events for that day
            const itinerary = [];
            //iterate through event object array
            this.events.forEach((item)=>{
                if(date === item.eventDay){
                  itinerary.push(item);
                }
              });
              //display the itinerary cards for the new array
            this.itinerary = itinerary;

                //depending on type, add class to i specfic to that type

        },
        openExpCard: function(activity){
            //set the activity to be the expaned card
            //display the expanded card with that information
            this.expandedCard = activity;
        },
    },
    computed: {
        uniqueDateList: function(){
          const dates = [];
          this.events.forEach((item)=>{
            if(!dates.includes(item.eventDay)){
              dates.push(item.eventDay);
            }
          });
          return dates;
        },
    },
  });