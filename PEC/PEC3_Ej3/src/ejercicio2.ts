interface Plane {
    model:string;
    npassengers:number;
  }
  
  type HangarHash = { [key: string]: Plane };
  
  let myHangar:HangarHash = {};
  
  myHangar['123Z'] = {
    model: 'airbus',
    npassengers: 200
  };
  
  myHangar['H789'] = {
    model: 'boeing',
    npassengers: 151
  };
  
  for (const id in myHangar) {
    const plane = myHangar[id];
    console.log(`${id}:${plane.model}(${plane.npassengers})`);
  }
  