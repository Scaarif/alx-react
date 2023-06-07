import areMapsEqual from "./7-equality";
import { Map } from "immutable"
const map1 = Map(
    {
      firstName: 'Guillaume',
      lastName: 'Salva',
    }
  );
  const map2 = Map(
    {
      firstName: 'Guillaume',
      lastName: 'Salva',
    }
  );
  
console.log(areMapsEqual(map1, map2));
console.log(areMapsEqual(map1,  {
    firstName: 'Guillaume',
    lastName: 'Salva',
  }))