import { ToDoTitle } from "../pages/ToDo/ToDo.styles";
import ColoredText from "../components/ColoredText/ColoredText";

const FormationTitle = ({title = ''}) => {

  return (
    <ToDoTitle>
      {/* {title} */}
      <ColoredText>{title}</ColoredText>
    </ToDoTitle>
  );
};

export default FormationTitle;