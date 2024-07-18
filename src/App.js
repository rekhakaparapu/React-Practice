import Card from "./components/card.js";
import Form from "./components/form.js";
import ButtonComponent from "./components/functional/button"
import ImageComponent from "./components/functional/image.js"
import OrderedList from "./components/functional/list.js";
import UnorderedList from "./components/unorderlist.js";
import Img2Component from "./img2.js";

const Component1=()=>{
  return(
    <>
    <h1>React store</h1>
    <ButtonComponent></ButtonComponent>
    <ImageComponent/>
    <ButtonComponent></ButtonComponent>
    <Img2Component/>
    <ButtonComponent></ButtonComponent>
    <ImageComponent/>
    <ButtonComponent></ButtonComponent>
    <Img2Component/>
  <OrderedList></OrderedList>
  <h3> unordered list</h3>
  <UnorderedList></UnorderedList>
  <h2> Form</h2>
  <Form></Form>
  <Card></Card>
   </>
  );
}
export default Component1
 