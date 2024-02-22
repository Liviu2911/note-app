import { Meta, StoryObj } from "@storybook/react"
import Notes from "../components/notes/notes"

export default {
  component: Notes,
  title: "Notes",
} satisfies Meta<typeof Notes>

type Story = StoryObj<typeof Notes>

export const Primary: Story = {
  args: {
    username: "Liviu29",
  },
}
