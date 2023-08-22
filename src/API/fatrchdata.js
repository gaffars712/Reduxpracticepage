import Chance from "chance";

const chanci = Chance();

 const  apidata = () =>{

    return chanci.name({middle:true});
      
};
export default apidata;