import EditButtons from "./EditButton"
import recentIcon from "../../../../assets/icons/variant2/recent.png"
import hotIcon from "../../../../assets/icons/variant2/hot.png"

/**
 * StatusFilterEditor component allows users to filter items based on their status.
 * @param onStatusChange - Callback function to handle status change
 * @param {string} onStatusChange.value - The new status value
 * @author Tien Dat
 */
const StatusFilterEditor = ({
  onStatusChange,
}: {
  onStatusChange: (value: string) => void
}) => {
  const StatusFilterButtons = [
    { title: "Recent", icon: recentIcon, state: "Recent" },
    { title: "Hot", icon: hotIcon, state: "Hot" },
  ]

  const handleStatusChange = (newStatus: string = "Recent") => {
    onStatusChange(newStatus)
  }
  return (
    <EditButtons
      buttons={StatusFilterButtons}
      onValueChange={handleStatusChange}
    />
  )
}

export default StatusFilterEditor
