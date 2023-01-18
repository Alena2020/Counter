function createView({
  onIncrementButtonClick,
  onDecrementButtonClick,
  onResetButtonClick
}) {
  const counterNode = document.querySelector('.counter');
  const incrementBtn = document.querySelector('.increment-btn');
  const decrementBtn = document.querySelector('.decrement-btn');
  const resetBtn = document.querySelector('.reset-btn');

  incrementBtn.addEventListener('click', onIncrementButtonClick);
  decrementBtn.addEventListener('click', onDecrementButtonClick);
  resetBtn.addEventListener('click', onResetButtonClick);

  return {
    render({ counter }) {
      counterNode.innerHTML = counter;
    }
  }
}