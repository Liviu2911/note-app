import Signout from "../components/signout"
import { Meta, StoryObj } from "@storybook/react"
import "../app/globals.scss"

export default {
  component: Signout,
  title: "Sign Out",
} satisfies Meta<typeof Signout>

type Story = StoryObj<typeof Signout>

export const Primary: Story = {}
