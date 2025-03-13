import React from "react"
import EditButtons from "./EditButton"
import alignbottom from "../../../assets/icons/align/layout-align-bottom.png"
import aligncenter from "../../../assets/icons/align/layout-align-center.png"
import alignleft from "../../../assets/icons/align/layout-align-left.png"
import alignmiddle from "../../../assets/icons/align/layout-align-middle.png"
import alignright from "../../../assets/icons/align/layout-align-right.png"
import aligntop from "../../../assets/icons/align/layout-align-top.png"

interface AlignButtonProp {
  onAlignChange: (align: string) => void
}

const AlignEditor: React.FC<AlignButtonProp> = ({ onAlignChange }) => {
  const handleAlignChange = (newAlign: string = "left") => {
    onAlignChange(newAlign)
  }

  const AlignButtons = [
    { icon: alignleft, state: "left" },
    { icon: aligncenter, state: "center" },
    { icon: alignright, state: "right" },
    { icon: alignbottom, state: "bottom" },
    { icon: alignmiddle, state: "middle" },
    { icon: aligntop, state: "top" },
  ]
  return (
    <EditButtons buttons={AlignButtons} onValueChange={handleAlignChange} />
  )
}

export default AlignEditor
