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
    note: {
      title: "Wassup nigga",
      content: "Wass goin on. Yo neymar, it's sunnt innit",
      id: "sadjaui12934",
    },
  },
}
