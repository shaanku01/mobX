import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Todo } from ".";

export default {
    title: "Organisms/Todo",
    component: Todo,
  } as ComponentMeta<typeof Todo>;

  const Template: ComponentStory<typeof Todo> = (args) => (
    <Todo {...args} />
  );

  export const Todo1 = Template.bind({});