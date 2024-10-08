import type { Meta } from "@storybook/react";
import { PageLoader } from "../index";

export const Default = () => {
	return <PageLoader />;
};

export default {
	title: "PageLoader",
	component: PageLoader,
} satisfies Meta<typeof PageLoader>;
