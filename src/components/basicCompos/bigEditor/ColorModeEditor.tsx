import EditButtons from "./EditButton"
import griddots from "../../../assets/icons/color-board/grid-dots.png"
import palette from "../../../assets/icons/color-board/palette.png"
import { useState } from "react"

const ColorModeEditor = ({
  onChangeMode,
}: {
  onChangeMode: (mode: string | undefined) => void
}) => {
  const ColorMixerButtons = [
    {
      title: "Swatches",
      icon: griddots,
      state: "Swatches",
    },
    {
      title: "Color Mixer",
      icon: palette,
      state: "Color Mixer",
    },
  ]

  return (
    <EditButtons
      buttons={ColorMixerButtons}
      onValueChange={(value) => onChangeMode(value)}
    />
  )
}

export default ColorModeEditor
