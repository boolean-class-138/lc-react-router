import { useAlertContext } from "../contexts/AlertContext";

export default function Alert() {
  const { alertData, setAlertData } = useAlertContext();

  const handleAlertClose = () => {
    setAlertData({ type: "", message: "" });
  };

  const classes = {
    info: "p-4 bg-blue-200",
    success: "p-4 bg-green-200",
    danger: "p-4 bg-red-200",
  };

  if (!alertData.message) return null;

  return (
    <div className={classes[alertData.type]}>
      {alertData.message}
      <i
        className="fa-solid fa-xmark absolute right-4 top-2"
        onClick={handleAlertClose}
      ></i>
    </div>
  );
}
