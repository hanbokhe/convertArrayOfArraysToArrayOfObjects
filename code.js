function transformEmployeeData(employeeData) {
  var container = [];
  for (var i = 0; i < employeeData.length; i++)
  {
      var personArray = employeeData[i];
      var personObject = {};
      for (var j = 0; j < personArray.length; j++)
      {
          personObject[personArray[j][0]] = personArray[j][1];
      }
      container.push(personObject);
  }
  return container;
}
