//crate a take value from text

function getValueFromText(mainId){
    const getAccess = document.getElementById(mainId)
    const getValueString = getAccess.innerText;
    const getValueNumber = parseFloat(getValueString);
    return getValueNumber;
}

 //setting input minus things
function getValueFromInput (mainId){
    const getAccess = document.getElementById(mainId);
    const getValueString = getAccess.value;
    const getValueNumber = parseFloat (getValueString)
    return getValueNumber;
}

//setting set Input things 
function setInputValue (mainId , returnValue){
    const getAccess = document.getElementById(mainId);
    getAccess.value = returnValue;
}

//setting new value function
function setValue (mainId , returnValue){
    const getAccess = document.getElementById(mainId);
    getAccess.innerText = returnValue;
}

//setting minus things
document.getElementById('btn-minus').addEventListener('click',function(){
    const phoneValue = getValueFromText('phone-value')
    const newValue = phoneValue - 1219;
    setValue ('phone-value', newValue)

    //update input value
    const getInputValue = getValueFromInput('input-value1')
    const updateValue = getInputValue - 1;
    setInputValue ('input-value1',updateValue)
})

//setting plus things
document.getElementById('btn-plus').addEventListener('click',function(){
    const phoneValue = getValueFromText ('phone-value')
    const newValue = phoneValue + 1219;
    setValue ('phone-value', newValue)

        //update input value
        const getInputValue = getValueFromInput('input-value1')
        const updateValue = getInputValue + 1;
        setInputValue ('input-value1',updateValue)
})


