// This function removes the query string parameters specified in the second argument;
// It also removes duplicate query strings

function stripUrlParams(url, paramsToStrip = []){
  if (!url.includes('?')) {
    return url
  } else {
    var splitUrl = url.split('?')
    var splitParams = splitUrl[1].split('&')
    var newParams = []
    var uniqueParams = {}
    for (var i = 0; i < splitParams.length; i++) {
      var param = splitParams[i].split('=')
      var key = param[0]
      if (!paramsToStrip.includes(key) && !uniqueParams[key]) {
        newParams.push(splitParams[i])
        uniqueParams[key] = param[1]
      } 
    }
    return splitUrl[0] + '?' + newParams.join('&')
  }
}

console.assert(stripUrlParams('www.google.com?a=1&b=2&a=2') === 'www.google.com?a=1&b=2', '1 passed')
console.assert(stripUrlParams('www.google.com?a=1&b=2&a=2', ['b']) === 'www.google.com?a=1', '2 passed')
console.assert(stripUrlParams('www.google.com', ['b'])=== 'www.google.com', '3 passed')
console.assert(stripUrlParams('www.google.com?a=1&b=4&c=7&a=3', ['b', 'c']) === 'www.google.com?a=1', '4 passed')
