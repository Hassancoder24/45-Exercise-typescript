//describe s func
function describe_city (city:string, country:string = 'Pakistan'){
    console.log(`${city} is in ${country}`)
}

//call a function
describe_city('Karachi');
describe_city('Lahore');
describe_city('Dehli', 'India');