app.factory('suggestions', [function(){
var mySuggestions = {
  posts: [
  {
    title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
    upvotes: 3,
    comments: [],
  },
  {
    title: 'End all club emails with Laffy Taffy jokes',
    upvotes: 9,
    comments: ["This one really sucks", 5],
  },
  {
    title: 'Retrofit water fountain with Gatorade',
    upvotes: 7,
    comments: [],
  },
  {
    title: 'Free pepperoni pizza at club meetings',
    upvotes: 15,
    comments: [],
  },
  {
    title: 'Put boss in dunk tank',
    upvotes: 12,
    comments: [],
  }
]
};
return mySuggestions;
}]);
