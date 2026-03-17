const planLabel = document.querySelector('#current-plan strong');
const storageLimitLabel = document.querySelector('#storage-limit strong');
const usageSlider = document.getElementById('used-storage');
const usageText = document.getElementById('usage-text');
const meterFill = document.getElementById('meter-fill');
const buttons = document.querySelectorAll('.select-plan');

let currentLimit = '2 TB';

function updateUsage() {
  const percent = Number(usageSlider.value);
  meterFill.style.width = `${percent}%`;
  usageText.textContent = `Using ${percent}% of your ${currentLimit}.`;
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedPlan = button.dataset.plan;
    const isPremium = selectedPlan === 'Premium';

    planLabel.textContent = selectedPlan;
    currentLimit = isPremium ? 'Unlimited storage' : '2 TB';
    storageLimitLabel.textContent = currentLimit;
    updateUsage();
  });
});

usageSlider.addEventListener('input', updateUsage);
updateUsage();
