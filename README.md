## Project description
We are trying to develop a web application with advanced graphic components capable of displaying data relating to real estate sales in France.  
We rely on open data: [Land Values Demands](https://www.data.gouv.fr/fr/datasets/demandes-de-valeurs-foncieres/).  
We want to be able to visualize graphs relating to these data:

* A time series which shows month by month changes in the average selling price per square meter for sales (transfers) of the “apartment” and “house” type over the entire observation period (5 years).
* A bar chart that counts the number of sales (mutations) per day, week, month, year, for a given time interval. The user chooses the size of the groups (days, month, year) and the time interval (start, end).
* A pie chart showing the distribution of sales by region.

## Install
Application is based oon **api-platform** project. Take a tour at ["Getting Started" guide](https://api-platform.com/docs/distribution).

## Database structure
- The sales table as well as the entity is named Commit Mutation on the [record](https://www.data.gouv.fr/fr/datasets/r/d573456c-76eb-4276-b91c-e6b9c89d6656) 
- Please import the table containing all data from the second half of 2015 to the first half of 2020 [mutation table](https://drive.google.com/file/d/1a-bNs2vR9iwJjcVHU_U_1hcsI4b0CpDW/view?usp=sharing)
- Api endpoints are: 
* averageSalesPerYear: 
    curl -X GET "https://localhost:8443/averageSalesPerYear" -H  "accept: application/json"
* salesFilter 
    curl -X GET "https://localhost:8443/salesFilter?startDate=2015-01-01&endDate=2020-12-01" -H  "accept: application/json"   
* salesPerDepartment 
    curl -X GET "https://localhost:8443/salesPerDepartment" -H  "accept: application/json"   
