import { View } from "react-native"
import EditButtons from "./EditButton"

const AccelerateEditor = ({
  onAccelerateChange,
}: {
  onAccelerateChange: (mode: boolean) => void
}) => {
  const buttons = [
    { title: "On", state: "true" },
    { title: "Off", state: "false" },
  ]

  return (
    <View>
      <EditButtons
        buttons={buttons}
        onValueChange={(value) => {
          onAccelerateChange(value?.toLowerCase() === "true")
        }}
      />
    </View>
  )
}

export default AccelerateEditor
