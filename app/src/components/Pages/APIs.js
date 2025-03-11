  const fetchAPI = date => {
    let result = [];
    let random = Math.random(date.getDate());
  
    for(let i = 17; i <= 23; i++) {
      if(random < 0.5) result.push(i + ':00');
      if(random > 0.5) result.push(i + ':30');
    }
  
    return result;
  };
  
  const submitAPI = formData => true;
  
  export {
    fetchAPI,
    submitAPI
  };