"use client"; //6)using client site:-have to be written
import axios from "axios";
import React, { useEffect ,useState } from "react"; //1)initial code:-imrc (if not written then also its ok!)

/*
const page = () => {
  return <div>hello</div>;//only one element can be returned , not multiple .
}
export default page; //export = sending page fx to other next/react so that it can be used in other file.no output without this line.
/*2)JSX(JAVA SCRIPT XML = JS+HTML)
const page = () => {
  let a = 10
  return <div>a</div>;// output = a
  return <div>{a}</div>;// output = 10
}
export default page; 
*/

/*3)real dom vs virtual dom
real dom :- dom tree
virtual dom :- concept introduced by react,
makes copy of orignal dom tree(2-3 copies),
dom not rendered again and again,ie no reload again n again ex:-youtube*/

/*4)FRAGMENTS:- 
empty tags which acts as wrappers, always written inside return ..
5)TAILWIND CSS:- className is used,font-bold text-red-600 bg-blue-500 px-5 py-5 mt-5 rounded , spl btn 
7)button onlclickl=fx doesnt work! How to make variables in react!????
:-usesState hooks:-
(i)type useState or useStateSnippet and enter,import it in the above code
(ii)const [first,setFirst]=useState(second) :- first=constant(variable);setFirst=fx which helps to change the value of first;second=value of first
const page = () => {
  const [marks, setMarks] = useState(80);
  return (
    <>
      <div className="font-bold text-green-500 text-2xl">
        hi my marks are {marks}
      </div>
      <button
        onClick={()=>{//8)always fx is called like this in react.
          setMarks(90);
        }}
        className="text-white bg-gray-500 px-3 py-3 rounded mt-5"
      >
        update
      </button>
    </>
  );
};
export default page;
9)BREAKING THE COMPONENTS IN REACT!
(i)layoutjs is main like parent of page.js
(ii)Components folder is made,Inside it Header.js is made(rule=C&H always capital!)
import Header from "@/Components/Header";//(iii)importing Header.js in page.js //(iv)this component can be written as tags in page.js
const page = () => {
  const [user, setUser] = useState("Aditi pathak");//(v)variables are made in page.js and then written as attributes in components tag.
  const [address, setAddress] = useState("indiranagar bengaluru");//(vi)these are accesed by components through props object!.
  return (
    <>
      <Header user={user} address={address}/>
    </>
  );
};
export default page;*/
/*(10)ROUTING:-(5)
(i)going from one page of a website to another page! without reloading the page.
(ii)ABOUT/PRODUCT/CONTACT US folder created inside app folder with 1st letter capital.
(iii)page.js created inside these folder created.
(iv)fx inside page.js will have about/product/contact us
(v)href of a tag in main page.js will have /About,/Product,/Contactus
(vi)to stop loading we use . link tag! after importing it from next/link in header.js
vii)putting header in layout page

11)HOw to call api in react?(8) 
(i)through axios [way1]
(ii)npm i axios to install axios in the terminal &  import axios from "axios"; to import in the page.js(main page.js)
(iii)copy the url of the api!
(iv) make an async fx,then put try and catch in it! inside try call the api using axios.get("url");after that response.data is used to get the data from the api.
(v)set the data in a variable using useState! use empty array in initial value of the variable.,,then store data in the changed value of variable(inside async fx try)
(vi)then data has to be mapped in the return .(inside a div)
(vii){variableName.map((elem,i)=>{
return <img key={i} src={elem.download_url} height={300} width={300} className="inline block"/>
})}
(viii)then useEffect hook is used to call the fx automatically when the page is loaded! inside a main outer fx.
*/

const page = () => {
  useEffect(()=>{
    getImg();
  },[])
  
  const [images, setImages] = useState([]);
  const getImg = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setImages(data);
      console.log(images);
      console.log(data);
    } catch (error) {
      console.error("err fetching data!");
    }
  };
  return (
    <>
      This is Homepage
      <button
        onClick={getImg}
        className="text-white bg-gray-500 px-3 py-3 rounded mt-5"
      >
        Get images
      </button>
      <div>
        {images.map((elem, i) => {
          return (
            <img key={i} src={elem.download_url} height={300} width={300} className="inline block"/>
          );
        })}
      </div>
    </>
  );
};
export default page;
