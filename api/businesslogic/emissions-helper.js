//Arrays of allowed filters
const filters = ['gas_name','date','data_source_name','sector_name']

module.exports = function (params)
{
    let condition = [];
    for(let param in params){
        //check if filter is allowed
        if(!filters.includes(param)) continue;
        //Date is in format YYYY. To query by date, date must be an int.
        if(param == 'date')
        {
            condition.push({ "$eq" : [ "$$emissions.date", parseInt(params[param]) ] });
        }
        else
        {
            condition.push({ "$eq" : [ "$$emissions."+param, params[param] ] });
        }
    };
    console.log(condition);
    return condition;
}