import Modal from "../components/modal/index"
import { Meta, StoryObj } from "@storybook/react"
import "../app/globals.scss"

export default {
  component: Modal,
  title: "Modal",
} satisfies Meta<typeof Modal>

type Story = StoryObj<typeof Modal>

export const Primary: Story = {
  args: {
    type: "add note",
  },
}
