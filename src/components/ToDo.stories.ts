import { Meta } from "@storybook/react-webpack5";
import { ToDo } from "./ToDo";

const meta = {
    title: "Components/ToDo",
    component: ToDo,
    args: {
        id: "1",
        todo: "Hola Mundo",
    }
} satisfies Meta<typeof ToDo>;

export default meta;

export const Default = {};

export const Story2 = {
    args: {
        todo: "Adiós Mundo",
    },
};

export const Completed = {
    args: {
        isCompleted: true,
    },
}
