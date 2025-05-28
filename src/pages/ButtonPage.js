import Button from "../components/Button";
import {
  BsAlarmFill,
  BsApple,
  BsArrowDownSquareFill,
  BsArrowRepeat,
  BsBellFill,
} from "react-icons/bs";

function ButtonPage() {
  const handleClick = () => {
    alert("Hello");
  };
  return (
    <div>
      <div>
        <Button
          success
          rounded
          outline
          className="mb-2 mt-3  "
          onClick={handleClick}
        >
          <BsBellFill />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <BsAlarmFill />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <BsApple />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <BsArrowDownSquareFill />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          <BsArrowRepeat />
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
