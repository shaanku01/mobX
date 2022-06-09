import React from "react";
import { Buttons } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Atoms/Buttons",
    component: Buttons,
  } as ComponentMeta<typeof Buttons>;

  const Template: ComponentStory<typeof Buttons> = (args) => (
    <Buttons {...args} />
  );

  export const Button1 = Template.bind({});
  Button1.args = {
  
  text:"Add Todo",
  onClick:()=>{console.log("clicked");}
};