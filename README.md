# ogs-api

This API allows you to get emissions by country

## Endpoints

Open endpoints require no Authentication.

* To get emissions for a country (root timeseries) : `GET /api/country-emissions`
* To get emissions for all country (root map) : `GET /api/country`
* To get data sources referential : `GET /api/data-sources`

## Parameters needed (root timeseries)

To fetch result for root timeseries, you need to specified at least the country params :

http://opengeoscaleapi-dev.eu-west-3.elasticbeanstalk.com/api/country-emissions?country=France

If country parameters is not provided, an error is return :
  ```json
  {
  "error": "country filter is required"
  }
  ```
## Parameters needed (root map)

To fetch result for root map, you need to specified a date, a sector, a gas and a data_source. 
Ex :
http://opengeoscaleapi-dev.eu-west-3.elasticbeanstalk.com/api/country?date=1950-01-01&gas=CO2&sector=fossil_emissions_oil&data_source=gcp


### Optional filters 

You can filter your results by specifying filters such as 'date' or 'gas'
filter the date by given date in format YYYY-MM-dd (ex: 1903-01-01)
filter by gas with gas parameter in the query 
ex:  
http://opengeoscaleapi-dev.eu-west-3.elasticbeanstalk.com/api/country-emissions?country=France&gas=CO2&date=1950-01-01

list of filter available (to be improved) : 
* date
* gas
* data_source
* sector

### References


