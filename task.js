let res = fetch("https://restcountries.com/v2/all");

res.then((data)=>data.json()).then((data1)=>{
    

  
    for(let i in data1)
    {
        let z = document.createElement("div");
        z.setAttribute("class","container-fliud");
        z.setAttribute("style","display:flex;flex:wrap;flex:justify-content:center;");

    
        let div1 = document.createElement("div");
        div1.setAttribute("class","card");
        div1.setAttribute("style","width: 25rem;margin-bottom:30px;display:flex;flex:wrap;justify-content:center;background-color:whitesmoke");

        let div2 = document.createElement("div");
        div2.setAttribute("class","card-body");

        let h5 = document.createElement("h5");
        h5.setAttribute("style","font-size:30px:font-family:Times nwe Roman;padding:10px");

        let img = document.createElement("img");
        img.setAttribute("class","card-img-top");
        img.setAttribute("src",data1[i].flags.png);
        img.setAttribute("style","height:250px");
        

    
        let h6 = document.createElement("h5");
        h6.setAttribute("style","font-size:30px:font-family:Times nwe Roman;padding:10px");

        let h7 = document.createElement("h5");
        h7.setAttribute("style","font-size:30px:font-family:Times nwe Roman;padding:10px");


        h5.innerHTML = `COUNTRY NAME :   ${data1[i].name}`
        h6.innerHTML = `REGION       :   ${data1[i].region}`
        h7.innerHTML = `SUB REGION   :   ${data1[i].subregion}`

       


    div2.append(h5);
    div2.append(h6);
    div2.append(h7);
    div1.append(img);
      div1.append(div2);
 z.append(div1);
 

 document.body.style.display="flex";
    document.body.style.flexWrap="wrap";
    document.body.style.justifyContent="space-evenly";
    document.body.style.marginTop="30px";

      
       document.body.append(z);
    }
  
   

});
