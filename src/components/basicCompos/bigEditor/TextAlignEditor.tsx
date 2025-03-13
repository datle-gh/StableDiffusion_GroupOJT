import EditButtons from "./EditButton"
import textalignleft from "../../../assets/icons/text-align/align-left.png"
import textaligncenter from "../../../assets/icons/text-align/align-center.png"
import textalignright from "../../../assets/icons/text-align/align-right.png"
import textalignjustify from "../../../assets/icons/text-align/align-justified.png"

interface TextAlignEditorProps {
  onTextAlignChange: (align: string) => void
}

const TextAlignEditor: React.FC<TextAlignEditorProps> = ({
  onTextAlignChange,
}) => {
  const TextAlignButtons = [
    { icon: textalignleft, state: "left" },
    { icon: textaligncenter, state: "center" },
    { icon: textalignright, state: "right" },
    { icon: textalignjustify, state: "justify" },
  ]

  const handleTextAlignChange = (newTextAlign: string = "left") => {
    onTextAlignChange(newTextAlign)
  }

  return (
    <EditButtons
      buttons={TextAlignButtons}
      onValueChange={handleTextAlignChange}
    />
  )
}

export default TextAlignEditor
