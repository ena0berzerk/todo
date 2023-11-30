const openForm = document.querySelector('.open-task-form');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');

export default function openModal() {
  openForm.addEventListener('click', (_) => {
    modal.style.display = 'block';
  });
}

export function closeModal() {
  modal.style.display = 'none';
}

closeBtn.addEventListener('click', (_) => {
  closeModal();
});

window.addEventListener('click', (_) => {
  if (_.target === modal) {
    closeModal();
  }
});

window.addEventListener('keydown', (_) => {
  if (_.key === 'Escape') {
    closeModal();
  }
});
