import {  useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

export default function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false)
  }
  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open
      </Button>
      {showModal && (
        <Modal
          onClose={handleClose}
          actionBar={
            <Button primary onClick={handleClose}>
              I Accept
            </Button>
          }
        >
          <p> here is an important agreement for u to accept</p>
        </Modal>
      )}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat,
        sapien non eleifend molestie, nunc nisl tempor elit, ac gravida metus
        tellus sed purus. Sed ut feugiat enim. In tincidunt sit amet magna ac
        blandit. Duis condimentum tristique mi, a pellentesque ligula pretium
        et. Morbi suscipit molestie neque, vel rhoncus nunc condimentum quis.
        Sed interdum lacus felis, ac fermentum odio commodo a. Curabitur in
        fringilla nunc. Phasellus eu tempus nunc, id rhoncus tellus. Etiam odio
        nunc, convallis quis enim vel, maximus pharetra risus. Cras maximus dui
        sed tellus congue, vel accumsan enim sodales.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat,
        sapien non eleifend molestie, nunc nisl tempor elit, ac gravida metus
        tellus sed purus. Sed ut feugiat enim. In tincidunt sit amet magna ac
        blandit. Duis condimentum tristique mi, a pellentesque ligula pretium
        et. Morbi suscipit molestie neque, vel rhoncus nunc condimentum quis.
        Sed interdum lacus felis, ac fermentum odio commodo a. Curabitur in
        fringilla nunc. Phasellus eu tempus nunc, id rhoncus tellus. Etiam odio
        nunc, convallis quis enim vel, maximus pharetra risus. Cras maximus dui
        sed tellus congue, vel accumsan enim sodales.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat,
        sapien non eleifend molestie, nunc nisl tempor elit, ac gravida metus
        tellus sed purus. Sed ut feugiat enim. In tincidunt sit amet magna ac
        blandit. Duis condimentum tristique mi, a pellentesque ligula pretium
        et. Morbi suscipit molestie neque, vel rhoncus nunc condimentum quis.
        Sed interdum lacus felis, ac fermentum odio commodo a. Curabitur in
        fringilla nunc. Phasellus eu tempus nunc, id rhoncus tellus. Etiam odio
        nunc, convallis quis enim vel, maximus pharetra risus. Cras maximus dui
        sed tellus congue, vel accumsan enim sodales.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat,
        sapien non eleifend molestie, nunc nisl tempor elit, ac gravida metus
        tellus sed purus. Sed ut feugiat enim. In tincidunt sit amet magna ac
        blandit. Duis condimentum tristique mi, a pellentesque ligula pretium
        et. Morbi suscipit molestie neque, vel rhoncus nunc condimentum quis.
        Sed interdum lacus felis, ac fermentum odio commodo a. Curabitur in
        fringilla nunc. Phasellus eu tempus nunc, id rhoncus tellus. Etiam odio
        nunc, convallis quis enim vel, maximus pharetra risus. Cras maximus dui
        sed tellus congue, vel accumsan enim sodales.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat,
        sapien non eleifend molestie, nunc nisl tempor elit, ac gravida metus
        tellus sed purus. Sed ut feugiat enim. In tincidunt sit amet magna ac
        blandit. Duis condimentum tristique mi, a pellentesque ligula pretium
        et. Morbi suscipit molestie neque, vel rhoncus nunc condimentum quis.
        Sed interdum lacus felis, ac fermentum odio commodo a. Curabitur in
        fringilla nunc. Phasellus eu tempus nunc, id rhoncus tellus. Etiam odio
        nunc, convallis quis enim vel, maximus pharetra risus. Cras maximus dui
        sed tellus congue, vel accumsan enim sodales.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat,
        sapien non eleifend molestie, nunc nisl tempor elit, ac gravida metus
        tellus sed purus. Sed ut feugiat enim. In tincidunt sit amet magna ac
        blandit. Duis condimentum tristique mi, a pellentesque ligula pretium
        et. Morbi suscipit molestie neque, vel rhoncus nunc condimentum quis.
        Sed interdum lacus felis, ac fermentum odio commodo a. Curabitur in
        fringilla nunc. Phasellus eu tempus nunc, id rhoncus tellus. Etiam odio
        nunc, convallis quis enim vel, maximus pharetra risus. Cras maximus dui
        sed tellus congue, vel accumsan enim sodales.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat,
        sapien non eleifend molestie, nunc nisl tempor elit, ac gravida metus
        tellus sed purus. Sed ut feugiat enim. In tincidunt sit amet magna ac
        blandit. Duis condimentum tristique mi, a pellentesque ligula pretium
        et. Morbi suscipit molestie neque, vel rhoncus nunc condimentum quis.
        Sed interdum lacus felis, ac fermentum odio commodo a. Curabitur in
        fringilla nunc. Phasellus eu tempus nunc, id rhoncus tellus. Etiam odio
        nunc, convallis quis enim vel, maximus pharetra risus. Cras maximus dui
        sed tellus congue, vel accumsan enim sodales.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat,
        sapien non eleifend molestie, nunc nisl tempor elit, ac gravida metus
        tellus sed purus. Sed ut feugiat enim. In tincidunt sit amet magna ac
        blandit. Duis condimentum tristique mi, a pellentesque ligula pretium
        et. Morbi suscipit molestie neque, vel rhoncus nunc condimentum quis.
        Sed interdum lacus felis, ac fermentum odio commodo a. Curabitur in
        fringilla nunc. Phasellus eu tempus nunc, id rhoncus tellus. Etiam odio
        nunc, convallis quis enim vel, maximus pharetra risus. Cras maximus dui
        sed tellus congue, vel accumsan enim sodales.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat,
        sapien non eleifend molestie, nunc nisl tempor elit, ac gravida metus
        tellus sed purus. Sed ut feugiat enim. In tincidunt sit amet magna ac
        blandit. Duis condimentum tristique mi, a pellentesque ligula pretium
        et. Morbi suscipit molestie neque, vel rhoncus nunc condimentum quis.
        Sed interdum lacus felis, ac fermentum odio commodo a. Curabitur in
        fringilla nunc. Phasellus eu tempus nunc, id rhoncus tellus. Etiam odio
        nunc, convallis quis enim vel, maximus pharetra risus. Cras maximus dui
        sed tellus congue, vel accumsan enim sodales.
      </p>
    </div>
  );
}
