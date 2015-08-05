
  function describeStr(str){
    var symb = str[0];
    var counter = 1;
    var result = '';
    for (var i = 1; i < str.length; i++){
      if (str[i] == symb)
        counter++;
      else {
        result+=counter+symb;
        symb=str[i];
        counter = 1;
      }
    }
    result+=counter+symb;
    return result;
  }

  function stringByNum(num){
    if (typeof num != 'number' || num < 0 || (num ^ 0) != num) {
      console.log('Ошибка! Введите целое неотрицательное число')
      return -1;
    }
    else {
      var str = '1';
      for (var i = 1; i <= num; i++){
        str = describeStr(str);
      }
      return str;
    }
  }

