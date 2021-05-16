# ogs-api

These API allows you to get emissions by country

## Endpoints

Open endpoints require no Authentication.

* `GET /api/country-emissions`

## Parameters needed

To fetch result, you need to specified at least the country params
* http://localhost:3000/api/country-emissions?country=Zimbabwe
If country parameters is not provided, an error is return :
  ```json
  {
  "error": "country filter is required"
  }
  ```

### Optional filters 

You can filter your results by specifying filters such as 'date' or 'gas_name'
filter the date by given date in format YYYY (ex: 1903)
filter by gas_name with gas_name paramter in the query 
ex:  
* http://localhost:3000/api/country-emissions?country=Zimbabwe&date=1903&gas_name=CO2

list of filter avaible (to be improved) : 
* date
* gas_name

### References


