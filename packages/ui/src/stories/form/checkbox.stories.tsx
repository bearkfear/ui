import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../index";

const meta = {
	component: Checkbox,
	title: "Form/Checkbox",
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
