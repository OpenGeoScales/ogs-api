//Arrays of allowed filters
const filters = ['gas','date','data_source','sector']

module.exports = function (params)
{
    let condition = [];
    for(let param in params){
        //check if filter is allowed
        if(!filters.includes(param)) continue;
        //TODO : refactor this part
        //Date is in format YYYY. To query by date, date must be an int.
        if(param == 'date1')
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