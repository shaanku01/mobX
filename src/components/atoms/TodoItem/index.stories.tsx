import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Todoitem } from ".";

export default {
    title: "Atoms/Todoitem",
    component: Todoitem,
  } as ComponentMeta<typeof Todoitem>;

  const Template: ComponentStory<typeof Todoitem> = (args) => (
    <Todoitem {...args} />
  );

  export const Todoitem1 = Template.bind({});
  Todoitem1.args = {
  content:"Todo item 1",
  onClick:()=>{console.log("Clicked")}
  
 
};