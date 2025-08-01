import { css } from 'hono/css';
import { useRef } from 'hono/jsx';
import type { FC } from 'hono/jsx';

const dialogClass = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 3px;
  background-color: white;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const buttonClass = css`
  background-color: red;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const DeleteButton: FC<{ articleId: string }> = ({ articleId: _id }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const handleClickDelete = (): void => {
    dialogRef.current?.showModal();
  };

  return (
    <div>
      <dialog class={dialogClass} ref={dialogRef}>
        {/* <form method="POST" action={`/articles/${articleId}/delete`}>
          <p>Are you sure you want to delete this article?</p>
          <div class={dialogButtons}>
            <button value="cancel" formmethod="dialog" class={cancelButton}>
              Cancel
            </button>
            <button type="submit" class={buttonClass}>
              OK
            </button>
          </div>
        </form> */}
      </dialog>
      <button type="button" class={buttonClass} onClick={handleClickDelete}>
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;
