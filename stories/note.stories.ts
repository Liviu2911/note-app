import Note from "../components/notes/note"
import { Meta, StoryObj } from "@storybook/react"
import "../app/globals.scss"

export default {
  component: Note,
  title: "Note",
} satisfies Meta<typeof Note>

type Story = StoryObj<typeof Note>

export const Primary: Story = {
  args: {
    title: "Reminder",
    content: "asdas",
    id: "ashdg2138g13rg",
  },
}
