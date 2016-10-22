# Tweetmap

We have created a simple web application that maps tweets to their location in real time. We used <a href=http://www.tweepy.org/> Tweepy</a>, which is an easy-to-use Python library for accessing the Twitter API. Initially we pull 10K tweets and store them on the <a href= https://aws.amazon.com/elasticsearch-service/> Amazon Elasticsearch Service</a>. Elasticsearch provides the benefit of easily scaling our clusters through single API calls or the management console. Furthermore, it can automatically replace failed Elasticsearch nodes, reducing the overhead associated with self-managed infrastructure like ours. 


Our application is built using <a href=https://www.djangoproject.com/Django> Django</a> which is a powerful Python Web framework. We have utilized the Google Maps API for plotting the tweet clusters. On the server-side, we pull tweet information using Tweepy and store them into Elasticsearch. Then we query Elasticsearch every 5 seconds, which returns tweet/location data in the Json format. We render this data on the client-side in the form of markers that appear and disappear in real time. At any point of time, the map contains atmost 10K tweets. This limitation follows from the fact that Elasticsearch only allows a maximum of 10K tweets to be stored at a particular time. 


##Usage:
Tweets can be filtered using keywords which are typed into a textbox on top of the page. The markers indicate locations from where the tweets were posted. If the cursor is hovered over the marker, it would display the actual tweet. 
